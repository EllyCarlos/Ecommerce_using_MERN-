import axios from '../../config/axios' 

export const signup = async (cred) => {
    try {
        const res = await axios.post("auth/signup", cred)
        return res.data
    } catch (error) {
        // Better error handling
        throw error.response?.data || error.message || 'Signup failed'
    }
}

export const login = async (cred) => {
    try {
        const res = await axios.post("auth/login", cred)
        return res.data
    } catch (error) {
        throw error.response?.data || error.message || 'Login failed'
    }
}

export const verifyOtp = async (cred) => {
    try {
        const res = await axios.post("auth/verify-otp", cred)
        return res.data
    } catch (error) {
        throw error.response?.data || error.message || 'OTP verification failed'
    }
}

export const resendOtp = async (cred) => {
    try {
        const res = await axios.post("auth/resend-otp", cred)
        return res.data
    } catch (error) {
        throw error.response?.data || error.message || 'Resend OTP failed'
    }
}

export const forgotPassword = async (cred) => {
    try {
        const res = await axios.post("auth/forgot-password", cred)
        return res.data
    } catch (error) {
        throw error.response?.data || error.message || 'Forgot password failed'
    }
}

export const resetPassword = async (cred) => {
    try {
        const res = await axios.post("auth/reset-password", cred)
        return res.data
    } catch (error) {
        throw error.response?.data || error.message || 'Reset password failed'
    }
}

export const checkAuth = async () => { // Removed unused 'cred' parameter
    try {
        const res = await axios.get("auth/check-auth")
        return res.data
    } catch (error) {
        throw error.response?.data || error.message || 'Auth check failed'
    }
}

export const logout = async () => {
    try {
        const res = await axios.get("auth/logout")
        return res.data
    } catch (error) {
        throw error.response?.data || error.message || 'Logout failed'
    }
}
