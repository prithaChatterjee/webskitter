import styled from 'styled-components'

export const StyledButton = styled.button`
    width: ${props => props.fullWidth? "100%" : "auto"};
    background: ${(props) => {
        if (props.variant === "contained") {
            switch (props.color) {
                case "primary":
                    return props.theme.primary
                case "secondary":
                    return "#000000"
                case "success":
                    return "green"
                case "error":
                    return "red"
                default:
                    return "#000000"
            }
        } else {
            return "#ffffff"
        }
    }};
    color: ${(props) => {
        if (props.variant === "contained") {
            return "#ffffff"
        } else {
            switch (props.color) {
                case "primary":
                    return props.theme.primary
                case "secondary":
                    return "#000000"
                case "success":
                    return "green"
                case "error":
                    return "red"
                default:
                    return "#000000"
            }
        }
    }};
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => {
        switch (props.color) {
            case "primary":
                return props.theme.primary
            case "secondary":
                return "#000000"
            case "success":
                return "green"
            case "error":
                return "red"
            default:
                return "#000000"
        }
    }
    }};
    border-radius: 0.375rem;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    transition: 0.5s all ease-out;
    & > :first-child {
        width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index:9;
    transform: scale(0,0);
    background-color: rgba(0,0,0,0.04);
    };
    &:hover {
        background: ${(props) => {
        if (props.variant === "contained") {
            return "#ffffff"
        } else {
            switch (props.color) {
                case "primary":
                    return props.theme.primary
                case "secondary":
                    return "#000000"
                case "success":
                    return "green"
                case "error":
                    return "red"
                default:
                    return "#000000"
            }
        }
    }};
    color: ${(props) => {
        if (props.variant === "contained") {
            switch (props.color) {
                case "primary":
                    return props.theme.primary
                case "secondary":
                    return "#000000"
                case "success":
                    return "green"
                case "error":
                    return "red"
                default:
                    return "#000000"
            }
        } else {
            return "#ffffff"
        }
    }};
    }
    &:active{
        & > :first-child {
        transform: scale(1,1);
        };
    };
`
