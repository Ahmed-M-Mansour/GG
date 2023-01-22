import React from 'react'
import GoldenNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import Map from '../components/GoldenMap'
import GoldenMarquee from '../components/GoldenMarquee'
import { pneumatic } from '../data/golden.data'
function Pneumatic() {
  return (
    <div>
        <GoldenNavbar/> 
        <section className="container mx-auto my-12 py-8"> 
            {
                pneumatic.map(item=>{
                    return(
                        <div className="card lg:card-side bg-base-100 shadow-xl my-12">
                        <div className="w-2/4 ">
                          <figure>
                            <img
                              src={item.imgUrl}
                              alt="Album"
                            />
                          </figure>
                        </div>
                        <div className="w-2/4 m-6">
                          <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <ul className="list-disc"> 
                              <li> Butterfly valves are a family of quarter-turn rotational motion valves that are used in pipelines to shut-off flow. It is often said that butterfly valves can be used to regulate the flow. However, we do not recommend doing this, as it can damage the valve disk and have a negative effect on the sealing properties. They are used in a wide variety of process media and industries especially in water supply, collection, and distribution, as well as pumping stations, and have a broad range of use cases especially in flow isolation. A couple of their key advantages over other valve families are their simple construction and compactness, resulting in the end products being of lighter weights and lower cost and with smaller installation footprints and faster actuation speeds.</li>
                              <li> Hawle butterfly valves are flanged double eccentric type (double offset) type. The double offset or eccentricity refers to the fact that this valve design involves two offsets of the disc from the valve body’s centre or the axis of rotation of the stem.</li>
                            </ul>
                            <div className="card-actions justify-center">
                              <button className="btn btn-primary">More Details</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                })
            }
        </section>
        <GoldenMarquee/> 
        <Map/> 
         <Footer/> 
    </div>
  )
}

export default Pneumatic
