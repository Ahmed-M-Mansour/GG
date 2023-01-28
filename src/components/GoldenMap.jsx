import React from 'react'; 

function Map() {
  return (
    <div>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=30.0633386,31.3512758&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          className="w-full h-96"
        >
        </iframe>
      </div>
  )
}

export default Map; 
