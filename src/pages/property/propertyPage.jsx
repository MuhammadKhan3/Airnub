
import React from 'react'
import BottomNavigation from '../../components/bottomNavigation'
import Header from '../../components/header'
import Properties from '../../components/properties'
import PropertyFilter from '../../components/propertyFilter'

const PropertyPage = () => {
  return (
    <div className=''>
      <div className='sm:hidden mb:hidden'>
        <Header/>
      </div>
        <PropertyFilter/>
        <Properties/>
        <BottomNavigation/>
    </div>
  )
}

export default PropertyPage