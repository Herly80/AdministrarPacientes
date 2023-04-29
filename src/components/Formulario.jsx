import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente } ) => {

  const [nombre, setNombre] = useState('')
  const [representante, setRepresentante] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [consulta, setConsulta] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setRepresentante(paciente.representante)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setConsulta(paciente.consulta)
    }
  }, [paciente])
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha= Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      
      if([nombre, representante, email, fecha,consulta].includes('')) {
      console.log('Hay al menos un campo vacío')

      setError(true)
      return
    }
    setError(false)

    //Objeto de pacientes

    const objetoPacientes = {
      nombre, 
      representante, 
      email, 
      fecha,
      consulta
    }

    if(paciente.id) {
      //Editando el registro
      objetoPacientes.id = paciente.id
     
      //itera por cada paciente y busca los que tengan el mismo Id con el que esta en el formulario y retorna el q esta en el formulario y los que no son iguales los retorna tal cual como estan
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente= ({})
    }else {
      //Nuevo registro
      objetoPacientes.id = generarId()
      setPacientes([...pacientes, objetoPacientes])

    }
    

    //Limpiar el form
    setNombre('')
    setRepresentante('')
    setEmail('')
    setFecha('')
    setConsulta('')

  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form  onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        { error && <Error><p>Todos los campos son obligatorios</p></Error>}
        
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
            Nombre del Paciente
          </label>
          <input 
          id="nombre"
            type="text" 
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="representante" className="block text-gray-700 uppercase font-bold">
            Nombre del Representante
          </label>
          <input 
          id="representante"
            type="text" 
            placeholder="Nombre del Representante"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={representante}
            onChange={(e) => setRepresentante(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
          id="email"
            type="email" 
            placeholder="Email contacto representante"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
            Fecha
          </label>
          <input 
          id="fecha"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Motivo de la consulta
          </label>
          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe el motivo"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          /> 
        </div>
        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>

    </div>
  )
}

export default Formulario