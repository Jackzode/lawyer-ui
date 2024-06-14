

import { createSlice } from '@reduxjs/toolkit'
import {localStorageSetToken,
    localStorageGetToken,
    localStorageRemoveToken } from '@/utils'
import { loginAPI, getProfileByTokenApi } from '@/apis/user'


const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        token: localStorageGetToken() || '',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        setIsLogin(state, action) {
            state.isLogin = action.payload
        },
        setToken (state, action) {
            state.token = action.payload
            localStorageSetToken(action.payload)
        },
        setUserInfo (state, action) {
            state.userInfo = action.payload
        },
        clearUserInfoAndToken (state) {
            state.token = ''
            state.userInfo = {}
            localStorageRemoveToken()
        }
    }
})


// 解构出actionCreater

const { setIsLogin, setToken, setUserInfo, clearUserInfoAndToken } = userStore.actions

// 获取reducer函数

const userReducer = userStore.reducer

// 登录获取token异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const response = await loginAPI(loginForm)
        dispatch(setToken(response.token))
        return response
    }
}

// 获取个人用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res =  getProfileByTokenApi()
        dispatch(setUserInfo(res.data))
    }

}



export { fetchLogin, fetchUserInfo, clearUserInfoAndToken, setIsLogin , setToken, setUserInfo}

export default userReducer