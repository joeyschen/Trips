import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to the Trips Manager</h1>
        <p>Use this to manage your trips by:</p>
        <ul>
          <li>Adding a new trip</li>
          <li>Updating a trip</li>
          <li>Deleting a trip</li>
          <li>Showing all trips</li>
        </ul>
        <p>This is just a home project used to demonstrate simple CRUD operations using React and C#</p>
        </div>
    );
  }
}
