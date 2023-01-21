import styled from "styled-components";

export const DetalheProdutoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .imagem{
        max-width: 400px;
        min-width: 200px;
        margin: 50px 10px;

        img{
            width: 100%;
        }
    }

    .content{
        text-align: center;
        button{
            padding: 10px;
            border: 1px solid #000;
            background-color: transparent;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`