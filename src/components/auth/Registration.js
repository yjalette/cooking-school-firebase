import React, { Component } from 'react'
import SignUp from './SignUp';
import SignIn from './SignIn';


const btn = {
    width: '100%',
    border: 'none'
}

const div = {
    width: '100%'
}

class Registration extends Component {
    state = {
        isSignUp: true
    }

    handleSignUpClick = e => {
        this.setState({
            isSignUp: true
        }
        )
    }

    handleSignInClick = e => {
        this.setState({
            isSignUp: false
        }
        )
    }
    render() {
        return (
            <div className="h-100">
                <div className="flex flex-column">
                <h1 className="my-5">Registration</h1>
                    <div className="width-25 flex">
                    <section className="registration w-100 border p-xl-5 m-xl-5 p-1 m-2 bg-white">
                        <section className="flex">
                            <div style={div} >
                                <button onClick={this.handleSignUpClick} style={btn} className={this.state.isSignUp ? `active-tab` : null}>Sign Up</button>
                            </div>
                            <div style={div}>
                                <button onClick={this.handleSignInClick} style={btn} className={!this.state.isSignUp ? `active-tab` : null}>Sign In</button>
                            </div>
                        </section>
                        {this.state.isSignUp ? <SignUp /> : <SignIn />}
                    </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration
