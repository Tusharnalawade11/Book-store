import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./books/Home"
import Categories from "./books/Categories"
import Books from "./books/Books"
import "./App.css"
import { categories, books } from './books/BookListJson'


export default function App() {
  return (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/categories' element={<Categories cat={categories}/>}></Route>
      <Route path={`/categories/:name`} element={<Books books={books} />}></Route>
    </Routes>

  )
}