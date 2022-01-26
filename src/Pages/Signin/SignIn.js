import React, {useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useForm } from '../../hook/useForm';
import { StyledSignIn } from './signin.style';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../Service/config';
import { useDispatch, useSelector} from 'react-redux';
import { fetchuserError, fetchuserRequest, fetchuserSuccess } from '../../Redux';

export const SignIn = () => {
    const {user} = useSelector((state) => state);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { formValues, errors, handleInputChange, handleSubmit, resetForm } = useForm({
        email: "",
        password: ""
    }, {
        email: "",
        password: ""
    })

    const onsubmit = () => {
        dispatch(fetchuserRequest())
        const {email, password} = formValues
        signInWithEmailAndPassword(getAuth(auth), email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(fetchuserSuccess({token: user.refreshToken, user: {email: user.email}}))
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(fetchuserError(errorMessage))
            });
    }

    useEffect(() => {
        if (user?.token) {
            navigate("/")
            resetForm()
        }
    }, [navigate, user?.token]);
    
    

    return (
        <StyledSignIn>
            <h4>Welcome Back</h4>
            <span>Sign In to your Account</span>
            <form noValidate onSubmit={(e) => handleSubmit(e, onsubmit)}>
                <Input label={"Email"} variant={"outline"} fullWidth error={errors.email} helperText={errors.email}
                    value={formValues.email} required onchange={handleInputChange} name="email" />
                <Input label={"Password"} variant={"outline"} fullWidth error={errors.password} helperText={errors.password}
                    value={formValues.password} required onchange={handleInputChange} name="password" />
                <Button color="primary" variant="contained" type="submit" fullWidth>Log in</Button>
            </form>
            <Link to="/signup">Don't have account?Signup</Link>
            <h3 variant={user.status}>{user.message}</h3>
        </StyledSignIn>);
};
