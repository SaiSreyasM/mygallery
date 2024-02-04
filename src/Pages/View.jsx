import React from 'react'
import Header from '../Components/Header'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'



function View() {
    return (
        <div>
            <Header insideView />
            <div style={{ marginTop: '100px' }} className='container'>
                <h1 >Hello <span style={{ color: '#DF5D8B' }}>User</span></h1>

            </div>

            <div className="container p-5 mt-5" style={{border:'15px solid #DF5D8B',borderRadius:'25px'}}>
            <div className="row">

                    <div className="col-lg-6 rounded">
                        <img src={a1} alt="" className='w-100 rounded'  />
                    </div>

                    <div className="col-lg-6">
                        <img src={a2} alt="" className='w-100 rounded' />
                    </div>

                    

                    <div className="col-lg-6 mt-5">
                        <img src={a5} alt="" className='w-100 rounded' />
                    </div>

                    <div className="col-lg-6 mt-5">
                        <img src={a6} alt="" className='w-100 rounded' />
                    </div>
                    
                </div>
            </div>
            




        </div>
    )
}

export default View