import styled from "styled-components";

export const Informations = styled('div')`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img{
        border-radius: 50px;
        border: 2px solid #030303;
        width: 96px;
        height: 96px;
    }
    .name{
        font-size: 26px;
    }

    .occupation{
        font-size: 20px;
    }

`