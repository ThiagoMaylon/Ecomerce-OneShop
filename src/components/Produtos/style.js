import styled from "styled-components";

export const CardProductStyle = styled.div`
    background-color: #fff;
    padding: 10px;
    img{
        width: 100%;
        height: 250px;
    }
    .conteudo{
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2{
            font-size: 1.5em;
            margin-bottom: 5px;
        }
        p{
            margin: 5px 0;
            font-size: 16px;
            color: #555;
        }
        h3{
            margin-top: 5px;
        }

        button{
            width: 100%;
            height: 50px;
            margin-bottom: 0;
            outline: none;
            background-color: transparent;
            cursor: pointer;
            border: 1px solid #000;
            border-radius: 5px;
        }

       
    }
`;