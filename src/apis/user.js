// 用户相关的所有请求
import { request } from "@/utils"
// 1. 登录请求



export function register(data){
    return request({
        url: "/painting/user/registerByEmail",
        method: "post",
        data:data
    })
}

export function getCaptcha() {
    return request({
        url: "/painting/user/captcha",
        method: "get",
    })
}


export function loginAPI (formData) {
    return request({
        url: '/painting/user/login',
        method: 'POST',
        data: formData
    })

}

// 2. 获取用户信息

export function getProfileByEmailAPI (email) {
    return request({
        url: '/painting/user/getProfileByEmail',
        method: 'GET',
        params: {
            email: email,
        },
    })
}

export function getProfileByToken () {
    return request({
        url: '/painting/user/profile',
        method: 'GET',
    })
}


export function getProfileByNameAPI (name) {
    return request({
        url: '/painting/user/getProfileByName',
        method: 'GET',
        params: {
            name: name,
        },
    })
}

export function updateProfile (data){
    return request({
        url: '/painting/user/updateProfile',
        method: 'POST',
        data: data,
    })
}