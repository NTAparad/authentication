import React, {FunctionComponent, useState} from "react";
import instance from "../instanceAxios";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Type, AuthState} from "../types/Auth";
import {signIn, signOut} from "../actions/Auth";
import {useNavigate} from "react-router-dom";


type Props = {};
const Login: FunctionComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [err, setErr] = useState<string | null>(null);
    const [password, setPassWord] = useState<string>("");

    const state = useSelector((state: AuthState) => state);
    console.log(state.userToken, '---');

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleSubmit = () => {
        instance
            .post("/login", {
                username: username,
                password: password,
            })
            .then(function (response) {
                // console.log(response.data.token);
                localStorage.setItem("userToken", response.data.token);
                handleLogin(response.data.token);
                navigate("/");
            })
            .catch(function (error) {
                setErr(error.response.data.error)
                console.log(error.response.data.error);
            });
    };


    const resetErr = () => {
        setErr(null)
    }

    //redux
    const handleLogin = (token: string) => {
        dispatch(signIn(token))
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "300px",
                margin: "auto",
            }}
        >
            <label htmlFor="username">Username</label>
            <input
                value={username}
                onChange={(text) => {
                    setUsername(text.target.value);
                    resetErr();
                }}
                name="username"
            />
            <label htmlFor="">Password</label>
            <input
                value={password}
                onChange={(text) => {
                    setPassWord(text.target.value);
                    resetErr();
                }}
                type="password"
            />
            <span>{err}</span>
            <button onClick={handleSubmit} type="submit">
                Login
            </button>
        </div>
    );
};

export default Login;


