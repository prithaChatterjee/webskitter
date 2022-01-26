import React from "react"
import { useSelector } from "react-redux"
import { Navigate} from "react-router"

const PrivateRoute = (props) => {
    const {user} = useSelector((state) => state);
    const {children, ...rest} = props
    if (user?.token) {
        return <div {...rest}>{children}</div>
    } else {
        return <Navigate to="/login" />
    }
}

export default PrivateRoute