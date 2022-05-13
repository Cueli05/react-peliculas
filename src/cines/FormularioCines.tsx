import { Form, Formik, FormikHelpers } from "formik";
import { cineCreacionDTO } from "./cines.model";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mapa from "../utils/mapa";

export default function FormularioCines(props:formularioCinesProps){
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema = {Yup.object({
                nombre: Yup.string().required('este campo es requerido').primeraLetraMayuscula()
            })}
        >
           {(formikProps)=>(
               <Form>
                   <FormGroupText label="Nombre" campo="nombre"/>

                    <div style={{marginBottom: '1rem'}}>
                        <Mapa
                        
                        />
                    </div>



                   <Button disabled={formikProps.isSubmitting}
                        type="submit">
                            Salvar
                    </Button>
                    <Link className = "btn btn-secondary" to="/cines">Cancelar</Link>
               </Form>
           )} 
        </Formik>
    )
}

interface formularioCinesProps{
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>):void;
}