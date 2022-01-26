import styled from 'styled-components'

export const StyledSignUp = styled.div`
display: flex;
    justify-content: space-between;
    margin: 25px;
    position: relative;
    & > div{
        position: absolute;
    top: 40px;
    width: 100%;
    height: 0.5px;
    background: rgb(190, 190, 190);
    };
    & > button{
        overflow: hidden;
    outline: 0;
    cursor: pointer;
    position: relative;
    box-sizing: content-box;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    height: 72px;
    overflow: hidden;
    align-items: center;
    padding: 0 24px;
    background-color: #ffffff;
    border: none;
    & :hover{
        background-color: rgb(235, 233, 233);

    }
    & div{
        margin-right: 8px;
        background: rgba(0,0,0,.54);
        color: white;
        border-radius: 50%;
        height: 24px;
        width: 24px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    }
`

export const StyledSection = styled.section`
    padding: 2rem ;
    max-width: 600px;
    margin: 30px auto;
    background:white;
    background:rgba(255,255,255,0.9);
    backdrop-filter:blur(10px);
    box-shadow:0px 2px 10px rgba(0,0,0,0.3);
    border-radius:5px;
    & > form {
        & > div{
        margin-bottom: 1.5rem;
        &:last-child {
            display: flex;
            justify-content: space-between;
        }
    };
    }
`

export const StyleFooter = styled.footer`
margin: 40px;
justify-content: start;
& > div {
    display: flex;
  justify-content: space-between;
  width: 450px;
}
& h3{
    color: ${props => props.status === "success" ? "green" : "red"}
}
`