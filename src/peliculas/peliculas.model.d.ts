export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculsaCreacionDTO{
    titulo: String;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
    generosIds?:number[];
    cinesIds?: number[];
    
}

export interface landingPageDTO{
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}