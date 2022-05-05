import { Form, Formik, FormikHelpers } from "formik"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./actores.model"

export default function FormularioActores(props: formularioActoresProps){
    return(
        <Formik
            InitialValues={props.modelo}
            onSubmit ={props.onSubmit}>
                {(formikProps) => (
                    <Form>
                        <FormGroupText campo= "nombre" label= "Nombre" />
                        <Button disabled={formikProps.isSubmitting}
                        type="submit">
                            Salvar
                        </Button>
                        <Link className = "btn btn-secondary" to="/actores">Cancelar</Link>
                    </Form>
                )}
        </Formik>
    )
}

interface formularioActoresProps{
    modelo:actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>):void;
}