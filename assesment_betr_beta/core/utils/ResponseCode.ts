import { jwtDecode } from "jwt-decode";

class ResponseCode {
    public checkResponse = async(data: any, status:number): Promise<any> => {
        // console.log(JSON.stringify(data)+"data");
        console.log(JSON.parse(data.data));
        let tokenJWT : string = jwtDecode(data);
        switch (status) {
            case 200:
                const checktoken: string = jwtDecode(data);

                break;
            case 201:
                return data+"201";
                break;
            case 400:
                return data+"400";
                break;
            case 401:
                const token: string = jwtDecode(data.data.token);

                console.log(token+"token");
                break;
        
            default:
                break;
        }
    }

    public errorPost = async(data:any): Promise<any> => {
        return {
            status: false,
            message: data.message,
            data: null
        }
    }

    public notAuthorized = async(data:any): Promise<any> => {
        
    }

}

export default new ResponseCode();