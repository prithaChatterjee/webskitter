import { StyleInput } from "./input.style"

export const InputAdornment = (props) =>
    <span>{props.children}</span>


const Input = (props) => {
    const { value, InputProps, helperText, label, onchange, required, name} = props
    return (
        <StyleInput {...props}>
            <div>
                {
                    InputProps?.startAdornment &&
                    <span>{InputProps?.startAdornment?.props.children}</span>
                }
                <input type="text" value={value} name={name} required={required} onChange={e => onchange(e.target)} />
                <label htmlFor="">{label}</label>
                {
                    InputProps?.endAdornment &&
                    <span>{InputProps?.endAdornment?.props.children}</span>
                }
            </div>
            {
                helperText && <small>{helperText}</small>
            }
        </StyleInput>
    )
}

export default Input