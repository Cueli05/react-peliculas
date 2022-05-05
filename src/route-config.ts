import crearActores from "./actores/crearActores";
import editarActores from "./actores/editarActores";
import indiceActores from "./actores/indiceActores";
import crearCines from "./cines/crearCines";
import editarCines from "./cines/editarCines";
import indiceCines from "./cines/indiceCines";
import crearGenero from "./generos/crearGenero";
import editarGenero from "./generos/editarGenero";
import IndiceGeneros from "./generos/indiceGeneros";
import LandingPage from "./LandingPage";
import crearPeliculas from "./peliculas/crearPeliculas";
import editarPeliculas from "./peliculas/editarPeliculas";
import filtroPeliculas from "./peliculas/filtroPeliculas";
import redireccionarALanding from "./utils/redicreccionALanding";

const rutas =[
    {path:'/generos', componente: IndiceGeneros},
    {path:'/generos/crear', componente: crearGenero},
    {path:'/generos/editar/:id', componente: editarGenero},
    

    {path:'/actores', componente: indiceActores},
    {path:'/actores/crear', componente: crearActores},
    {path:'/actores/editar/:id', componente: editarActores},

    {path:'/cines', componente: indiceCines},
    {path:'/cines/crear', componente: crearCines},
    {path:'/cines/editar/:id', componente: editarCines},

    {path:'/peliculas/filtrar', componente: filtroPeliculas},
    {path:'/peliculas/crear', componente: crearPeliculas},
    {path:'/peliculas/editar/:id', componente: editarPeliculas},

    
    {path:'/', componente: LandingPage},

    {path:'*', componente: redireccionarALanding}

];

export default rutas;