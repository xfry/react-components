// src/compoents/Application-list.js
import React from "react";
import { Link } from 'react-router';

class ApplicationList extends React.Component{
  render() {
    return (
      <div>
        <ul>
          <Link to="app/canvas"> <li>PCTE canvas</li> </Link>
          {this.props.children}
        </ul>
      </div>
    );
  }
};

export default ApplicationList;