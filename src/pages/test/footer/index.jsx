import React from "react"
import { TwitterOutlined, LinkedinOutlined ,FacebookOutlined, GoogleOutlined} from "@ant-design/icons"

const Index = () => {
    return (
        <>
            <footer className='boxItems'>
                <div className='container flex'>
                    <p>Lawyer - All right reserved - Design & Developed by JackZ ,Inc</p>
                    <div className='social'>
                        <GoogleOutlined  className='icon' />
                        <FacebookOutlined  className='icon' />
                        <TwitterOutlined  className='icon' />
                        <LinkedinOutlined className='icon' />
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Index