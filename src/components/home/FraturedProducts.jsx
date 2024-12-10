import React from 'react'
import ProductCard from '../ProductCard'

const FraturedProducts = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8'>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
          </div>
     )
}

export default FraturedProducts