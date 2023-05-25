export const SIRADAKI_MOVIE = "SIRADAKI_MOVIE"
export const LISTE_EKLE = "LISTE_EKLE"
export const ONCEKI_MOVIE = "ONCEKI_MOVIE"
export const BASA_DON = "BASA_DON"
export const FILM_ONER ="FILM_ONER"
export const FAVFILM_CIKAR= "FAVFILM_CIKAR"



export const siradakiMovie = () =>{
  return({type:SIRADAKI_MOVIE})
}

export const oncekiMovie = () =>{
  return({type:ONCEKI_MOVIE})
}

export const listemeEkle = (movie) =>{
  return({type:LISTE_EKLE, payload:movie})
}

export const basaDon = () =>{
  return({type:BASA_DON})
}

export const filmOner = () =>{
  return({type:FILM_ONER})
}

export const favfilmCikar = (id) =>{
  return({type:FAVFILM_CIKAR, payload:id})
}

