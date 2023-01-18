import styled from "styled-components";

export const NavStyle = styled.nav`
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.30);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 0;

    ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }
    ul li{
        list-style-type: none;
        padding: 5px;
        margin: 0 10px;
    }
`