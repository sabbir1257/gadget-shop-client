import React from 'react'

const Banner = () => {
     return (
          <div
               className="hero min-h-screen"
               style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?t=st=1733861730~exp=1733865330~hmac=0bee0e13a60ac5ee35d18db72adfde713d305a4462e3db4547fd21c917822330&w=1380)",
               }}>
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                         <h1 className="mb-5 text-5xl font-bold">Welcome to Gadget Shop</h1>
                         <p className="mb-5">
                              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                         <button className="btn btn-primary">Get Started</button>
                    </div>
               </div>
          </div>
     )
}

export default Banner