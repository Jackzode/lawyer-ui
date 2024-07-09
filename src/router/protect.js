// ProtectedRoute.js
import {useEffect} from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // 假设你用 Redux 来管理用户状态

const ProtectedRoute = ({ element }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const token = useSelector(state => state.user.token);

    useEffect(() => {
        if (!token || token === "" ) {
            navigate("/login");
        }else if (location.pathname === "/" || location.pathname === "/login") {
            navigate("/");
        }
    }, [token, location.pathname, navigate]);

    return element;
};

export default ProtectedRoute;