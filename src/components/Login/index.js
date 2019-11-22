import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import SignUp from '../Signup';


const Wrapper = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    padding-top: 40px;

    /* Styling simple text */
    .signUpSocial-text, .signUp-text{
        font-size: 14px;
        color: #8B8B8B;
        margin-top: 40px;
    }

`;


const Title = styled.h1`
    font-size: 25px;
    font-weight: 900;
    font-stretch: ultra-condensed;
`;


const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
    margin-top: 30px;
`;


const Label = styled.label`
    font-size: 12px;
    margin: 0;
    font-weight: 500;
`;


const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #D3D3D3;
    padding: 10px;
    margin-bottom: 30px;
`;



const Input = styled.input`
    border: none;
    outline: none;
    margin-left: 20px;
    font-size: 15px;
`;

const ForgotPass = styled.button`
    font-size: 12px;
    margin-top: -20px;
    margin-right: 0;
    margin-left: auto;
    color: #8B8B8B;
    border: none;
    background: none;
    padding: 0;
   /*  &:active{
        box-shadow: none;
    } */
`;

const Button = styled.button`
    width: 100%;
    margin-top: 30px;
    color: #fff;
    background-color: #29979C;
    height: 40px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
    border: none;
`;

const Social = styled.div`
    margin-top: 10px;

    .social-icons{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 13px;
        margin: 5px;

        &:nth-child(1){
            background-color: #4172B8;
        }

        &:nth-child(2){
            background-color: #1DA1F2;
        }

        &:nth-child(3){
            background-color: #E64235;
        }
    }
`;


export const Login = () => {
    return (
        <Wrapper>
            <Title>Login</Title>
            <Form>
                <Label for="username">Username</Label>
                <InputWrapper>
                    <FontAwesomeIcon className="search-icon" icon={faUser} color="#D3D3D3" />
                    <Input type="text" id="username" name="username" placeholder="Type your username" />
                </InputWrapper>

                <Label for="password">Password</Label>
                <InputWrapper>
                    <FontAwesomeIcon className="search-icon" icon={faLock} color="#D3D3D3" />
                    <Input id="password" type="password" name="password" placeholder="Type your password" />
                </InputWrapper>

                <ForgotPass>Forgot password?</ForgotPass>

                <Button>Login</Button>
            </Form>

            <div className="signUpSocial-text">Or Sign Up Using</div>

            <Social>
                <FontAwesomeIcon className="social-icons" icon={faFacebookF} color="#FFFFFF" />
                <FontAwesomeIcon className="social-icons" icon={faTwitter} color="#FFFFFF" />
                <FontAwesomeIcon className="social-icons" icon={faGoogle} color="#FFFFFF" />
            </Social>

            <div className="signUp-text">Have not account yet?</div>

            <SignUp buttonLabel="Sign Up" />

        </Wrapper>
    )
}