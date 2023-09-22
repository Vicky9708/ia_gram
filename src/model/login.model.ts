export interface ILoginStore {
    userData:any
    setUserData: (newUserData: any) => void
    accessTokenGoogle:string
    setAccessTokenGoogle: (newAccessTokenGoogle: string) => void
    microsoftInstance:any,
    setMicrosoftInstance:(newMicrosoftInstance:any)=>void,
    authorized:boolean,
    setAuthorized:(newAuthorized:boolean)=>void
}

