/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : sign-up.component.jsx
 *******************************************/
//React
import React from 'react';

//Components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

//Styles
import './sign-up.styles.scss'

//Misc
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }

    }
    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
            if(password !== confirmPassword){
                alert("Passwords don't match");
                return;
            }

            try {
                const {user} = await auth.createUserWithEmailAndPassword(email,password);
                
                await createUserProfileDocument(user,{displayName});
                
                this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                });
            }catch(err){
                console.error(err);
            }
    }

    handleChange = event =>{
        const {name,value } = event.target;

        this.setState({ [name] : value });
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value = {displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value = {email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value = {password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value = {confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit' > Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp