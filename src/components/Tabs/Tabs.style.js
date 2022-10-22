import styled from "styled-components";

export const TabsStyled = styled('ul')`
    display: flex;

    .tab.selected{
        background-color: #26262696;
    }
`
export const TabList = styled('li')`
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    
`


export const TabInformations = styled('div')`
    background-color: #26262696;

    .information{
        padding: 15px;
        min-height: 260px;
        display: none;
    }

    .information.selected{
        display: block;
    }

    .sub-title{
        font-size: 22px;
        margin-bottom: 10px;
        text-align: center;
    }
    .description{
        font-size: 20px;
        max-height: 180px;
        overflow-y: auto;
        padding-block: 15px;
        padding-right: 15px;
        text-align: center;
    }

    .languages{
        color: #02d08f;
    }

    .social-networks, .information .projects{
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-items: center;
        max-height: 180px;
        overflow-y: auto;
    }
    .social-networks li a, .projects li a{
        border-radius: 10px;
        background-color: #0292d08f;
        width: 250px;
        display: block;
        color: #f3f3f3;
        font-size: 20px;
        text-align: center;
        padding: 10px;
        transition: opacity 0.3s ease-in-out;
    }

    .social-networks li a:hover, .projects li a:hover{
       background-color: #0292d0bd; 
    }

    .projects div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
`

