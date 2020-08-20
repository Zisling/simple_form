import React from "react";
import axios from 'axios'

class SignUp extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state={
            first_name:'',
            last_name:'',
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
        event.preventDefault()
        const data = {
            first_name:this.state.first_name ,
            last_name:this.state.last_name ,
            email:this.state.email ,
            password:this.state.password
        }
        console.log(data)
        axios.post('/users/signup' ,data)
            .then(
        res => {
            return res.data.json['signup'] ? this.state.handleLogIn(event, this.state.email, this.state.password , true)
            : console.log('something went wrong in Signup.js')}
        ).catch(error=>console.log(error))

    }



    render() {
        return (<div>
            <form onSubmit={this.onSubmit}>
                <textarea placeholder={'first_name'} name={'first_name'} onChange={this.handleChange}/>
                <br/>
                <textarea placeholder={'last_name'} name={'last_name'} onChange={this.handleChange}/>
                <br/>
                <textarea placeholder={'email'} name={'email'} onChange={this.handleChange}/>
                <br/>
                <textarea placeholder={'password'} name={'password'} onChange={this.handleChange}/>
                <br/>
                <button>signup</button>
            </form>
        </div>)
    }
}
export default SignUp

