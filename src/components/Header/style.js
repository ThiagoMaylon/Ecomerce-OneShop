import styled from "styled-components";

export const HeaderStyle = styled.header`
    .constainer{
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        max-width: 900px;
        min-width: 200px;
        margin: auto;
        padding: 20px 0;

        @media (max-width: 400px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .logo a{
            color: #000;
            text-decoration: none;
            font-weight: bold;
            font-size: 2em;

            span{
                color: #999;
            }
        } 

        nav ul{
            display: flex;
            flex-direction: row;

            li{
                list-style-type: none;
                a{
                   color: #000;
                   text-decoration: none;
                   margin: 0 5px;
                   font-size: 1.2em;

                   &:hover{
                    color: #aaa;
                   }
                }
            }
        }
    }
   
   



`;