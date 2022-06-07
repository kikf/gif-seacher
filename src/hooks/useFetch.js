import { useEffect, useState } from "react"
import {getGifs} from "../helpers/getGifs";

export const useFetch = (c) => {
    const [fetch, setfetch] = useState({
        data: [],
        loading: true,
    })
    let numeroRam = Math.random() * 1000;
    useEffect(() => {

      getGifs(c)
        .then( imgs => {

          setTimeout(() => {
            
              setfetch({
                data: imgs,
                loading: false
              });
            

          }, numeroRam);
        })

    }, [c])
    
    

    return fetch;
}