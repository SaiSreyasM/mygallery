import React from 'react'
import cam from '../assets/cam.jpg'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




function Home() {
  return (
    <div>

      <div style={{ marginTop: "50px" }} className="w-100 d-flex justify-content-center align-items-center">

        <div className="container w-100">

          <div className="row align-items-center mt-5 mb-5" style={{ backgroundColor: '#28292B', borderRadius: '25px' }}>
            <div className="col-lg-6 p-5  " style={{ backgroundColor: '#28292B' }}>
              <h1 style={{ fontSize: '80px', backgroundColor: '#28292B' }} className='fw-bolder text-light mb-5|'>
                <i style={{ height: '85px', backgroundColor: '#28292B' }} className="fa-solid fa-image mb-3"></i> <span style={{ color: '#DF5D8B', backgroundColor: '#28292B' }}>My</span> Gallery</h1>
              <h4 className='mb-3' style={{ textAlign: 'justify', fontStyle: 'italic', backgroundColor: '#28292B' }}>Enter into the world of images. This webiste enables you to create your own personal profile and upload the Moments that you have captured.</h4>
              <div className='mt-4' style={{ backgroundColor: '#28292B' }} ><Link to={'/login'} style={{ color: 'white', backgroundColor: '#DF5D8B', fontSize: 'larger' }} className="btn ">Let's Get Started <i style={{ backgroundColor: "transparent" }} className='fa-solid fa-arrow-right'></i></Link></div>
            </div>
            <div className="col-lg-1 " style={{ backgroundColor: '#28292B' }}></div>
            <div className="col-lg-4" style={{ backgroundColor: '#28292B' }}>
              <div className='text-center'> <img className='w-100 rounded' src={cam} alt="landing" /></div>
            </div>
          </div>

          {/* ----------------------------- */}

          <div className='mt-5 p-5' style={{ backgroundColor: '#28292B', borderRadius: '25px' }}>
            <CardGroup>

              <Card>
                <Card.Img variant="top" src={a1} />
              </Card>

              <Card>
                <Card.Img variant="top" src={a2} />
              </Card>

              <Card>
                <Card.Img variant="top" src={a3} />
              </Card>

            </CardGroup>
          </div>

          {/* ----------------------------- */}


          <div className='mt-5 p-5' style={{ backgroundColor: '#28292B', borderRadius: '25px' }}>
            <div className="row">
              <div className="col-lg-12" style={{backgroundColor:'#28292B'}}>
                <img src={a4} alt="" style={{height:'600px',width:'100%'}} />
              </div>
            </div>
          </div>



        </div>


      </div>


    </div>
  )
}

export default Home