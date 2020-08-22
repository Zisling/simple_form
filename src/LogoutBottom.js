import React from "react";

class LogoutBottom extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state={
            'email':props.email,
            'isLogin':props.isLogin,
            'onClick':props.onClick
        }

    }


    render() {
        return this.state.isLogin() && <button onClick={this.state.onClick}>logout</button>
    }

}

export default LogoutBottom;