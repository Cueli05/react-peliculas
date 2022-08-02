import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorCreacionDTO, actorPeliculaDTO } from "./actores.model";
import { useState } from "react";

export default function TypeAHeadActores(props: typeAHeadActoresProps) {
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
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nZPuhQdRB2lfPZuEK1H1c-_ttkvzbEk3lrB0gcir9e0bFCEL',
    },
    {
      id: 5,
      nombre: 'Chris Pratt',
      personaje: '',
      foto: 'https://imagenes.elpais.com/resizer/uCLDvjPD6zDG9zzQyoSLP_nwpXY=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/EU7FXSWM7RFEJO4L3ZUESZT6PQ.jpg',
    },
  ]

  const seleccion: actorPeliculaDTO[] = []

  const[elementoArrastrado,setElementoArrastrado] = useState < actorPeliculaDTO | undefined>(undefined)


  function manejarDragStart(actor: actorPeliculaDTO)
  {
    setElementoArrastrado(actor);
  }

  function manejarDragOver(actor: actorPeliculaDTO)
  {
    if(!elementoArrastrado){
      return;
    }
    if(actor.id !==elementoArrastrado.id){
      const elementoArrastradoIndice = props.actores.findIndex(x=> x.id === elementoArrastrado.id)
      const actorIndice = props.actores.findIndex(x=> x.id === actor.id)

      const actores = [...props.actores];
      actores[actorIndice] =elementoArrastrado;
      actores[elementoArrastradoIndice] =actor;

      props.onAdd(actores)
    }
  }

  return (
    <div>
      <label>Actores</label>
      <Typeahead
        id="typeahead"
        onChange={actores => {
          if(props.actores.findIndex(x=> x.id === actores[0].id)=== -1){
          props.onAdd([...props.actores, actores[0]])
          }
        }}
        options={actores}
        labelKey={actor => actor.nombre}
        filterBy={['nombre']}
        placeholder = "Escriba el nombre del actor..."
        minLength={2}
        flip = {true}
        selected = {seleccion}
        renderMenuItemChildren={actor =>(
          <>
            <img alt="Imagen Actor" src={actor.foto}
              style={{
                height: '64px',
                marginRight:'10px',
                width: '64px'
              }}
            />
            <span>{actor.nombre}</span>
            </>
        )}
        
      />

      <ul className="list-group">
        {props.actores.map(actor => <li 
        draggable = {true}
      onDragStart ={()=> manejarDragStart(actor)}
        onDragOver ={()=> manejarDragOver(actor)}
        className="list-group-item list-group-item-action"
        key={actor.id}>
          {props.listadoUI(actor)}
          
          <span className="badge bg-primary badge-pill pointer"
          style={{marginLeft:'0.5rem'}}
          onClick ={() =>props.onRemove(actor)}
          >
            X
          </span>

          </li>)}
      </ul>

    </div>
  );
}

interface typeAHeadActoresProps {
  actores: actorPeliculaDTO[];
  onAdd(actores: actorPeliculaDTO[]):void;
  listadoUI(actor: actorPeliculaDTO): ReactElement;
  onRemove(actor: actorPeliculaDTO):void
}
