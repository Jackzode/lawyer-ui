// 用户相关的所有请求
import { request } from "@/utils"
// 1. 登录请求

export function emailVerify(code){
    return request({
        url: "/user/email/verification",
        method: "get",
        params: {
            code: code,
        }
    })
}

export function register(data){
    return request({
        url: "/user/registerByEmail",
        method: "post",
        data:data
    })
}

export function getCaptcha() {
    return request({
        url: "/user/captcha",
        method: "get",
    })
}


export function loginAPI (formData) {
    return request({
        url: '/user/login',
        method: 'POST',
        data: formData
    })

}

// 2. 获取用户信息

export function getProfileByEmailAPI (email) {
    return request({
        url: '/user/personal/profile',
        method: 'GET',
        params: {
            email: email,
        },
    })
}

//todo
export function getProfileByTokenApi () {
    return request({
        url: '/user/personal/profile',
        method: 'GET',
    })
}


export function getProfileByNameAPI (name) {
    return request({
        url: '/user/getProfileByName',
        method: 'GET',
        params: {
            name: name,
        },
    })
}

export function updateProfile (data){
    return request({
        url: '/user/personal/profile',
        method: 'POST',
        data: data,
    })
}


export function uploadAvatar (file) {
    return request({
        url: '/user/personal/uploadAvatar',
        method: 'POST',
        data: file,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}