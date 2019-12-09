import React from 'react';
import './AdminPanel.css';

export default class AdminPanel extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1</td>
              <td>Yaroslav Pryhoda</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}