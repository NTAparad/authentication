import React, {FunctionComponent, useEffect} from "react";
import {signOut} from "../actions/Auth";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AuthState} from "../types/Auth";

const Home: FunctionComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userToken = localStorage.getItem('userToken')
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        const action = signOut();
        dispatch(action);
        navigate("/login");
    }


    return (
        <div className="home-page">
            <button onClick={handleLogout}>Log Out</button>
            <h1>Hello</h1>
        </div>
    );

};
export default Home;
