import React, { Component } from 'react';

export default class LatihanCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Number: 10
    };
  }

  Hitung = () => {
    this.setState({ Number: this.state.Number + 1 });
  };
  Kurang = () => {
    if (this.state.Number > 0) {
      this.setState({ Number: this.state.Number - 1 });
    } else {
      this.setState({ Number: 0 });
    }
  };
  myReset = () => {
    this.setState({ Number: 0 });
  };

  render() {
    return (
      <div>
        <h1>Hitung Nilai Number : {this.state.Number}</h1>
        <br />
        <div>
          <button onClick={this.Hitung}>+</button>{' '}
          <button onClick={this.Kurang}>-</button>{' '}
          <button onClick={this.myReset}>Reset</button>{' '}
        </div>
      </div>
    );
  }
}
