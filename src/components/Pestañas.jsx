import React from 'react'

const Pestañas = ({matrix,setMostrar}) => {
    const mostrar=(e,value)=>{
        setMostrar(value);
    }
  return (
    <div className='ventanas'>
        {
            matrix.map((item,idx)=><button key={idx} onClick={(e)=>mostrar(e,item)}> pestañas {idx+1}</button>)
        }
    </div>
  )
}

export default Pestañas