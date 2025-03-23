import { Route, Routes } from "react-router-dom";
import HomeView from "./presentation/HomeView";


const RouterView = (() => 
    <Routes>
        <Route path="/" element={<HomeView></HomeView>}></Route>
    </Routes>
);

export default RouterView