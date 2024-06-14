import {useState, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {emailVerify} from "@/apis/user";
import React from 'react';
import {Button, Card, Result} from 'antd';


const EmailVerifyPage = () => {

    const [searchParam] = useSearchParams();
    const [verify, setVerify] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const code = searchParam.get('code')
        emailVerify(code).then(
            (res) => {
                if (res.code === 0) {
                    setVerify(true)
                }
            },
        ).catch(
            error => console.log(error)
        )
    }, []);

    const onclick = () => {
        navigate('/')
    }
    return (

        <div>
            <Result
                status={verify ? "success" : 'error'}
                title={verify ? "Email verification is successful!" : "Email verification failed!"}
                extra={[
                    <Button type="primary" onClick={onclick}>
                        Go lawyer
                    </Button>,
                ]}
            />
        </div>

    )


}

export default EmailVerifyPage;