import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import _ from "lodash";

const SignedIn = ({ signOut, user, toggle }) => {
  return (
    <React.Fragment>
      <NavItem className="left">
        <Link
          onClick={() => {
            toggle();
            signOut();
          }}
          to=""
        >
          LOGOUT
        </Link>
      </NavItem>
      <NavItem className="left">
        <Link
          to="/profilePage"
          onClick={() => {
            toggle();
          }}
        >
          {user.lastName.charAt(0).toUpperCase()}
          {user.FirtName.charAt(0).toUpperCase()}
        </Link>
      </NavItem>
    </React.Fragment>
  );
};
// class SignedIn extends Component {

//   render() {
//     return (
//       <React.Fragment>
//         <NavItem className="left">
//           <Link
//             onClick={() => {
//               this.toggle();
//               this.signOut();
//             }}
//             to=""
//           >
//              SIGN OUT
//           </Link>
//         </NavItem>
//         <NavItem className="left">
//           <Link
//             to="/profilePage"
//             onClick={() => {
//               this.toggle();
//             }}
//           >
//             PROFILE
//           </Link>
//         </NavItem>
//       </React.Fragment>
//     );
//   }
// }

export default SignedIn;
