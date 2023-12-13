import {useState, useEffect} from 'react'

import {arrayCategorias} from '../helpers'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
          <div className="campo">
            <label htmlFor="filtro">Filtrar Campo</label>
            <select 
            value={filtro} 
            id="filtro"
            onChange={e => setFiltro(e.target.value)}            
            >
            <option value="">- Todas las Categorias -</option>
            {arrayCategorias.map(categoria => (
              <option
                key={categoria}
                value={categoria}
              >{categoria}</option>
            ))}

            </select>
          </div>
      </form>

    </div>
  )
}

export default Filtros