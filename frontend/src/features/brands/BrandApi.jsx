import { axios } from "../../config/axios";

export const fetchAllBrands=async()=>{
    try {
        const res=await axios.get("/brands")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}