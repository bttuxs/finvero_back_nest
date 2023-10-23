export const limpiarNombreProducto = (cadena: string): string => {
  cadena = cadena.toLowerCase().replace(/ /g, '');
  cadena = cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return cadena;
};
