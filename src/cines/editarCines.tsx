import FormularioCines from "./FormularioCines";

export default function EditarCine(){
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines 
                modelo={{nombre: 'Sambil'}}
                onSubmit = {valores => console.log(valores)}
            />
        </>
    )
}