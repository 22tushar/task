import styled from 'styled-components'

const Button = styled.button`
    background-color: black;
    color: #F9D423;
    padding: 10px 15px;
    border: 1px solid #F9D423;
    border-radius: 20px;
    outline: 0;
    text-transform: uppercase;
    margin: 15px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px ;
    transition: ease all 250ms;
    font-size: 14px;
    &:hover {
        color: #F86A0B;
        border: 1px solid #F86A0B;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

export default Button