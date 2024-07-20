import { DataLogin } from "@/app/login/page";
import BaseApi from "@/core/api/BaseApi";

class AuthenticationRepository {
    public login = async(data: DataLogin): Promise<any> => {
        const path = 'auth/login'

        let response = await BaseApi.POST(path, data)

        if(response?.status == 200 || response?.status == 201){
            console.log(response.data);
            return response.data
        }

        return response === undefined? null : response.data;
    }

    public register = async(data: DataLogin): Promise<any> => {
        const path = 'users/add'

        let response = await BaseApi.POST(path, data)

        if(response?.status == 200 || response?.status == 201){
            console.log(response.data);
            return response.data
        }

        return response === undefined? null : response.data;
    }
}

export default new AuthenticationRepository();