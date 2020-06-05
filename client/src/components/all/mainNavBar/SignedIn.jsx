import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const SignedIn = props => {
  return (
    <React.Fragment>
      <NavItem className="left">
        <Link
          onClick={() => {
            props.toggle();
            props.signOut();
          }}
          to=""
        >
          SIGN OUT
        </Link>
      </NavItem>
      <NavItem className="left">
        <Link
          to="/profilePage"
          onClick={() => {
            props.toggle();
          }}
        >
          PROFILE
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
//               this.props.toggle();
//               this.props.signOut();
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
//               this.props.toggle();
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
