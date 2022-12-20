import {useEffect} from "react";
import {useSelector} from "react-redux";
import {AuthState} from "../types/Auth";
import {useNavigate} from "react-router-dom";

export const LoginRequire = () => {
    const userToken = localStorage.getItem('userToken')
    const navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate('/')
        } else {
            navigate('/login')
        }
    }, [])
}