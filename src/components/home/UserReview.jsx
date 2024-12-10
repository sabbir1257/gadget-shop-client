import React from 'react'
import Review from './Review'

const UserReview = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8'>
               <Review />
               <Review />
               <Review />
               <Review />
          </div>
     )
}

export default UserReview