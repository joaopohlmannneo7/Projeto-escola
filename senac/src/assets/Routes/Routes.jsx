import { Headbar2, Signin } from "../Formulary/Formulary";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const RoutesApp = () =>{
    return(
        <BrowserRouter>
      
            <Routes>
                <Route path="*" element={[<Headbar2/>,<Signin/>]}/>
                
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;