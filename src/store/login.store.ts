//interface
import { ILoginStore } from '../model/login.model';
//libraries
import {create} from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware';
export const useLoginStore = create<ILoginStore>()(persist(
    (set) => ({
    userData:null,
    setUserData: (newUserData: any ) => set(state=>({...state,userData:newUserData})),
    accessTokenGoogle:'',
    setAccessTokenGoogle:(newAccessTokenGoogle: string ) => set(state=>({...state,accessTokenGoogle:newAccessTokenGoogle})),
    microsoftInstance:null,
    setMicrosoftInstance:(newMicrosoftInstance:any) =>set(state=>({...state,microsoftInstance:newMicrosoftInstance})),
    authorized:false,
    setAuthorized:(newAuthorized:boolean)=>set(state=>({...state,authorized:newAuthorized})) ,
}),
{
name:'login',
storage:createJSONStorage(() => sessionStorage),
partialize:state=>({
    authorized:state.authorized,
    userData:state.userData,
    microsoftInstance:state.microsoftInstance
})
}))



