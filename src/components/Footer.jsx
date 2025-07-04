import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#2f1893] text-gray-300 py-4'>
    <div className='flex flex-col gap-3 max-w-[80%] m-auto'>
      <div className='flex justify-between items-center md:items-center'> 
        <h2 className='font-bold'>Startup 3</h2>
        <ul className='flex gap-3 text-xs md:text-sm'>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li><FontAwesomeIcon icon={faTwitter}/></li>
            <li><FontAwesomeIcon icon={faFacebook}/></li>
            <li><FontAwesomeIcon icon={faInstagram}/></li>
        </ul>
      </div>
      <hr className='text-gray-500' />
      <div className='flex justify-between gap-2 text-xs md:text-sm items-start md:items-center flex-col md:flex-row'>
        <ul className='flex gap-2'>
          <li>Tour</li>
          <li>Features</li>
          <li>PricingPlans</li>
          <li>OurWorks</li>
          <li>Brands</li>
          <li>Contacts</li>
        </ul>
        <p>&copy; 2025 Design by &hearts;. All rights reserved</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
