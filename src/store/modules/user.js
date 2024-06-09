// 和用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'
import { setToken as _setToken, getToken, removeToken } from '@/utils'
import { loginAPI, getProfileByToken } from '@/apis/user'
import {message} from "antd";

const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        isLogin: false,
        token: getToken() || '',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        setIsLogin(state, action) {
            state.isLogin = action.payload
        },
        setToken (state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo (state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo (state) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})


// 解构出actionCreater

const { setIsLogin, setToken, setUserInfo, clearUserInfo } = userStore.actions

// 获取reducer函数

const userReducer = userStore.reducer

// 登录获取token异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const response = await loginAPI(loginForm)
        dispatch(setToken(response.data.token))
        dispatch(setUserInfo(response.data))
        return response
    }
}

// 获取个人用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res =  getProfileByToken()
        dispatch(setUserInfo(res.data))
    }

}



export { fetchLogin, fetchUserInfo, clearUserInfo, setIsLogin , setToken, setUserInfo}

export default userReducer