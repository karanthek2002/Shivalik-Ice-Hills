import React,{useEffect} from 'react'
import  './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck } from 'react-icons/hi' 

// lets import the images so we don't have this error on the browser.
 import img from '../../Assets/img1.jpg'
 import img2 from '../../Assets/img2.jpg'
 import img3 from '../../Assets/img3.jpg'
 import img4 from '../../Assets/img4.jpg'
 import img5 from '../../Assets/img5.jpg'
 import img6 from '../../Assets/img6.jpg'
 import img7 from '../../Assets/img6.jpg'
 import img8 from '../../Assets/img6.jpg'
 import img9 from '../../Assets/img6.jpg'
 import Aos from 'aos'
 import 'aos/dist/aos.css'


// array named data

const data = [
  {
    id:1,
    imgsrc: img,
    destTitle: 'Bola Bola Jai Mata Di',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },

  {
    id:2,
    imgsrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },
  {
    id:3,
    imgsrc: img3,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },
  {
    id:4,
    imgsrc: img4,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },
  {
    id:5,
    imgsrc: img5,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },
  {
    id:6,
    imgsrc: img6,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },
  {
    id:7,
    imgsrc: img7,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },
  {
    id:8,
    imgsrc: img8,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },
  {
    id:9,
    imgsrc: img9,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit repellat esse aperiam laudantium, officia blanditiis exercitationem sed repellendus? Reiciendis quis ad culpa repellat numquam.'
    
  },
]

const Main = () => {

    // react hook to add a scroll animation........

    useEffect(()=>{
      Aos.init({duration: 2000})
    },[])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
        Most visited destinations
        
        </h3>
      </div>

      <div className="secContent grid">
        {/* here we are using high order array method map() */}

        {
          data.map(({id, imgsrc,destTitle,location,grade,fees,description })=> {

            return(
              <div  key={id} data-aos="fade-up" className="singleDestination">
                {/* Here it will return single id from the map array */}

                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="contation flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main