
import { axiosClient } from "./axiosClient";

const AuthAPI = {
    signup(user){
        const url =`/signup`;
        return axiosClient.post(url,user);
    },
    signin(user){
        const url =`/signin`;
        return axiosClient.post(url,user);
    },
    read(id,user){
        const url =`/signin/${id}`;
        return axiosClient.get(url,user);
    },
    getAll(){
        const url = '/user';
        return axiosClient.get(url);
    }
}
export default AuthAPI;