import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFecthGifs";
import { getGifs } from "../helpers/GetGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {

    // const [images, setImages] = useState([]);
    // Esto permite que no se vuelva a renderiza la petición.    
    /*useEffect(() => {
        getGifs( categoria )
            .then( imgs => setImages(imgs)) ;
    }, [ categoria ])*/

    const { data:images, loading } = useFetchGifs( categoria );

    return (
        <>
            <h3>{categoria}</h3>
            { loading && <p>Loading</p> }
            <div className="card-grid">
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}