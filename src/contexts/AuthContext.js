import { useState, useEffect } from "react";
import Axios from 'axios'
import { createContext } from "react";

const AuthContext = createContext();
const initialAuth = null;


const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialAuth);
    const [id, setId] = useState(initialAuth);

    const handleAuth = (id) => {
        if (auth) {
            console.log("auth");
            setAuth(null);
        } else {
            setAuth(true);
            setId(id);
        };
    };


    useEffect(() => {
        Axios.get("https://pensiones-backend-production.up.railway.app/login").then((response) => {
            if (response.data.user) {
                handleAuth(response.data.user[0].Id);
            }
        })


    }, [])

    const data = { auth, handleAuth, id };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;

}

export { AuthProvider };
export default AuthContext;