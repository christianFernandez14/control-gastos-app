import Gasto from "./Gasto"


const ListadoGastos = ({ gastos, setGastoEditar, eliminarGastos }) => {
  return (
    <div className='listado-gastos contenedor'>

      <h2>{gastos.length ? 'Gastos' : 'No tienes gastos'}</h2>

      {gastos.map(gasto => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          eliminarGastos={eliminarGastos}
        />
      ))}
    </div>
  )
}

export default ListadoGastos