export interface IUploadStore {
    imageLoaded:boolean
    setImageLoaded: (newImageLoaded: boolean) => void,
    imageData:{src:string,file:any,title:string,nameFile:string}
    setImageData:(newImageData:{src:string,file:any,title:string,nameFile:string})=>void,
    images:[],
    setImages:(newImages:[])=>void
    
}
export interface IUploadImg{
    onLoaded:(file:any)=>void,
}
