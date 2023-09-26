export interface IFeedStore {
    feed:any
    setFeed: (newFeed: any) => void
}
export interface ICardPhoto{
    title:string,
    src:string,
    file:any,
    ia:any,
    index:number
}