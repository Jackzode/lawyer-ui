// 和用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'
import { setToken as _setToken, getToken, removeToken } from '@/utils'
import { loginAPI, getProfileAPI } from '@/apis/user'

const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        isLogin: false,
        token: getToken() || '',
        userInfo: {
            name: "",
            description: "",
            avatar: "https://img.ixintu.com/download/jpg/20200917/d38df2c52b6a439dff388445fa5a5050_512_512.jpg!con",
            follow : 0,
            likes: 0,
            ranking: 0,
            collection: 0,
        }
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
        const res = loginAPI(loginForm)
        dispatch(setToken(res.token))
        dispatch(setUserInfo(res))
    }
}

// 获取个人用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res =  getProfileAPI()
        dispatch(setUserInfo(res))
    }

}

export { fetchLogin, fetchUserInfo, clearUserInfo, setIsLogin }

export default userReducer