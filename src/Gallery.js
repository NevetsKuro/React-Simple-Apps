import React, {Fragment} from 'react';
import { render } from 'react-dom';

export default class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playingUrl: '',
            playing: false,
            audio: null
        }
    }

    playAudio(previewUrl){
        console.log('state',this.state);
        if(previewUrl){
            let audio = new Audio(previewUrl);
            if(!this.state.playing){
                audio.play();
                this.setState({
                    playingUrl:previewUrl,
                    playing:true,
                    audio
                });
            }else{
                if(this.state.playingUrl==previewUrl){
                    this.state.audio.pause();
                    this.setState({
                        playing:false
                    });
                }else{
                    this.state.audio.pause();
                    audio.play();
                    this.setState({
                        playingUrl:previewUrl,
                        playing:true
                    });
                }
            }
        }else{
            alert("No Preview Available");
        }
    }
    render(){
        console.log('props',this.props);
        const { tracks } = this.props;
        return(
            <div>
                {
                    tracks.map((track, k)=>{
                        const trackImg = track.album.images[0].url;
                        return (
                            <div key={k} className="track text-center"
                                onClick={()=>this.playAudio(track.preview_url)}
                            >

                                <img src={trackImg}
                                    className="track-img"
                                    alt="track"
                                />
                                <div className="track-play">
                                    <div className="inner-track">
                                        {
                                            this.state.playing == true?
                                            <span>||</span>:
                                            <span>&#9654;</span>
                                        }
                                    </div>
                                </div>
                                <p className="track-text text-center">
                                    {track.name}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}