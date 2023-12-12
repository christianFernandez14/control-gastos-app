import { useState } from 'react'
import Mensaje from './Mensaje'

import CerrarModal from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGastos }) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState('')

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

  const handleSubmit = e => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son requeridos')

      setTimeout(() => {
        setMensaje('')        
      }, 1500);

      return
    }

    guardarGastos({nombre, cantidad, categoria})
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

      
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >

        <legend>Nuevo Gasto</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

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
          <label htmlFor="categoria">Categoría</label>

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