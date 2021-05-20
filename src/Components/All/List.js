import React, {useContext, useState} from 'react';
import './List.css'
import { Table, Button } from 'react-bootstrap';
import AddButton from "./AddButton";
import {Link} from "react-router-dom";
import { GlobalContext } from "../../Contex/GlobalState";

function List(){

    const {announs, removeAnnoun} = useContext(GlobalContext)
    const [search,setSearch] = useState('')

    return(
        <div className='list'>
            <input  className='search' placeholder='Search...' onChange={event => setSearch(event.target.value)}/>
            <AddButton/>
            <Table striped variant='dark' >
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Date Added</td>
                    <td>Action</td>
                </tr>
                {
                    announs.filter(value => {
                        if (search === ""){
                            return value
                        }
                        else if(value.title.toLowerCase().includes(search.toLowerCase()) || value.description.toLowerCase().includes(search.toLowerCase())){
                            return value
                        }
                    })
                       .map((announ,index)=>
                      <tr key={announ.id}>
                          <td>{index+1}</td>
                          <td>{announ.title}</td>
                          <td>{announ.description}</td>
                          <td>{announ.date}</td>
                          <td>
                              <Link to={`/edit/${announ.id}`}><Button variant="primary">Edit</Button></Link>|
                              <Button onClick={()=>removeAnnoun(announ.id)} variant="danger">Delete</Button>
                          </td>
                      </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}

export default List;
