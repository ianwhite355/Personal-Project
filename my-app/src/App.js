import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage"
import Header from "./header";
import Bottombar from "./bottombar";
import About from "./about";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/about" element={<About/>} />
            </Routes>
            <Bottombar/>
        </BrowserRouter>
    );
};

export default App;

