import styled from "styled-components";

export const FormStyle = styled.form`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-bottom: 10px;
    input{
        outline: none;
        color: #000;
        border-radius: 5px;
        width: 500px;
        min-width: 200px;
        padding: 5px;
        font-size: 18px;
        border: 1px solid #000;
    }

    button{
        padding: 5px;
        border: 1px solid #000;
        font-size: 18px;
        border-radius: 5px;
        background-color: transparent;
        width: 150px;
        margin: 0 10px;
        cursor: pointer;
    }
`