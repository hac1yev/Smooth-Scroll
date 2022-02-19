import styled from "styled-components"
import {Link} from 'react-router-dom'

export const SignInContainer = styled.div`
    background: #01BF71;
    max-width: 100%;
    max-height: 100vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
    color: #fff;
`;

export const IconWrapper = styled.div`
    margin: 30px 0 0 30px;
    display: flex;
    height: 50px;
`;

export const Icon = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    font-size: 35px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

export const FormWrapper = styled.form`
    margin: 50px auto;
    max-width: 450px;
    max-height: 500px;
    background-color: #010606;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    padding: 50px 100px;

    @media screen and (max-width: 768px) {
        max-width: 400px;
        max-height: 480px;
    }


`;

export const FormH1 = styled.h1`
    font-size: 25px;
    color: #fff;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`;

export const EmailLabel = styled.label`
    color: #fff;
    margin-bottom: 5px;
    font-size: 14px;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
`;

export const PasswordLabel = styled.label`
    color: #fff;
    margin-bottom: 5px;
    font-size: 14px;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        margin-top: 15px;
    }
`;

export const InputEmail =styled.input`
    padding: 16px 16px;
    font-size: 18px;
    width: 120%;
    border: none;
    border-radius: 4px;

    @media screen and (max-width: 768px) {
        padding: 14px 16px;
    }
`;

export const InputPassword =styled.input`
    padding: 16px 16px;
    width: 120%;
    border: none;
    border-radius: 4px;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        padding: 14px 16px;
    }
`;

export const FormButton = styled.button`
    background-color: #01BF71;
    font-size: 16px;
    margin-top: 20px;
    width: 80%;
    padding: 16px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: 14px 0;
    }
`;

export const FormP = styled.p`
    font-size: 14px;
    color: #fff;
`;