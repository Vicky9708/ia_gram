import create from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware';
import { IFeedStore } from '../model/feed.model';
export const useFeedStore = create<IFeedStore>()(persist(
    (get,set) => ({
        feed:null,
        setFeed: (newFeed: any) => set()
}),
{
name:'feed',
storage:createJSONStorage(() => sessionStorage),
partialize:state=>({})
}))