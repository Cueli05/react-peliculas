import FormularioActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <>
        <h3>Editar Actores</h3>
        <FormularioActores
        modelo = {{nombre: 'Tom Holland',
        biografia:`# Tom
Ha nacido **Tom**`,
        fechaNacimiento: new Date('1996-06-01T00:00:00'),
        fotoURL:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT2mdIv2oSgUO0zm7jZHboIgb1T7ligSAizsDiuDbOC94Dt8TZffj5WtNHFvoci'}}
        onSubmit={valores => console.log(valores)}/>
    </>
    )
}