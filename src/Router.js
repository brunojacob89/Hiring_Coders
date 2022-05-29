import React from "react";
import { Routes , Route , BrowserRouter} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/Signin";

export default function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element = {<Home/>} />
                <Route path='/sign-in' element = {<SignIn/>} />
            </Routes>
        </BrowserRouter>
        
    )

}