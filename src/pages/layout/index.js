
import Header from "@/component/header/header";
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