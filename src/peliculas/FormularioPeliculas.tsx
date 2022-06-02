import { Form, Formik, FormikHelpers } from "formik";
import { peliculsaCreacionDTO } from "./peliculas.model";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "../utils/SelectorMultiple";
import { generoDTO } from "../generos/generos.model";
import { useState } from "react";

export default function FormularioPeliculas(props: formularioPeliculasProps){
    const [generosSeleccionados,setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados,setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados));
    
    function mapear(arreglo:{id:number, nombre:string}[]):selectorMultipleModel[]{
        return arreglo.map(valor =>{
            return{llave: valor.id, valor:valor.nombre}
        })
    }

    return(
       <>
         <Formik
        initialValues={props.modelo}
        onSubmit={(valores,acciones)=>{
            valores.generosIds = generosSeleccionados.map(valor => valor.llave);
            props.onSubmit(valores,acciones)
        }}

        validationSchema={Yup.object({
            titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
        })}
        >
                {FormikProps =>(
                    <Form>
                        <FormGroupText label = "Titulo" campo ="titulo"/>
                        <FormGroupCheckbox label = "En cines" campo ="enCines"/>
                        <FormGroupText label="Trailer" campo = "trailer"/>
                        <FormGroupFecha label="Fecha Lanzamiento" campo = "fechaLanzamiento"/>
                        <FormGroupImagen label="Poster" campo = "poster" imagenURL={props.modelo.posterURL}/>

                        <div className="form-group">
                            <label>Géneros:</label>
                            <SelectorMultiple seleccionados={generosSeleccionados}
                            noSeleccionados={generosNoSeleccionados}
                            onChange= {(seleccionados,noSeleccionados) =>{
                                setGenerosSeleccionados(seleccionados)
                                setGenerosNoSeleccionados(noSeleccionados)
                            }}/>
                        </div>

                        <Button disabled={FormikProps.isSubmitting} type="submit">Enviar</Button>
                        <Link className="btn btn-secondary" to="/">Cancelar</Link>
                    </Form>
                )}
        </Formik>
       </>
    )
}

interface formularioPeliculasProps{
    modelo: peliculsaCreacionDTO;
    onSubmit(valores:peliculsaCreacionDTO, acciones: FormikHelpers<peliculsaCreacionDTO>):void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
}