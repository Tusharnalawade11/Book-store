import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <img className='headerImage' src={require("../images/headerImage.jpg")} alt='header'/>
      <div className='introduction'>Select from a wide range of books! Please select the category and find variety of books in each category</div>
      <div className='center'>
      <span className='link'><Link to='/categories'>Click here</Link> to view Categories</span>
      </div>
    </>

  )

}