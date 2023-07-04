import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Update(props) {

  const [newTitle, setNewTitle] = useState('');
  const [newUserId, setNewUserId] = useState('');
  const { Id } = useParams();
  const navigate = useNavigate();



    const handleSave = (e) => {
        e.preventDefault();
        console.log(Id);
        props.onUpdate(newTitle, newUserId, Id);
        setNewTitle('');
        setNewUserId('');
        navigate(`/`);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setNewTitle('');
        setNewUserId('');
        navigate(`/`);
    };


  return (
    <div className='container shadow rounded border border-lg border-2' style={styles.OuterDiv}>
      <form>
        <h1 className='mb-5 text-center'>Edit Album</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><h4>Enter new Title</h4></label>
          <input type="text" className="form-control" id="newTitle" onChange={(e) => setNewTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"><h3>Enter new User Id</h3></label>
          <input type="number" className="form-control" id="newUserId" onChange={(e) => setNewUserId(e.target.value)}/>
        </div>
        <div className="d-flex justify-content-around mb-4" >
            <button type="button" className="btn btn-danger" onClick={handleSave} >Save</button>
            <button type="button" className="btn btn-light" onClick={handleCancel} >Cancel</button>
        </div>
      </form>
    </div>
  )
}

const styles = {
    OuterDiv : {
      width: "28%", 
      padding: "2%", 
      marginTop: "5%",
      backgroundColor: "#d8d8d8"
    }
  }