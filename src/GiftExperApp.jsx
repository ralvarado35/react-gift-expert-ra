
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GiftExperApp = () => {

  const [ categorias, setCategorias ] = useState([])

  const onAddCategory = (newCategory) => {  
     if ( categorias.includes(newCategory)) return;
     setCategorias([newCategory, ...categorias ]);  
  }

  return (
    <>        
        <h1>GifExpertApp</h1>
        <AddCategory 
            onNewCategory = { (value) => onAddCategory(value) }
        />
            { 
              categorias.map(  ( category )  => (
                <GifGrid 
                     key = { category } 
                     category={category}/>
              ))
            }
    </>
  )
}
 