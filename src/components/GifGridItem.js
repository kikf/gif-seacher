import React from 'react'

export const GifGridItem = ({img}) => {

  return (
    <div className="card animate__backInRight animate__animated">
        <a href={img.link} > <img src={img.url} alt={img.title}></img> </a>
        <p> { img.title } </p>
    </div>
  )
}
