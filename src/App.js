import React from 'react';
import './App.css';
import axios from 'axios'
import LoginPage from './LoginPage'
import SignUp from "./SignUp";
import LogoutBottom from "./LogoutBottom";

class App extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            time: 0,
            isLogin: false,
            openSignUp: false,
            errorText: '',
            email: '',
            loading: false
        }
        this.handleLogIn = this.handleLogIn.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    componentDidMount() {
        axios.get('/logged')
            .then(res => {
                console.log(res.data)
                return this.setState({isLogin: res.data['login_status'], email: res.data['email'], loading: true})
            })
            .catch(error => {
                console.log(error);
                return this.setState({isLogin: false, loading: true})
            })
    }

    onClick(event) {
        const {name} = event.target;
        this.setState((prevState) => {
            return ({[name]: !prevState[name]})
        });
    }

    handleLogIn(event, email, password, remember) {
        axios.post('users/login', {email: email, password: password, remember: remember})
            .then(res => {
                this.setState({isLogin: (res.data['login_status'])})
            }).catch(e => console.log(e))
        event.preventDefault();
    }

    render() {

        const l = () => this.state.isLogin;
        const e = () => this.state.email;
        const handleClick = () => {
            return axios.put('users/logout').then((res)=>
                !res.data['login_status'] && this.setState({isLogin:false})
            )
        }
        return (
            <div>
                <LogoutBottom email={e} isLogin={l} onClick={handleClick}/>
                {(!this.state.isLogin) ?
                    <button name={'openSignUp'} onClick={this.onClick}>{!this.state.openSignUp ? 'go to Signup'
                        : "go to login"}</button> : ""}
                <br/>
                {!this.state.isLogin ? !this.state.openSignUp ?
                    <LoginPage isLogin={this.state.isLogin} handleLogIn={this.handleLogIn}/> :
                    <SignUp isLogin={this.state.isLogin} handleLogIn={this.handleLogIn}/>
                    : 'you are logged in'}
                <br/>
            </div>
        );
    }
}

export default App;
