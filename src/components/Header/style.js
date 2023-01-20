import styled from "styled-components";

export const HeaderStyle = styled.header`
    .constainer{
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        width: 1200px;
        margin: auto;
        padding: 20px 0;

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