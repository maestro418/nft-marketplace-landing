import Layout from "../components/Layout";
import {  BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Rankings from "../pages/Rankings";
const Mainroute = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/marketplace" element={<Marketplace/>}/>
                    <Route path="/rankings" element = {<Rankings/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Mainroute;
