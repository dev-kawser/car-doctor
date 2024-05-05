/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return <div className="flex items-center justify-center mt-20">
            <progress className="progress w-96"></progress>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;