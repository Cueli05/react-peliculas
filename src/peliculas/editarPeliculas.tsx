import { actorPeliculaDTO } from "../actores/actores.model";
import { cinesDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {
  const generosNoSeleccionados: generoDTO[] = [{ id: 2, nombre: "Drama" }];
  const generosSeleccionados: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 3, nombre: "Comedia" },
  ];

  const cinesSeleccinados: cinesDTO[] = [
    { id: 1, nombre: "Agora" }
  ];

  const cinesnoSeleccionados: cinesDTO[] = [
    { id: 2, nombre: "Sambil" },
  ];

  const actoresSeleccionados: actorPeliculaDTO[]=[
    {
      id: 1,
      nombre: 'Tom Holland',
      personaje: '',
      foto: 'https://phantom-marca.unidadeditorial.es/9adb565dcfc4dc3e9b1948c7cf5b8f01/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/21/16454391499069.jpg',
    }
  ]

  return (
    <>
      <h3>Editar Peliculas </h3>
      <FormularioPeliculas
        actoresSeleccionados={actoresSeleccionados}
        cinesNoSeleccionados={cinesnoSeleccionados}
        cinesSeleccionados={cinesSeleccinados}
        generosNoSeleccionados={generosNoSeleccionados}
        generosSeleccionados={generosSeleccionados}
        modelo={{
          titulo: "Spiderman",
          enCines: true,
          trailer: "url",
          fechaLanzamiento: new Date("2019-01-01T00:00:00"),
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
