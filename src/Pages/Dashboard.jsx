import React from 'react'
import Gallery from '../Components/Gallery'
import Profile from '../Components/Profile'
import Header from '../Components/Header'


function Dashboard() {
  return (
    <div>
      <Header insideDashBoard/>
      <div style={{marginTop:'100px'}} className='container'>
        <h1 >Welcome <span style={{color:'#DF5D8B'}}>User</span></h1>

        <div className="row mt-5">
          <div className="col-lg-8 ">
            <Gallery/>
          </div>
          <div className="col-lg-4">
            <Profile/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard