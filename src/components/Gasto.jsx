import React from 'react'

import { formatarFecha } from "../helpers";
import { formatearCantidad } from "../helpers";

const Gasto = ({ gasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;


  return (
    <div className='gasto sombra'>

      <div className='contenido-gasto'>
        {/* Aca va la imagen */}
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className='fecha-gasto'>
            Agredado: {' '}
            <span>{formatarFecha(fecha)}</span>
          </p>

        </div>
      </div>

        <p className="cantidad-gasto">{formatearCantidad(cantidad)}</p>
    </div>
  )
}

export default Gasto