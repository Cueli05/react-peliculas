import { Navigate } from "react-router-dom";

export default function redireccionarALanding(){
    return <Navigate to={{pathname:'/'}} />
}