import React, { Component } from 'react';
import FunctionComponent from '../FunctionComponent';
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'miftah',
      age: 20,
      city: 'jakarta',
      Ocupation: 'softwareEngineer'
    };
  }
  //utk merubah state nilai sgn setState
  //bisa di lakukan dlm event mis button bisa onClick,onDoubleClick bisa OnMouseOver dll
  //tergantung event yg dipakai
  changeName = () => {
    this.setState({ name: 'indra' });
  };

  addAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <h1>Ini Class Component</h1>
        <h4>
          hello my name is {this.state.name}, I live in {this.state.city}, iam{' '}
          {this.state.Ocupation} and my age is {this.state.age}
        </h4>
        <div>
          <button onKeyPress={this.changeName}>Change Name</button>
        </div>

        <div>
          <button onClick={this.addAge}>+</button>{' '}
        </div>

        <div>
          <button
            //ini contoh fungsi yg langsung ditulis diaplikasikan tanpa dipanggil nama seperti diatas
            onClick={() => {
              this.setState({ age: this.state.age - 1 });
            }}
          ></button>
        </div>
        <FunctionComponent age={this.state.age} addAge={this.addAge} />
      </div>
    );
  }
}
//jadi panggil componenet anak<spasi> namaVariable = this.state.namaStaenya
//nah di component anak dalam ini classfuncton kalau di consolelog
//dia adalah sebuah property isinya {namaVariable: nilai (this.state.namastate.valuenya)}
