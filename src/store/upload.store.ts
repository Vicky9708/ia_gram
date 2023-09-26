//interface
import { IUploadStore } from '../model/upload.model';
//libraries
import {create} from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware';
export const useUploadStore = create<IUploadStore>()(persist(
    (set) => ({
        imageLoaded:false,
        setImageLoaded:(newImageLoaded:boolean) =>set(state=>({...state,imageLoaded:newImageLoaded})),
        imageData:{src:"",file:null,title:"",nameFile:""},
        setImageData:(newImageData:{src:string,file:any,title:string,nameFile:string})=>set(state=>({...state,imageData:newImageData})),
        images:[],
        setImages:(newImage:[])=>set(state=>({...state,images:newImage})),
        showFavs:false,
        setShowFavs:(newShowFavs:boolean)=>set(state=>({...state,showFavs:newShowFavs}))          
        ,
}),
{
name:'upload',
storage:createJSONStorage(() => localStorage),
partialize:state=>({
    images:state.images,
})
}))