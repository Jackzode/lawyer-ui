// 用户相关的所有请求
import { request } from "@/utils"
// 1. 登录请求

export function loginAPI (formData) {
    // return request({
    //     url: '/authorizations',
    //     method: 'POST',
    //     data: formData
    // })
    return  {
        name: "jack",
        description: "sde",
        avatar: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
        follow : 1000,
        likes: 1000,
        collection: 1000,
        token: "tyuiojk",
    }
}

// 2. 获取用户信息

export function getProfileAPI () {
    // return request({
    //     url: '/user/profile',
    //     method: 'GET'
    // })
    return {
        name: "jack",
        description: "sde",
        avatar: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
        follow : 1000,
        likes: 1000,
        collection: 1000,
    }
}