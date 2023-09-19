import { getApiService } from "../../services/login/login.service"

 export const getApi=()=>{
    getApiService().then(data=>{
        console.log(data);        
    })
}