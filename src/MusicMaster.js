import React, { Fragment } from 'react';
import './css/musicMaster.css';
import Gallery from './Gallery';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

var request = require('request'); // "Request" library

export default class MusicMaster extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            name: '-',
            artist_picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAXVBMVEUpMTRnjLEiJiNcfJxrkbgkKSgoLzEmLS5EWWxXdpM0QkxAVGUuOT9kiKslKytSbohPaYJggqM+UF8wO0I6SldIX3Q2RE9LY3oyP0crNDk+UWFWdJA7S1lPaH9jhacMRR/OAAADlElEQVR4nO3c7XKqMBSFYSi4CSCB8CGkKvd/mUfAVoNgHUiPdbuef51aprwDAQLiOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6NAbiySAT17jVYIZFNloUVZ1cjg2Wu1WJypxLUqUVn87LVaiLbKtxuj46vti+4wwvKmMUjEs9drkaBSv1HDdVX1isOHPA45fIuGHLV89rot8DH8861oIksa0Q6BP569bgucc3gbsmbjMchhb5HIYeCWo9/kly+SVQ4K9GlU3RXLT7M55dBNlXbXHfu6WrqBMMpBTfx1zq6KhT3Y5CAdeZcLmHa37LqDTY5tap5o74sli2ScY8nmwSVHUI0uw/wqWtCDTY56PPNRl/M5Zs9NuOSQ2aiGG4r5s4/oc2ZXYpMjHefw5ictxN7NDpM93jAH6dM6t+nklPn75aAy7H+fTu0vXHLcHFnmdgfKz2Nu0k4cetjkEKMavmimclBwmW0Ob2cGuOSgnWfmULvJv9nGV58pb3YnLjkcKcxpdTG5bezMZDeXemxyUCSSy5mYX01tHAGZI0ySCGn2YJPDISevPZWctF74OTmM5sfxbSpVlcYn+OQ4BZFadNM/x6aYOsaSbt0bbWh8lFMOx9GlOPkstlMf11O3MBOVX/fgleN0HD2ZPt8o5+5uX4+nzHLMIhnP1EhUeVnAu+TQ4Z1HH7LvJTDNMdpf6HNiFL0S7s5/wDMHRdr4udjfreG2mR56sMxBjrfPrzYQEd6v0e0vh/4AwzGHLivfVeXXBhLE9/eUgddfADPMQU3abQ3ZefvQdDMVMqmfHmGYQ59nkVXe/USifuwBsrR74odhju9L/bS7Exf8PG4wzkEkLvcms1LK+NFHLVnmOJinW573aA2OOUgezEmg5PEHT/nloObeqfi75SA5e9X6hjkoEt699X2vHNtov+p5fV45qBHrvr3AKseqUZRfDpmt/WYLrxyPXachB3IgB3Ighwk5DMhhMHOsPO/weeXIkpUyTjkcvV2pvw/BJoez9kuS/UL45LACOQwMcqhSB5boUr1wjuEQmWQitkRk55n3V8zx9UoCi+8kGJanjq/4SgLK10wV3+HlL/k+k039Ozlqi4Pz/xQcbh6cXS05Hl7xZSYdKoTVl5n0w4dY+p3kv6DIhVX5ou/f/hlEtk46Bmve7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj/wCGXEuzlUGJPAAAAABJRU5ErkJggg==',
            genre: [],
            tracks: [],
            totFoll: 0
        }
    }
    search() {
        console.log('query', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search';
        const FETCH_URL = BASE_URL + '?q=' + this.state.query + '&type=artist&limit=1';

        const ACCESS_TOKEN = 'BQADOYUjePQkrlrTVVrTqvfNycqLnGln_99th231EEcSlF8OqES1xKWVAUs5WKuLR4Xwbx01F2gGfGJDBd5gsoEnWDHF-j6TQGLY4JFT6oy693fK3MFNAqtkuyju3oqOtd5wruFT_ayAZNn7tLAmmYdz3UAwopLIohEvC4OwmB1Q7OJOIQ'
        console.log('F_URL', FETCH_URL);

        var options = {
            url: FETCH_URL,
            headers: { 'Authorization': 'Bearer ' + ACCESS_TOKEN },
            json: true
        };

        request.get(options, (error, response, body) => {
            console.log('body',body);
            if (body.error != null) {
                switch(body.error.status){
                    case 401:
                        alert(body.error.message);
                        break;
                    default:
                        console.log(body.error);
                }
            } else {
                var artist = body.artists.items[0]
                var id = artist.id;
                var name1 = artist.name;
                var pic_src = artist.images[0].url;
                var gen = artist.genres;
                var totFoll = artist.followers.total;
                this.setState({
                    name: name1,
                    artist_picture: pic_src,
                    genre: gen,
                    totFoll: totFoll
                });

                var FETCH_URL2 = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=IN`;
                var options2 = {
                    url: FETCH_URL2,
                    headers: { 'Authorization': 'Bearer ' + ACCESS_TOKEN },
                    json: true
                };
                request.get(options2, (error2, response, body2) => {
                    if (error == null) {
                        console.log('body2', body2);
                        this.setState({ tracks: body2.tracks });
                    } else {
                        console.log('error2', error2);
                    }

                });

            }
        });
    }

    render() {
        return (
            <Fragment className="mainbody">
                <Container className="musicBody" fluid>
                    <Row>
                        <Col lg={5}>
                            {/* Search and Info */}
                            <Row className="p-50">
                                <Col lg={10}>
                                    <Form.Label htmlFor="inlineFormInput" srOnly>
                                        Song Name
                                </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Enter Song Name"
                                        onChange={(ev) => this.setState({ query: ev.target.value })}
                                        onKeyPress={(ev => {
                                            if (ev.key == 'Enter') {
                                                this.search();
                                            }
                                        })}
                                    />
                                </Col>
                                <Col lg={2}>
                                    <Button type="submit" className="mb-2" onClick={(ev) => { ev.preventDefault(); this.search() }}>
                                        Search
                                </Button>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center text-center">
                                <Col sm={10} className="profile">
                                    <div>
                                        <img className="profileImage" width="250px" height="250px" src={this.state.artist_picture} />
                                    </div>
                                    <div className="profileData">
                                        <p>Artist Name: {this.state.name}</p>
                                        <p>
                                            <ul className="genres">
                                                {
                                                    this.state.genre.map((v,k)=> <li>{v}</li> )
                                                }
                                            </ul>
                                        </p>
                                        <p>{this.state.totFoll} Followers </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={7} className="mt-5">
                            {/* Gallery */}
                            <Row className="justify-content-md-center gallery">
                                <Col sm={12}>
                                    <Gallery tracks={this.state.tracks} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}
