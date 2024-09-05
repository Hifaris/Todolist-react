import React, { useState } from 'react'
import useStore from '../store/Faris-store'
import delete_icon from '../asset/delete.png'
import { toast } from 'react-toastify'
import TodoTask from './TodoTask'



function TodoList() {
    const [text, setText] = useState('')
    const { list, addList,delList,updateList } = useStore((state) => ({
        list: state.list,
        addList: state.addList,
        delList: state.delList,
        updateList: state.updateList
    }))
    console.log(list)
    

    const hdlInputList = (e) => {
        setText(e.target.value)
    }
    const submitList = () => {
        addList(text)
        toast.success('Added Successfully')
    }
    const hdlDelete = (id) => {
        delList(id)
    }

    return (
        <div className='bg-white mx-auto w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl mt-10'>
            <h1 className=' text-center font-semibold text-xl'>Todo List</h1>
            <div className='flex items-center my-5 bg-gray-300 rounded-full'>
                <input type="text" className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2' onChange={hdlInputList} placeholder='Add your list' />
                <button className='border-none rounded-full bg-blue-950 text-white h-14 w-20' onClick={submitList}>Add</button>
            </div>

            {list.map((item, index) => (
            //    <TodoItems hdlDelete={hdlDelete} item={item} index={index} />
             <TodoTask hdlDelete={hdlDelete} item={item} index={index} updateList={updateList}/>
            ))}
        </div>
    )
}

export default TodoList

{/* <div key={index} className='flex w-11/12 justify-between items-center '>
                    <li key={index} className='pl-5 pb-5 list-none  text-slate-700 text-[17px] bg-slate-100 '>{item.todolist}</li>
                   
                   <img src={delete_icon} alt="" onClick={()=>hdlDelete(item.id)} className='w-5 cursor-pointer'/>
                </div> */}