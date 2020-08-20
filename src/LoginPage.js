import React from "react";

class LoginPage extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state={
            email:'',
            password:'',
            isLogin:props.isLogin,
            handleLogIn:props.handleLogIn
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event){
        const {name , value } = event.target;
        this.setState({[name]:value})
    }

    onSubmit(event){
        this.state.handleLogIn(event, this.state.email, this.state.password , true)
    }



    render() {
        return (<div>
            <form onSubmit={this.onSubmit}>
                <textarea placeholder={'email'} name={'email'} onChange={this.handleChange}/>
                <br/>
                <textarea placeholder={'password'} name={'password'} onChange={this.handleChange}/>
                <br/>
                <button>login</button>
            </form>
        </div>)
    }
}
export default LoginPage

