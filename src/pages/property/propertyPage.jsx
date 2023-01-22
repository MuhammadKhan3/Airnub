
import React from 'react'
import Header from '../../components/header'
import Properties from '../../components/properties'
import PropertyFilter from '../../components/propertyFilter'

const PropertyPage = () => {
  return (
    <div className=''>
        <Header/>
        <PropertyFilter/>
        <Properties/>
    </div>
  )
}

export default PropertyPage