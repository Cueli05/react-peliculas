import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";

export default function typeAHeadActores(props: typeAHeadActoresProps) {
  const actores: actorPeliculaDTO[] = [
    {
      id: 1,
      nombre: 'Tom Holland',
      personaje: '',
      foto: 'https://phantom-marca.unidadeditorial.es/9adb565dcfc4dc3e9b1948c7cf5b8f01/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/21/16454391499069.jpg',
    },
    {
      id: 2,
      nombre: 'Zendaya',
      personaje: '',
      foto: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zendaya-responde-rumores-embarazo-cosmo-1655322919.jpg',
    },
    {
      id: 3,
      nombre: 'Robert Downey jr',
      personaje: '',
      foto: 'https://media.gq.com.mx/photos/5ffa225dcbc9d2690de1631a/1:1/w_2027,h_2027,c_limit/robert-downey-jr-star-wars.jpg',
    },
    {
      id: 4,
      nombre: 'Chris Evans',
      personaje: '',
      foto: 'https://media.gq.com.mx/photos/5ffa225dcbc9d2690de1631a/1:1/w_2027,h_2027,c_limit/robert-downey-jr-star-wars.jpg',
    },
    {
      id: 5,
      nombre: 'Chris Pratt',
      personaje: '',
      foto: 'https://media.gq.com.mx/photos/5ffa225dcbc9d2690de1631a/1:1/w_2027,h_2027,c_limit/robert-downey-jr-star-wars.jpg',
    },
  ];

  return (
    <div>
      <label>Actores</label>
      <Typeahead
        id="typeahead"
        onChange={(actor) => {
          console.log(actor);
        }}
        options={actores}
        labelKey={actor => actor.nombre}
        filterBy={['nombre']}
        placeholder = "Escriba el nombre del actor..."
        minLength={2}
        flip = {true}
        
      />
    </div>
  );
}

interface typeAHeadActoresProps {
  actores: actorPeliculaDTO[];
}
