import axios from "axios";

const api = "http://localhost:4000/api";

const registerUser = async (data) => {
    return await axios.post(`${api}/auth/register`,data)
}
const verifyOtp = async (email, otp) => {
    return await axios.post(`${api}/auth/verify-otp`, {email, otp})
}
const loginUser =  async (email, Password) => {
    return await axios.post(`${api}/auth/login`, {email, Password})
}
const forgotPassword = async (email) => {
    return await axios.post(`${api}/auth/forgot-password`, {email})
}
const resetPassword = async (token, newPassword) => {
    return await axios.post(`${api}/auth/reset-password`, {token, newPassword})
}
export {registerUser, verifyOtp, loginUser , forgotPassword, resetPassword}