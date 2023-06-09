import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Bottombar from "./bottombar";
import Project from "./project";
import HomePage from "./homepage";
import Contact from "./contact";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/projects" element={<Project/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

