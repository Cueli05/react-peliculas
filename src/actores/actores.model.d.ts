export interface actorCreacionDTO {
  nombre: string;
  fechaNacimiento?: Date;
  foto?: File;
  fotoURL?: string;
  biografia?: string;
}

export interface actorPeliculaDTO {
  id: number;
  nombre: string | any;
  personaje: string;
  foto: string;
}
