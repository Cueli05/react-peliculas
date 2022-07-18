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

  return (
    <>
      <h3>Editar Peliculas </h3>
      <FormularioPeliculas
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
