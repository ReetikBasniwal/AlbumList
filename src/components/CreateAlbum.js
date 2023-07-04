import React, { useState} from 'react'

export default function CreateAlbum(props) {

  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAlbum(title, userId);
    alert("Your Album Added successfully");
    setTitle('');
    setUserId('');
  };

  return (
    <>
    <h1 className='my-5 text-center'>Create Album</h1>
    <div className='container shadow rounded border border-lg border-2' style={styles.OuterDiv}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"><h4>Title</h4></label>
          <input type="text" className="form-control" id="titleInput" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"><h3>User Id</h3></label>
          <input type="number" className="form-control" id="userIdInput" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </>
  )
}

const styles = {
  OuterDiv : {
    width: "25%", 
    padding: "2%", 
    marginTop: "5%",
  }
}
