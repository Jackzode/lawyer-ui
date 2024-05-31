
import Header from "@/component/header/header";
import Footer from "src/pages/test/footer";
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (

            <div>
                <Header/>
                <Outlet/>
            </div>

    )
}

export default Layout