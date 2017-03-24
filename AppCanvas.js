// src/compoents/Application-list.js
import React from "react";
import { Link } from 'react-router';
import {Table} from 'react-materialize';

const canvaStyle = {
  width: '100%'
};

class Appcanvas extends React.Component{
  render() {
    return (
      <div style={canvaStyle} className="canvas-app">
        <Table bordered >
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
                <Link to="app/canvas/pcte">PCTE</Link>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>

            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
};

export default Appcanvas;