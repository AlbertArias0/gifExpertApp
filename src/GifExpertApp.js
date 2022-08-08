import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>  {
    // const categories = ['One punch', 'Samurai x', 'Dragon ball'];
    const [categories, setCategories] = useState(['One punch'])
    
    /*
    const handleAdd = () => {
        // setCategories([...categories, 'Hunter']);
        setCategories( cats => [...cats, 'Hunter'])
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories = {setCategories}/>
            <ol>
                {
                categories.map( category => (
                    <GifGrid 
                        key= {category}
                        categoria={category}/>
                ))
                }
            </ol>
        </>
    )
}