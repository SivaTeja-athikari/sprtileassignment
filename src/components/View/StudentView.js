import React, { Component } from 'react';
import Logout from '../Logout';
import './teacherView.css'

class StudentView extends Component {
  state = {
    studentName: "",
    studentAnswers: {}
  };

  handleStudentName = (e) => {
    this.setState({ studentName: e.target.value });
  };

  handleStudentAnswer = (e, index) => {
    const answer = e.target.value;
    this.setState((prevState) => ({
      studentAnswers: { ...prevState.studentAnswers, [index]: answer }
    }));
  };

  handleSubmit = () => {
    const questions = JSON.parse(localStorage.getItem("calculations"));
    const studentData = questions.map((question, index) => ({
      question: `${question.leftOperand} ${question.operator} ${question.rightOperand}`,
      studentAnswer: this.state.studentAnswers[index]
    }));
    localStorage.setItem("studentName", this.state.studentName);
    localStorage.setItem("studentData", JSON.stringify(studentData));
  };

  render() {
    const questions = JSON.parse(localStorage.getItem("calculations"));

    console.log(questions);
    return (
      <div className="question-container">

        <div className='student-name'>
          <label className='student-name-heading' htmlFor='name'>Name:</label>
          <input name='name' className="student-name-input" onChange={this.handleStudentName} placeholder="Enter your name"></input>
        </div>
        <br />
        <h2>Questions :</h2>
        <ul className="question-list">
          {questions.map((item, index) => (
            <li className="question-item" key={index}>
              {item.leftOperand} {item.operator} {item.rightOperand} ={" "}
              <input className="answer-input" onChange={(e) => this.handleStudentAnswer(e, index)} placeholder="Enter answer here"></input>
            </li>
          ))}
        </ul>
        <button className="submit-btn" onClick={this.handleSubmit}>Submit</button>
        <br />
        <Logout />
      </div>
    );
  }
}

export default StudentView;
