import React, { Component } from 'react';
import "../Header/index.css"
import StudentRegistration from '../Registration/StudentRegistartion';
import TeacherRegistration from '../Registration/TeacherRegistration';
class Header extends Component {
    state = {
        teacherStatus: false,
        studentStatus: false,
    }
    handleTeacher = () => {
        this.setState({ teacherStatus: true })

    }
    handleStudent = () => {
        this.setState({ studentStatus: true })
    }
    render() {
        const { teacherStatus, studentStatus } = this.state
        console.log(teacherStatus, studentStatus)
        return (
            <>
                {studentStatus ? <StudentRegistration /> : null}
                {teacherStatus ? <TeacherRegistration /> : null}

                {(studentStatus || teacherStatus) === false ? <div className='avatar-container'>
                    <div className='avatar-profile'>
                        <div>
                            <img onClick={this.handleTeacher} className='teacher-avatar' src='https://cdn-icons-png.flaticon.com/512/3429/3429433.png' alt='teacher'></img>
                            <p>Teacher Login</p>
                        </div>
                        <div> <img onClick={this.handleStudent} className='student-avatar' src='https://cdn-icons-png.flaticon.com/512/201/201818.png' alt='teacher'></img>
                            <p>Student Login</p>
                        </div>
                    </div>


                </div> : null
                }

            </>
        );
    }
}

export default Header;