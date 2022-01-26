import styled from "styled-components";
export const StyleInput = styled.div`
width: ${props => props.fullWidth ? "100%" : "350px"}; 
& > div{
    border-width: ${(props)=> props.variant === "outline" ? "2px" : 0} ${(props)=> props.variant === "outline" ? "2px" : 0} 2px ${(props)=> props.variant === "outline" ? "2px" : 0};
    border-color: ${(props)=> props.error ? "red": "rgba(0,0,0,.12)"};
    border-style: solid;
    display: flex;
    position: relative;
    width: 100%;
    border-radius: ${(props)=> props.variant === "outline" ? "0.5rem" : 0};
    &:focus-within {
        border-color: ${(props)=> props.error ? "red": "green"}
    }
    & > input {
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: ${(props)=> {
             if (props.InputProps?.startAdornment) {
                 return props.variant === "outline" ? "0px" : "18px"
            } else if (props.variant === "outline") {
                return "18px"
            }else {
                return "0px"
            }
        }};
        padding-right: ${(props)=> {
            if (props.InputProps?.endAdornment) {
                return props.variant === "outline" ? "0px" : "18px"
           } else if (props.variant === "outline") {
               return "18px"
           }else {
               return "0px"
           }
       }};
        width: 100%;
        border: none;
        background: transparent;
        font-size: 16px;
        &:focus {
            outline: none;
            border: none;
            & + label{
                top: -20px;
                background: white;
                left: ${(props) => props.variant === "outline" ? "5px" : "0px"} ;
                padding: 5px ${(props) => props.variant === "outline" ? "10px" : "0px"};
                z-index: 1;
                color: ${(props)=> props.error ? "red": "green"}
            }
        },
    }
    & > label{
        top: ${(props)=> props.value || props.InputProps  ? "-20px": "0"};
        width: auto;
        position: absolute;    
        padding: ${(props)=> props.value ? "5px 10px" : props.InputProps ? props.variant === "outline" ? "10px 10px" : "10px 0px": props.variant === "outline" ? "10px 10px" : "10px 0px"};
        background: ${(props)=>props.value || props.InputProps  ? "#ffffff": "transparent"};
        z-index: ${(props)=>props.value || props.InputProps  ? "1": "-1"};
        left: ${(props)=>props.value || props.InputProps  ? props.variant === "outline" ? "5px" :  "0" : "0"};
        transition: all 0.1s ease-in-out;
        color: ${(props)=> props.error ? "red": "rgba(0,0,0,.6)"}
    }
    & > span{
        padding: 10px 10px;
        padding-left: ${(props) => props.variant === "outline" ? "10px" : "0px"};
        padding-right: ${(props) => props.variant==="outline" ? "10px" : "0px"};
        font-size: 16px;
        color: brown
    }
}
& > small {
    color: ${props => props.error ? "red" : "#000000"}
}
`
