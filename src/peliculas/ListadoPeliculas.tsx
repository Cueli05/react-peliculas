import PeliculaIndividual from "./peliculaIndividual"
import { pelicula } from "./peliculas.model"
import css from "./listadopeliculas.module.css"
import ListadoGenerico from "../utils/ListadoGenerico"

export default function ListadoPeliculas(props: listadoPeliculasProps){


        return(
           
            <ListadoGenerico 
            // cargandoUI = {<>Cargando...</>} //Con esto puedo personalizar una carga para una en especifica
            listado={props.peliculas}>
                            <div className={css.div}>
                {props.peliculas?.map(pelicula => 
                <PeliculaIndividual pelicula={pelicula}
                                    key={pelicula.id}
                />)}
            </div>
            </ListadoGenerico>

        )
}

interface listadoPeliculasProps{
    peliculas?: pelicula[]
}