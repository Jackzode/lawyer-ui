import CryptoJS from 'crypto-js';

const secretKey = 'painting';

export function EnCryptPassword (password) {
    return CryptoJS.AES.encrypt(password, secretKey).toString();
}

export function DeCryptPassword (savedPassword)  {
    return CryptoJS.AES.decrypt(savedPassword, secretKey).toString(CryptoJS.enc.Utf8);
}