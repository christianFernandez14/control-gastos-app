import { useState } from 'react'

import CerrarModal from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const arrayCategorias = [
    'ahorro',
    'comida',
    'casa',
    'gastos Varios',
    'oscio',
    'salud',
    'suscripciones']

  const ocultarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)

    }, 500);

  }



  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img
          src={CerrarModal}
          alt="Imagen para cerrar el modal"
          onClick={ocultarModal}
        />
      </div>

      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>

        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id='nombre'
            type="text"
            placeholder='Ingresa el nombre del gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />

        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id='cantidad'
            type="number"
            placeholder='Ingresa la cantidad: Ej. 300'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />

        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="">- seleccione -</option>
            {arrayCategorias.map(categoria => (
              <option
                key={categoria}
                value={categoria}
              >{categoria}</option>
            ))}

          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />

      </form>

    </div>
  )
}

export default Modal