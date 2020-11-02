import React, {useState} from 'react'


const Stock = (props) => {

  const clicked = () => {
    props.addToPro(props.aStock)
  }

  return (
    <div onClick={() => {clicked()}} >

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.aStock.name}</h5>
          <p className="card-text">
          {props.aStock.ticker}: {props.aStock.price}</p>
        </div>
      </div>


    </div>
  )
}

export default Stock
