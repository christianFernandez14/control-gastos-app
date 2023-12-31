import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatarFecha } from "../helpers";
import { formatearCantidad } from "../helpers";

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoCasa,
  casa: IconoComida,
  gastos: IconoGastos,
  oscio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
}

const Gasto = ({ gasto, setGastoEditar, eliminarGastos }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

// Efecto Swipe
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => eliminarGastos(id)}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );


  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img
              src={diccionarioIconos[categoria]}
              alt={`Imagen de ${categoria}`}
            />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className='fecha-gasto'>
                Agredado el: {' '}
                <span>{formatarFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{formatearCantidad(cantidad)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto