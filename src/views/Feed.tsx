import { FloatButton } from "antd"
import { PlusOutlined } from "@ant-design/icons";
import { ContainerCardsPhotos } from "../components/feed/ContainerCardsPhotos";
import photo from "../assets/img/background.jpg"
import { routerLink } from "../modules/utils/utils.module";
import { routes } from "../routes/routes.routes";
export const Feed=()=>{
    const dataPrueba=[
        {
            photo:photo,
            title:'Título de la imagen1',
            description:'Descripción de la imagen1'
        },
        {
            photo:photo,
            title:'Título de la imagen2',
            description:'Descripción de la imagen2'
        },
        {
            photo:photo,
            title:'Título de la imagen3',
            description:'Descripción de la imagen3'
        },
    ]
    return(
        <>
        <ContainerCardsPhotos cards={dataPrueba} />
        <FloatButton icon={<PlusOutlined />} onClick={()=>{routerLink(routes.UPLOAD)}} type="default"  style={{background:'pink'}} />
        </>
    )
}