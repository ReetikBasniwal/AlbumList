import React from 'react'
// import { useState } from 'react';
// import Update from './Update';

export default function Album(props) {
    // console.log(props.currAlbum);
    return (
      <div className="card shadow text-light" style={{width: "24rem", height: "19rem", background: "#545a60"}}>
          <div className="card-body text-center d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title mb-3">User-{props.userId}</h5>
                <p className="fw-normal fs-3">{ props.title}</p>
              </div>
              <div className="d-flex justify-content-around mb-4" >
                  <button type="button" className="btn btn-danger" onClick={() => props.onDelete(props.id)}>Delete</button>
                  <button type="button" className="btn btn-light" onClick={() => props.onEdit(props.currAlbum)} >Edit</button>
              </div>
          </div>
      </div>
    )
}
