import React, {useContext, useEffect, useState} from 'react';

import { useHistory } from "react-router-dom";
import {toast} from "react-toastify";
import {GlobalContext} from "../../Contex/GlobalState";


function FormEditAnnoun  ( props ) {


 const { editAnnoun, announs } = useContext( GlobalContext)

  const[selected, setSelected]= useState({
    id:'',
    title:'',
    description:'',
    date:''
})

 const history = useHistory()

    const currentId = props.match.params.id;

 // useEffect(()=>{
 //     const announId = currentId
 //     const selectedAnnoun = announs.find(announ => announ.id === announId)
 //     setSelected(selectedAnnoun)
 //
 // },[currentId , announs])


        const announId = currentId
        const selectedAnnoun = announs.find(announ => announ.id === announId)
        setSelected(selectedAnnoun)






 const onSubmit = (e)=>{
     e.preventDefault()
     editAnnoun(selected)
     history.push('/')
     toast.configure()
     const notify=()=>{ toast.success("Edited Successfully",{position:'top-center',autoClose:3000})}
     notify()
 }

    return (

        <div className='container mt-5'>
            <div className='row'>
                <div className='mx-auto d-block'>
            <h1 className='my-4 font-weight-bold '> Edit Announcement</h1>
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <input
                    type='text'
                    name='title'
                    onChange={e=>setSelected({...selected, [e.target.name]: e.target.value})}
                    value={selected.title}
                    required
                />
                <br/>
                <label>Description</label>
                <input
                    type='text'
                    name='description'
                    onChange={e=>setSelected({...selected, [e.target.name]: e.target.value})}
                    value={selected.description}
                    required
                />
                <br/>
                <label>Date</label>
                <input
                    type='date'
                    name='date'
                    onChange={e=>setSelected({...selected, [e.target.name]: e.target.value})}
                    value={selected.date}
                    required
                />
                <br/>
                <button className='btn-success mt-3' type='submit'>Add</button>
                <button onClick={()=>history.push('/')} className='btn-danger ml-3'>Cancel</button>
            </form>
        </div>
            </div>
        </div>
    )}
export default FormEditAnnoun;









