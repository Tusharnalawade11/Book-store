import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Categories({ cat }) {
  const navigate = useNavigate()

  return (
    <div className='categories'>
      <button className='backToHome' onClick={() => {
        navigate('/')
      }
      }>
        Back To Home
      </button>
      <h1 className='catHeading'>Categories</h1>

      <div className='generalDesc'>Find your most favorite books under variety of categories found below</div>
      <div className='categoryCardGroup' >
        {cat.map((c) => (
          <div key={c.id}>
          <Link className='link' to={`/categories/${c.name}`}>
            <div className='categoryCard' id={`categoryCard${c.id}`}>
              <div className='categoryName' id={`categoryName${c.id}`}>{c.name}</div>
              <div className='categoryDesc' id={`categoryDesc${c.id}`}>{c.description}</div>
            </div>
          </Link>
          </div>


        ))}
      </div>
    </div>

  )

}