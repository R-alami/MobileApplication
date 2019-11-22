import React, { useState } from 'react';

import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



/* Styling SignUp Button */
const SignUpButton = styled.button`
        font-size: 14px;
        text-transform:  uppercase;
        margin-top: 15px;
        border: none;
        background: none;
`;


const RegisterForm = styled.div`
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


const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #D3D3D3;
    outline: none;
    margin-bottom: 20px;
    font-size: 12px;

    &#password, &#repeatPassword {
        color: #E63852;
    }
`;

const CancelBtn = styled.button`
    font-size: 12px;
    color: #8B8B8B;
    border: none;
    background: none;
    padding: 0;
    text-decoration: underline;
   /*  &:active{
        box-shadow: none;
    } */
`;


const SignupModal = styled.button`
    width: 150px;
    color: #fff;
    background-color: #E63852;
    height: 35px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    border: none;
`;



const SignUp = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <SignUpButton onClick={toggle}>{buttonLabel}</SignUpButton>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                {/* <ModalHeader toggle={toggle}>Sign Up</ModalHeader> */}
                <ModalBody style={{padding: "2rem", display: "flex", flexDirection: "column" }}>
                    <RegisterForm>
                        <Label for="username">Username</Label>
                        <Input type="text" id="username" name="username" placeholder="Type your username" />

                        <Label for="email">E-Mail</Label>
                        <Input type="email" id="email" name="email" placeholder="Type your E-mail" />

                        <Label for="password">Password</Label>
                        <Input id="password" type="password" name="password" placeholder="Type your password" />

                        <Label for="repeatPassword">Repeat Password</Label>
                        <Input id="repeatPassword" type="password" name="repeatPassword" placeholder="Type again your password" />
                    </RegisterForm>
                </ModalBody>
                <ModalFooter style={{ border: "none", display: "flex", justifyContent: "space-around"}}>
                    <SignupModal onClick={toggle}>Sign Up</SignupModal>
                    <CancelBtn onClick={toggle}>I am already a member</CancelBtn>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SignUp;