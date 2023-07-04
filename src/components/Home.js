import React from 'react'
import Album from './Album'
// import { useState } from 'react';
// import Update from './Update';
import { useNavigate } from 'react-router-dom';


export default function Home(props) {
  
  // const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();


  // EDIT
  const handleEdit = (CuAlbum) => {
    navigate(`/update/${CuAlbum.id}`);
  };
  
  return (
    <div className='container my-3'>
      {console.log('home')}
      <h1 className='mb-5'>Albums</h1>
          <div className="row">
          {
            // RENDERING EVERY ALBUM
            props.data.map((item) => {
              return  <div className="col-md-4 mb-5"  key={item.id}>
                        <Album 
                          title={item.title} 
                          id={item.id} userId={item.userId}
                          onDelete={props.onDelete}
                          onEdit={() => handleEdit(item)}
                          currAlbum={item} 
                        />
                      </div>
              }
            )
          }
          </div> 
        </div>
      // {/* { editMode ? (<Update 
      //                 Cancel={handleCancel} 
      //                 onUpdate={props.onUpdate}
      //             />) : 
      //   (
      //   <>
      //     <h1 className='mb-5'>Albums</h1>
      //     <div className="row">
      //     {
      //       // RENDERING EVERY ALBUM
      //       props.data.map((item) => {
      //         return  <div className="col-md-4 mb-5"  key={item.id}>
      //                   <Album 
      //                     title={item.title} 
      //                     id={item.id} userId={item.userId}
      //                     onDelete={props.onDelete}
      //                     onEdit={() => handleEdit(item)}
      //                     currAlbum={item} 
      //                   />
      //                 </div>
      //         }
      //       )
      //     }
      //     </div> 
      //    </>
      //    )
      // } */}
     
    
  )
}
