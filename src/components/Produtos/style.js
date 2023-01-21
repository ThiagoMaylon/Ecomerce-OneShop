import styled from "styled-components";

export const CardProductStyle = styled.div`
    background-color: #fff;
    padding: 10px;

    a{
        text-decoration: none;
        color: #000;
    }
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

        h3{
            margin-top: 5px;
        }

       
    }
`;