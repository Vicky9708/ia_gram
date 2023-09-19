import create from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware';
import { ILoginStore } from '../model/login.model';
export const useLoginStore = create<ILoginStore>()(persist(
    (get,set) => ({
    userData:null,
    setUserData: (newUserData: any ) => set()
}),
{
name:'login',
storage:createJSONStorage(() => sessionStorage),
partialize:state=>({})
}))



