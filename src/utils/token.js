// 封装基于ls存取删三个方法

const TOKEN_KEY = 'access_token'

function localStorageSetToken (token) {
    return localStorage.setItem(TOKEN_KEY, token)
}

function localStorageGetToken () {
    return localStorage.getItem(TOKEN_KEY)
}

function localStorageRemoveToken () {
    return localStorage.removeItem(TOKEN_KEY)
}

export {
    localStorageSetToken,
    localStorageGetToken,
    localStorageRemoveToken
}