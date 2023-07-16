import React from 'react'
import { useNavigate, useParams } from 'react-router'

export default function Books({ books }) {
  let {name} = useParams()
  let navigate = useNavigate()

  let filteredBooks = books.filter((book) => book.category === name);

  return (
    <div className='container'>
      <button className='backToHome' onClick={() => {
        navigate('/categories')
      }
      }>
        Back
      </button>
      <h2 className='bookHeading'>{name}</h2>
      <div className='bookGroup'>
        {
          filteredBooks.map((book) => (
            <div className='singleBook' key={book.id}>
              <div id={`bookName${book.id}`} className='bookName'>{book.name}</div>
              <div className='bookImageDesc'>
                <img id={`bookImage${book.id}`} className='bookImage' src={book.src} alt='book' />
                <div id={`bookDesc${book.id}`} className='bookDesc'>{book.description}</div>
              </div>
              <div id={`bookAuthor${book.id}`} className='bookAuthor'>{book.author}</div> 
            </div>
          ))
        }
      </div>
    </div>
  )

}