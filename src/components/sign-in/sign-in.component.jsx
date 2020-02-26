import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({email:'', password:''});
    }

    onHandleChange = e => {
        const {value,name} = e.target;
        this.setState({[name]: value}); 
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account!</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="Email" handleChange={this.onHandleChange} value={this.state.email} required />
                    <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.onHandleChange} required />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton> 
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;