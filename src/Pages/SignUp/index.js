import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useNavigate } from "react-router-dom";
import { StyledSection, StyledSignUp, StyleFooter } from './signup.style';
import { useForm } from '../../hook/useForm';
import { auth,} from '../../Service/config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { fetchuserError, fetchuserSuccess } from '../../Redux';
import { useDispatch, useSelector } from 'react-redux';


const SignUp = () => {
    const navigate = useNavigate();
    const {user} = useSelector((state) => state);
    const dispatch = useDispatch()
    const { formValues, errors, handleInputChange, handleSubmit, resetForm } = useForm({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',
        country: '',
        state: '',
        city: '',
        zip: '',
    }, {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',
        country: '',
        state: '',
        city: '',
        zip: '',
    })

    useEffect(() => {
        if (user?.token) {
            navigate("/")
        }
    }, [navigate, user?.token]);

    const [formstep, setformstep] = useState(0)

    const [message, setmessage] = useState("")

    const reset = (stepCount) => {
        setformstep(stepCount)
        resetForm()
    }

    const gonext = (stepcount) => {
        if (stepcount > formstep && formstep === 0) {
            if (formValues.fname && formValues.lname && formValues.phone && formValues.email &&
                formValues.password && formValues.password) {
                setformstep(stepcount)
            } else {
                setmessage("Fill All Forms")
            }
        } else if (stepcount > formstep && formstep === 1) {
            if (formValues.country && formValues.state && formValues.city && formValues.zip) {
                setformstep(stepcount)
            } else {
                setmessage("Fill All Forms")
            }
        } else {
            setformstep(stepcount)
        }
    }


    const saveData = () => {
        gonext(formstep)
    }


    async function onsubmit() {
        try {
            const { email, password } = formValues
            createUserWithEmailAndPassword(getAuth(auth), email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const value = await addDoc(collection(getFirestore(auth), "users"),{
                            fname: formValues.fname,
                            lname: formValues.lname,
                            email: formValues.email,
                            phone: formValues.phone,
                            country: formValues.country,
                            state: formValues.state,
                            city: formValues.city,
                            zip: formValues.zip,
                        }
                    );
                    dispatch(fetchuserSuccess({token: user.refreshToken, user: {email: user.email}}))
                    console.log(value)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    dispatch(fetchuserError(errorMessage))
                });
        }
        catch (error) {
            const errorMessage = error.message;
            dispatch(fetchuserError(errorMessage))
        }
    }

    return (
        <>
            <StyledSignUp>
                <div></div>
                <button style={{ color: formstep === 0 ? "#b11adc" : "black" }} onClick={() => gonext(0)}>
                    <div style={{ backgroundColor: formstep === 0 ? "#b11adc" : "rgba(0,0,0,.54)" }}>1</div>
                    Enter your Personal Details</button>
                <button style={{ color: formstep === 1 ? "#b11adc" : "black" }} onClick={() => gonext(1)}>
                    <div style={{ backgroundColor: formstep === 1 ? "#b11adc" : "rgba(0,0,0,.54)" }}>2</div>
                    Enter your Address</button>
                <button style={{ color: formstep === 2 ? "#b11adc" : "black" }} onClick={() => gonext(2)}>
                    <div style={{ backgroundColor: formstep === 2 ? "#b11adc" : "rgba(0,0,0,.54)" }}>3</div>Done</button>
            </StyledSignUp>
            {
                formstep === 0 &&
                <StyledSection>
                    <form autoComplete="off" noValidate defaultChecked="off" onSubmit={(e) => handleSubmit(e, saveData)}>
                        <Input fullWidth required variant="outline" label="First Name" error={errors.fname} type="text"
                            value={formValues.fname} name="fname"
                            onchange={handleInputChange} helperText={errors.fname} />
                        <Input fullWidth required variant="outline" label="Last Name" error={errors.lname} type="text"
                            value={formValues.lname} name="lname"
                            onchange={handleInputChange} helperText={errors.lname} />
                        <Input fullWidth required variant="outline" label="Email" error={errors.email} type="text" value={formValues.email}
                            name="email" onchange={handleInputChange} helperText={errors.email} />
                        <Input fullWidth required variant="outline" label="Phone" type="text" error={errors.phone} value={formValues.phone} name="phone"
                            onchange={handleInputChange} helperText={errors.phone} />
                        <Input fullWidth required variant="outline" label="Password" type="password" error={errors.password} value={formValues.password} name="password"
                            onchange={handleInputChange} helperText={errors.password} />
                        <Input fullWidth required variant="outline" label="Confirm Password" type="password" error={errors.confirmpassword}
                            value={formValues.confirmpassword} helperText={errors.confirmpassword}
                            name="confirmpassword"
                            onchange={handleInputChange} />
                        <div>
                            <Button type="submit" color="primary" variant="contained">Save</Button>
                            <Button color="primary" variant="contained" value={1} type="button" onClick={gonext}>Next</Button>
                        </div>
                    </form>
                    {
                        message &&
                        <span>{message}</span>
                    }
                </StyledSection>
            }
            {
                formstep === 1 &&
                <StyledSection>
                    <form noValidate onSubmit={e => handleSubmit(e, saveData)}>
                        <Input fullWidth required variant="outline" label="Country" type="text" error={errors.country} value={formValues.country}
                            name="country" helperText={errors.country}
                            onchange={handleInputChange} />
                        <Input fullWidth required variant="outline" label="State" error={errors.state} type="text" value={formValues.state}
                            name="state" helperText={errors.state}
                            onchange={handleInputChange} />
                        <Input fullWidth required variant="outline" label="City" type="text" error={errors.city} value={formValues.city}
                            name="city" helperText={errors.city}
                            onchange={handleInputChange} />
                        <Input fullWidth required variant="outline" label="Zip" type="text" error={errors.zip} value={formValues.zip}
                            name="zip" helperText={errors.zip}
                            onchange={handleInputChange} />
                        <div>
                            <Button color="primary" value={0} type="button" onClick={gonext}>Back</Button>
                            <Button color="primary" type="submit">Save</Button>
                            <Button color="primary" value={2} type="button" onClick={gonext}>Next</Button>
                        </div>
                    </form>
                </StyledSection>
            }

            {
                formstep === 2 &&
                <StyleFooter>
                    <p>Details Taken</p>
                    <div>
                        <Button value={1} type="button" onClick={gonext} color="primary">Back</Button>
                        <Button value={0} type="button" onClick={reset} color="primary">Reset</Button>
                        <Button type="button" color="primary" onClick={onsubmit}>Submit</Button>
                        <Button value={0} type="button" onClick={reset} color="primary">Cancel</Button>
                    </div>
                    <h3 variant={user.status}>{user.message}</h3>

                </StyleFooter>
            }
        </>
    )
}

export default SignUp
