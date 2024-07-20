import axios, { Axios, AxiosRequestConfig } from "axios";
import { NextResponse } from "next/server";
import ResponseCode from "../utils/ResponseCode";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";
// import { removeTokenCookie } from "@/middleware";
import { toast } from "sonner";

function getApiUrl() {
    // return process.env.REACT_APP_API_URL_DEV || '';
    return 'https://dummyjson.com/';
}

class BaseApiFetch {

    GET = async (endpoint: string,data?:any,token?:any) => {
        
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: getApiUrl() + endpoint,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: data
        }

        return this.fetchData(config)
    }
    
    POST = async (endpoint: string, data:any, token?: any) => {

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: getApiUrl() + endpoint,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: data
        }

        return this.fetchData(config)

    }

    PUT = async (endpoint: string, data:any, token?: any) => {
            
        console.log(data)
            const config: AxiosRequestConfig = {
                method: 'PUT',
                url: getApiUrl() + endpoint,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                data: data
            }
    
            return this.fetchData(config)
    }

    private async fetchData(config: AxiosRequestConfig) {
        var response = await axios(config);

        if(response.status == 200){
            // toast.success(response.data.message);
            return response;
        }else if(response.status == 201){
            toast.success(response.data.message);
            return response;
        }else if(response.status == 400){
            toast.error(response.data.message);
            return response;
        }else if(response.status == 401 ){
            toast.error(response.data.message);
            // removeTokenCookie();
            return response
        }
    }
}

export default new BaseApiFetch();