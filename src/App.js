import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { About } from './pages/About'
import { Coffee } from './pages/Coffee'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'


export const App = () => {
  return (
    <div>
   <BrowserRouter>
   <Routes>
     <Route path='/'element={<Home/>}/>
    <Route path='about'element={<About/>}/>
    <Route path='coffee'element={<Coffee/>}/>
    <Route path='blog'element={<Blog/>}/>
    <Route path='contact'element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  )
}
