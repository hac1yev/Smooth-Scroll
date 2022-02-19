import React from 'react'
import {SignInContainer,Icon,IconWrapper,FormWrapper,FormH1,EmailLabel,InputEmail,PasswordLabel,InputPassword,FormButton,FormP} from './SignInElements'

const SignIn = () => {
    return (
        <SignInContainer>
            <IconWrapper>
                <Icon to='/'>dollo</Icon>
            </IconWrapper>
            <FormWrapper>
                <FormH1>Sign in to your account</FormH1>
                <EmailLabel htmlFor="for">Email</EmailLabel>
                <InputEmail type="email" required></InputEmail>
                <PasswordLabel htmlFor="for">Password</PasswordLabel>
                <InputPassword type="password" required></InputPassword>
                <FormButton type="button">Continue</FormButton>
                <FormP>Forgot password</FormP>
            </FormWrapper>
        </SignInContainer>
    )
}

export default SignIn
