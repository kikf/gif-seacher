import React, { useState } from 'react'
import { AddCategorie } from './components/addCategorie'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {


const [categories, setCategories] = useState([])


  return (
    <>
        <h1 className='animate__animated animate__backInDown'>Gif Seacher</h1>
        <AddCategorie setCategories={setCategories} />

        <ol>
            {
                categories.map( c => (
                  
                    <GifGrid 
                    key={c}
                    c={c} 
                    />     
                  
                ))
            }
        </ol>
    </>  
  )
}
