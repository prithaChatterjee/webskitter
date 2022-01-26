import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DashBoard } from '../Pages/Dashboard'
import { SignIn } from '../Pages/Signin/SignIn'
import SignUp from '../Pages/SignUp'
import PrivateRoute from './RouterGuard'

export const Routers = [
    { path: "/", Component: DashBoard }
]

export default function Routing() {

    return (
        <Router>
            <Routes>
                {
                    Routers.map(res => <Route key={res.path} path={res.path} element={<PrivateRoute>
                        <res.Component {...Routers} />
                    </PrivateRoute>} />)
                }
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    )
}
