import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import PropertyPage from "./pages/property/propertyPage";
import Home from "./pages/home/home";



const RouteLinks=()=>{
    return(
        <Routes>
          <Route path="/" element={<Home/>}/>         
          <Route path="/property" element={<PropertyPage/>}/>   
        </Routes>
    )
}
export default RouteLinks;