import React, {useContext, useState} from 'react';
import './AddBook.css';
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {GlobalContext} from "../../Contex/GlobalState";

function FormAddAnnoun() {

    const [title, setTitle] = useState('')
    const [description,setDescription] = useState('');
    const [date,setDate] = useState('')

    const { addAnnoun } = useContext(GlobalContext)

    const history = useHistory()

    const onSubmit = e =>{
        e.preventDefault()
        const newAnnoun={
            id: uuid(),
            title,
            description,
            date
        }
        addAnnoun(newAnnoun)
        history.push('/')
        toast.configure()
        const notify=()=>{ toast.success("Add Successfully",{position:'top-center',autoClose:3000})}
        notify()
    }
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='mx-auto d-block'>
            <h1 className='my-4 font-weight-bold '> Add Announcement</h1>
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <input
                    type='text'
                    name='title'
                    onChange={e=>setTitle(e.target.value)}
                    value={title}
                    required
                />
                <br/>
                <label>Description</label>
                <input
                    type='text'
                    name='description'
                    onChange={e=>setDescription(e.target.value)}
                    value={description}
                    required
                />
                <br/>
               <label>Date</label>
                <input
                    type='date'
                    name='date'
                    onChange={e=>setDate(e.target.value)}
                    value={date}
                    required
                />
                <br/>
                <button className='btn-success mt-3' type='submit'>Add</button>
                <button onClick={()=>history.push('/')} className='btn-danger ml-3'>Cancel</button>
            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormAddAnnoun;
