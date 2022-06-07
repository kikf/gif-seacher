import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({c}) => {
    
    const {data:images, loading } = useFetch(c);

  return (
      <>
      <hr/>
      <h3> {c} </h3>
      
      
      { loading && <div className='loader'></div>}

    <div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem 
                    key={img.id}
                    img={img}
                    />
                ))
            }
    </div>
    </>
  )
}
