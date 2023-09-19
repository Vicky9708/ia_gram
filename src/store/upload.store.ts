import create from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware';
import { IUploadStore } from '../model/upload.model';
export const useUploadStore = create<IUploadStore>()(persist(
    (get,set) => ({
        upload:null,
        setUpload:(newupload) =>set(),
}),
{
name:'upload',
storage:createJSONStorage(() => sessionStorage),
partialize:state=>({})
}))