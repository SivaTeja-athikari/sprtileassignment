import StudentLogin from "./components/Login/StudentLogin";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeacherLogin from "./components/Login/TeacherLogin";
import StudentView from "./components/View/StudentView";
import TeacherView from "./components/View/TeacherView";
import './App.css'

const App = () => {
  return ( 
    <>
    <div className="app-container">
         <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Header}></Route>
            <Route exact path="/studentlogin" component={StudentLogin}></Route>
            <Route exact path="/teacherlogin" component={TeacherLogin}></Route>
            <Route exact path="/studentview" component={StudentView}></Route>
            <Route exact path="/teacherview" component={TeacherView}></Route>
          </Switch>
          
         </BrowserRouter>

    </div>

    </>
   );
}
 
export default App;