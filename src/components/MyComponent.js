// import React from "react";
// import { withRouter } from "react-router-dom";

// class MyComponent extends React.Component {
//   toAppPush() {
//     this.props.history.push("/React-Simple-Apps/app");
//   }
//   toLogInReplace() {
//     this.props.history.replace("/React-Simple-Apps/signin");
//   }
// }
// export default withRouter(MyComponent);

import React from 'react';
import history from "../history";

export function Login() {
   history.push('/React-Simple-Apps/app')
}
export function Logout() {
  history.replace('/React-Simple-Apps/signin')
}