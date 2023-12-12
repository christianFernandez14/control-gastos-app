import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'

import CerrarModal from '../img/cerrar.svg'

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [fecha, setFecha] = useState('')
  const [id, setId] =useState('')

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [])

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

    guardarGasto({ nombre, cantidad, categoria, id, fecha })
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

        <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

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

        <input
          type="submit"
          value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gastos'}
        />

      </form>

    </div>
  )
}

export default Modal