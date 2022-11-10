import styled from "styled-components";
export const Container = styled.div`
width: 100%;
height: 80px;
background: red;
`
export const Nav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    h1{
        font: 1rem;
        color: ${({ theme }) => theme.text};
    }
    img{
        width: 120px;
        position: relative;
        left: -270px;
    }
`