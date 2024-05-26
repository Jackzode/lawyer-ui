
import Header from "@/component/header/header";
import Footer from "@/component/footer";
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (

            <div>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>

    )
}

export default Layout