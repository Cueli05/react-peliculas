import { useState, useEffect } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){
    // const peliculaPrueba: pelicula ={
    //   id: 1, titulo: 'Spiderman: Far From Home',
    //   poster: 'https://m.media-amazon.com/images/I/810OkkP0LnL._AC_SY679_.jpg'
    
    const [peliculas,setPeliculas]=useState<landingPageDTO>({})

    useEffect(()=>{
      const timerId = setTimeout(()=>{
        setPeliculas({enCartelera:[
          {
            id: 1, titulo: 'Spiderman: Far From Home',
            poster: 'https://m.media-amazon.com/images/I/810OkkP0LnL._AC_SY679_.jpg'
            },
            {
              id: 2, titulo: 'MOANA',
              poster: 'https://m.media-amazon.com/images/I/615sOgj+FmL._AC_.jpg'
              }
        ],
        proximosEstrenos:[
          {
            id: 3, titulo: 'SOUL',
            poster: 'https://m.media-amazon.com/images/I/71JAcJI-+YL._SL1374_.jpg'
            }
        ]
      })
      },1000);
    
      return() => clearTimeout(timerId);
    })

    return(
        <div>
        {/* <PeliculaIndividual pelicula={peliculaPrueba}/> */}
        
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas = {peliculas.enCartelera} />

        <h3>Próximos Estrenos</h3>
        <ListadoPeliculas peliculas = {peliculas.proximosEstrenos} />
      </div>

    )
}