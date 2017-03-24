// src/compoents/Application-list.js
import React from "react";
import { Link } from 'react-router';
import {Table} from 'react-materialize';

const canvaStyle = {
  backgroundColor: 'gold',
  width: '100%'
};

class Appcanvas extends React.Component{
  render() {
    return (
      <div style={canvaStyle} className="canvas-app">
        <Table>
          <thead>
            <tr>
              <th data-field="id">Flag</th>
              <th data-field="name">Name</th>
              <th data-field="date">Creation Date</th>
              <th data-field="price">Owner</th>
              <th data-field="price">Location</th>
              <th data-field="price">Next Stop</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td>
                <Link to="/pcte">PCTE</Link>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
};

export default Appcanvas;