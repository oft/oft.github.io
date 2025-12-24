import axios from "axios";

const instance = axios.create()

export interface RequestOption {
    method?:'POST'|'GET'
}

const defaultConfig:RequestOption = {
    method:'GET'
}

export const request = <T>(url:string,options?:RequestOption)=>{
    return instance(url,{
        method:options?.method || defaultConfig.method
    }).then(d=>d.data as T)
}