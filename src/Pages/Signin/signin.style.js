import styled from 'styled-components'

export const StyledSignIn = styled.div`
width: 400px;
margin: 100px auto;
text-align: center;
& > h4{
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5rem;
    font-family: NoirPro-Regular;
    margin: 0;
}
& > span{
    font-size: .9rem;
}
& > form{
    margin: 1.5rem 0;
    & > div {
        margin-bottom: 1.5rem;
        text-align: left;
    }
}

& h3{
    color: ${props => props.status === "success" ? "green" : "red"}
}
`