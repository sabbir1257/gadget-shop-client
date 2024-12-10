import React from 'react'
import Banner from '../components/home/Banner'
import FraturedProducts from '../components/home/FraturedProducts'
import UserReview from '../components/home/UserReview'
import Accordion from '../components/home/Accordion'

const home = () => {
     return (
          <div>
               <Banner />
               <div className='container mx-auto'>
                    <div className='my-28'>
                         <h1 className='mb-16 text-3xl font-semibold text-center'>Featured Products</h1>
                         <FraturedProducts />
                    </div>
                    <div className='my-28'>
                         <h1 className='mb-16 text-3xl font-semibold text-center'>User Review</h1>
                         <UserReview />
                    </div>
                    <div className='my-28'>
                         <h1 className='mb-16 text-3xl font-semibold text-center'>Frequantly Asked Questions</h1>
                         <Accordion />
                    </div>
               </div>
          </div>
     )
}

export default home