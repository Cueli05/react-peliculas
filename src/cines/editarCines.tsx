import FormularioCines from "./FormularioCines";

export default function EditarCine() {
  return (
    <>
      <h3>Editar Cine</h3>
      <FormularioCines
        modelo={{
          nombre: "Sambil",
          latitud: 18.450706111427746,
          longitud: -69.95279967784883,
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
