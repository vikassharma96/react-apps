import React, { Component } from "react";

// stateless functional component
const NavBar = ({ totalCount }, props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalCount}</span>
      </a>
    </nav>
  );
};
// class component
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCount}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
