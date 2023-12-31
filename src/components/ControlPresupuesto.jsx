import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import { formatearCantidad } from "../helpers";

const ControlPresupuesto = ({ 
  gastos, 
  setGastos, 
  presupuesto, 
  setPresupuesto,
  setIsValidPresupuesto 
}) => {

  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    // console.log('Componente montado')
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDiponible = presupuesto - totalGastado

    // Calulando el porcentaje:
    const nuevoPorcentaje = (((presupuesto - totalDiponible) / presupuesto) * 100).toFixed(2)

    setDisponible(totalDiponible)
    setGastado(totalGastado)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)

    }, 1500);

  }, [gastos])


  const handleRestApp = () => {
    
    const resultado = confirm('¿Esta seguro de Resetear App?')
    if (resultado){
      // console.log('Resenteando App')
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
   }


  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#dc2626' : '#3b82f6',
            textColor: porcentaje > 100 ? '#dc2626' : '#3b82f6',
            trailColor: '#f5f5f5'
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}

        />
      </div>

      <div className="contenido-presupuesto">
        <button
          className="reset-app"
          type="button"
          onClick={handleRestApp}
        >
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p className={disponible < 0 ? 'negativo' : ''}>
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