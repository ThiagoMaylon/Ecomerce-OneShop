import styled from "styled-components";

export const HeaderStyle = styled.header`
    .constainer{
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100px;
        width: 100%;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.50);
    }
   
    .logo a{
        color: #000;
        text-decoration: none;
        font-weight: bold;
        font-size: 2em;
    } 

    form {
        input{
            outline: none;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid #000;
            padding: 5px;
            margin: 0 10px;
            max-width: 400px;
            min-width: 200px;
        }

        button{
            background-color: transparent;
            outline: none;
            cursor: pointer;
            padding: 10px;
            border: 1px solid #000;
            border-radius: 5px;
        }
    }


`;