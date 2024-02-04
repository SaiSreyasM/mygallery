import React from 'react'
import Addimage from './Addimage'
import TableData from './TableData'

function Gallery() {
  return (
    <div className='border rounded p-2 shadow'>

      <div className="d-flex justify-content-between">
        <h2>My <span style={{color:'#DF5D8B'}}>Collection</span></h2>
        <Addimage></Addimage>
      </div>

      <div className='mt-4'>
        <div className='border rounded '>
            <TableData/>
        </div>
      </div>

    </div>
  )
}

export default Gallery