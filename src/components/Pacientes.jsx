const Pacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

const { nombre, representante, email, fecha, consulta, id} = pacientes

const handleEliminar = () => {
  const respuesta = confirm('¿Deseas eliminar este paciente?')

  if(respuesta) {
    eliminarPaciente(id)
  }
}

  return (
    <>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Paciente: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Representante: {''}
          <span className="font-normal normal-case">{representante}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Motivo de la Consulta: {''}
          <span className="font-normal normal-case">{consulta}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
            onClick={() => setPaciente(pacientes)}
            >Editar</button>

          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}
            >Eliminar
          </button>
        </div>
      </div>
    </>
  )
}

export default Pacientes
