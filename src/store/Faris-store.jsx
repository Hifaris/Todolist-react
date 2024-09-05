
import {create} from 'zustand'
import { persist } from "zustand/middleware"
const farisStore = (set) => ({
    list:[
        {id:1, todolist: 'learning'},
    ],
    addList: (newValue)=> set((state)=>({
        list:[...state.list,{id: Date.now(), todolist:newValue}]
    })),
    delList: (id)=>set((state)=>({
        list:state.list.filter((item)=>item.id !==id)
    })),
    updateList: (newValue,id)=>set((state)=>({
        list: state.list.map((el)=>{
            if(el.id===id){
                return {...el,todolist:newValue}
            }else{
                return{...el}
            }
        })
    }))
    
})

const usePersist = {
    name: 'faris-store',
    getStorage : ()=> localStorage,
}
const useStore = create(persist(farisStore,usePersist))

export default useStore