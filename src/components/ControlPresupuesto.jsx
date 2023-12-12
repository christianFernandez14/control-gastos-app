import { useState, useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import { formatearCantidad } from "../helpers";

const ControlPresupuesto = ({ gastos, presupuesto }) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    // console.log('Componente montado')
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDiponible = presupuesto - totalGastado

    setDisponible(totalDiponible)
    setGastado(totalGastado)

  }, [gastos])
  

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
        
        
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>

      </div>
    </div>
  )
}

export default ControlPresupuesto