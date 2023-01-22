import React from "react";
import GoldenNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/GoldenMap";
import { services } from "../data/golden.data";
function Services() {
  return (
    <>
      <GoldenNavbar />
      <section className="container mx-auto">
        {
          services.map(item=>{
            return(
              <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 my-12">
          <h2 className="font-semibold text-3xl mb-5">{item.label}</h2>
          <p>
          Through our mechanical and electrical engineers , we study with our customer their technical problems to recommend the best solution using up to date technology.
          </p>
          <hr className="my-6 border-gray-300" />
          <p>
          Also we do commissioning and start up for all the instrumentation we supply to our customers if needed.
          </p>
          <hr className="my-6 border-gray-300" />

          <p>
          We do replacement on our responsibility.
          </p>
          <hr className="my-6 border-gray-300" />
          
          <div className="my-3 p-6">
            <img
              src={item.imgUrl}
              class="w-2/3 mx-auto"
              alt={item.label}
            />
          </div>
        </div>
            ); 
          })
        }
        
      </section>
      <Map />
      <Footer />
    </>
  );
}

export default Services;
