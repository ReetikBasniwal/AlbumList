import '../App.css';
import Navbar from './Navbar';
import Home from './Home';
import CreateAlbum from './CreateAlbum';
import { Routes, Route } from 'react-router-dom';
import Update from './Update';
import React, { useState, useEffect } from 'react';

function App() {
  const[data, setData] = useState([]);
  // const [currentItem, setCurrentItem] = useState();

   // GETTING DATA 
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    });
  }, [])

  // DELETE DATA
  const handleDelete = (id) => {
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
    }).then((response) => response.json())
    .then(() => {
      const updatedData = data.filter((album) => album.id !== id);
      setData(updatedData);
      console.log(updatedData);
    });
    alert("Your Album Deleted successfully");
  }

  // UPDATE ALBUM {
  const handleUpdate = async (Title, UserId, Id) => {
    const newID = Number(Id);
    const index = data.findIndex((item) => item.id === newID);
    console.log(index);
    let updatedAlbum = [];
    if (Id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${newID}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: UserId,
          id: newID,
          title: Title,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      updatedAlbum = {
        userId: UserId,
        id: newID,
        title: Title,
      }
    }
    const updatedData = [...data];
    updatedData[index] = updatedAlbum;
    setData(updatedData);
    alert("Update Successfully done");
  }


  // ADD ALBUM
  const handleAdd = (Title, UserId) => {
    const lastId = data[data.length - 1].id;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        userId: UserId,
        id: lastId + 1,
        title: Title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then(() => {
      const newAlbum = {
        id: lastId + 1,
        title: Title,
        userId : UserId,
      }
      const newData = [...data, newAlbum];
      setData(newData);
      console.log(newData);
    });
    
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route  path="/" element={ <Home data={data} onDelete={handleDelete} onUpdate={handleUpdate}/> } />
          <Route  path="/createAlbum" element={ <CreateAlbum addAlbum={handleAdd} /> } />
          <Route  path="/update/:Id" element={ <Update onUpdate={handleUpdate} /> } />
      </Routes>
    </div>
  );
}

export default App;
