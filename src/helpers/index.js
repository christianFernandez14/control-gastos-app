
// Genera un ID
export const generarId = () => {
  const random = Math.random().toString(36).substr(2)
  const fecha = Date.now().toString(36)
  return random + fecha
}

// Genera la fecha actual
export const formatarFecha = fecha => {
  const fechaNueva = new Date(fecha)
  const opciones = {year:'numeric', month:'long', day:'2-digit'}

  return fechaNueva.toLocaleDateString('es-ES', opciones)
}

// Para formatear la cantidad a mostrar
export const formatearCantidad = cantidad => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

// Para los select de las categorias
export const arrayCategorias = [
  'ahorro',
  'comida',
  'casa',
  'gastos',
  'oscio',
  'salud',
  'suscripciones']