import React from 'react';
import './App.css';
import axios from 'axios'
import LoginPage from './LoginPage'
import SignUp from "./SignUp";

class App extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state={
            time:0,
            isLogin:false,
            openSignUp:false
        }
        this.handleLogIn =this.handleLogIn.bind(this);
        this.onClick =this.onClick.bind(this);

    }

    onClick(event){
        const {name} = event.target;
        this.setState((prevState) =>{
            return ({[name]:!prevState[name]})});
    }

    handleLogIn(event , email , password , remember){
        axios.post('users/login' , {email:email, password:password, remember:remember})
            .then(res =>{
                console.log(res.data['login'])
                this.setState({isLogin:res.data['login']})
            }).catch(e => console.log(e))
        event.preventDefault();
    }
    render() {
    return (
        <div>
            {(!this.state.isLogin) ?
                <button name={'openSignUp'} onClick={this.onClick}>{!this.state.openSignUp?'go to Signup'
                :"go to login"}</button> :""}
               <br/>
            {!this.state.isLogin ? !this.state.openSignUp?
                <LoginPage isLogin={this.state.isLogin} handleLogIn={this.handleLogIn}/>:
                <SignUp isLogin={this.state.isLogin} handleLogIn={this.handleLogIn}/>
                : 'you are logged in'}
        </div>
    );
    }
}

export default App;
