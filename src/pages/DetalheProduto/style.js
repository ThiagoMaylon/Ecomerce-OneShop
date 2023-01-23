import styled from "styled-components";

export const DetalheProdutoStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 80vh; */
    width: 100vw;
    @media (max-width: 835px) {
        flex-direction: column;
    }

    .imagem{
        height: 100%;
        padding: 10px;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
        }
    }

    .content{
        text-align: center;
        height: 100%;
        button{
            padding: 10px;
            border: 1px solid #000;
            background-color: transparent;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`