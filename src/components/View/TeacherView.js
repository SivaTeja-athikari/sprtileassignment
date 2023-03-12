import React, { Component } from 'react';
import Logout from '../Logout';
import './teacherView.css'

class TeacherView extends Component {
  state = {
    calculations: [],
    leftOperand: null,
    rightOperand: null,
    operator: null,
    result: null,
  };


  zero() {
    return 0;
  }

  one() {
    return 1;
  }

  two() {
    return 2;
  }

  three() {
    return 3;
  }

  four() {
    return 4;
  }

  five() {
    return 5;
  }

  six() {
    return 6;
  }

  seven() {
    return 7;
  }

  eight() {
    return 8;
  }

  nine() {
    return 9;
  }

  plus(leftOperand, rightOperand) {
    return leftOperand + rightOperand;
  }

  minus(leftOperand, rightOperand) {
    return leftOperand - rightOperand;
  }

  times(leftOperand, rightOperand) {
    return leftOperand * rightOperand;
  }

  divided_by(leftOperand, rightOperand) {
    return Math.floor(leftOperand / rightOperand);
  }

  handleLeftOperandChange = (event) => {
    this.setState({ leftOperand: Number(event.target.value) });
  };

  handleRightOperandChange = (event) => {
    this.setState({ rightOperand: Number(event.target.value) });
  };

  handleOperatorChange = (event) => {
    this.setState({ operator: event.target.value });
  };

  handleCalculate = () => {
    const { leftOperand, rightOperand, operator } = this.state;
    const result = this.calculateResult(leftOperand, rightOperand, operator);
    const calculation = { leftOperand, rightOperand, operator, result };
    const calculations = [...this.state.calculations, calculation];
    this.setState({ calculations });
  };

  calculateResult = (leftOperand, rightOperand, operator) => {
    let result;
    switch (operator) {
      case 'plus':
        result = this.plus(leftOperand, rightOperand);
        break;
      case 'minus':
        result = this.minus(leftOperand, rightOperand);
        break;
      case 'times':
        result = this.times(leftOperand, rightOperand);
        break;
      case 'divided_by':
        result = this.divided_by(leftOperand, rightOperand);
        break;
      default:
        result = null;
    }
    return result;

  };

  renderCalculations = () => {
    const { calculations } = this.state;
    return calculations.map((calculation, index) => (
      <div className='calculation-item' key={index}>
        <div>
          {calculation.leftOperand} {calculation.operator} {calculation.rightOperand} =
        </div>
        <div>{calculation.result}</div>
      </div>
    ));
  };

  componentDidMount() {
    const storedItems = localStorage.getItem('calculations');
    if (storedItems) {
      this.setState({ calculations: JSON.parse(storedItems) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('calculations', JSON.stringify(this.state.calculations));
  }


  render() {
    const name = localStorage.getItem("studentName")
    const studentData = JSON.parse(localStorage.getItem("studentData"))
    const { calculations } = this.state;
    console.log(calculations)

    return (
      <div className='teacher-container'>
        <div>
          <div className='input-container'>
            <select className="my-select" onChange={this.handleLeftOperandChange}>
              <option value={this.zero()}>0</option>
              <option value={this.one()}>1</option>
              <option value={this.two()}>2</option>
              <option value={this.three()}>3</option>
              <option value={this.four()}>4</option>
              <option value={this.five()}>5</option>
              <option value={this.six()}>6</option>
              <option value={this.seven()}>7</option>
              <option value={this.eight()}>8</option>
              <option value={this.nine()}>9</option>
            </select>
            <select className="my-select" onChange={this.handleOperatorChange}>
              <option value="plus">+</option>
              <option value="minus">-</option>
              <option value="times">*</option>
              <option value="divided_by">/</option>
            </select>
            <select className="my-select" onChange={this.handleRightOperandChange}>
              <option value={this.zero()}>0</option>
              <option value={this.one()}>1</option>
              <option value={this.two()}>2</option>
              <option value={this.three()}>3</option>
              <option value={this.four()}>4</option>
              <option value={this.five()}>5</option>
              <option value={this.six()}>6</option>
              <option value={this.seven()}>7</option>
              <option value={this.eight()}>8</option>
              <option value={this.nine()}>9</option>
            </select>
            <button className="my-button" onClick={this.handleCalculate}>Add  question</button>
          </div>
          <br/>
          <h2>Questions:</h2>
          {this.renderCalculations()}
        </div>
        <div className="student-data">
          <h2>Student Answers</h2>
          <h2>{name}</h2>
          {
            studentData ? <ol>
              {studentData.map((eachStudentdata) => (
                <li className='student-answer'>{eachStudentdata.question} = {eachStudentdata.studentAnswer}</li>
              ))}
            </ol> : null
          }
        </div>
        <Logout />
      </div>
    );
  }
}
export default TeacherView;
