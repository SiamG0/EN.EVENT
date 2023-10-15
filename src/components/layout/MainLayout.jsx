import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../footer/footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;