import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../footer/footer";


const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;