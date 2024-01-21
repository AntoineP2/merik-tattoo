import * as CryptoJS from "crypto-js";

const encryptPassword = (password: string): string => {
    const passwordCrypt = CryptoJS.AES.encrypt(password, process.env.NEXT_PUBLIC_KEY_PASSWORD).toString()
    return passwordCrypt
}

export default encryptPassword