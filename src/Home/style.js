import styled from "styled-components";

export const HomeStyle = styled.div`
    main{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 30px;
        background-color: #ccc;
        padding: 20px;
    }
`;