import {useState} from 'react';
import axios from "axios";
import Buscador from './Buscador';
import Error from "./Error";
import Titulo from './Titulo';
import Detalle from "./Detalle"
import Listado from './Listado';
import { Spinner} from 'react-bootstrap';

const spinnerStyle = {
  width: '10rem',
  height: '10rem',
  borderWidth: '1rem',
};

const spinnerWrapperStyle = {
  textAlign: 'center',
  marginTop: '50px',
}

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("")
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [detalle, setDetalle] = useState({});



  const handleSubmit =  async (e) =>{
    e.preventDefault();
    e.target.clear();
    
      if(!busqueda){
        setErrorMsg('no ingresaste ninguna pelicula');
        setError(true);
        return
      }

      setError(false);
      setLoading(true);

      setTimeout(async() =>{
        try {
          const url= `http://www.omdbapi.com/?apikey=96b556cb&s=${busqueda}`;
          const response = await axios.get(url);
          console.log(response)
          setPeliculas(response.Search);
        } catch (error) {
          setLoading(false);
          setError(true);
          setErrorMsg(error);
        }
      },1500)
     
  }



  const handleChange = e =>{
    setBusqueda(e.target.value);
  }
  
  const handleCloseModal = () => {
    setShowModal(false);
  }
  

  const obtenerDetallePelicula = async id =>{
    if(!busqueda){
      setErrorMsg('no ingresaste ninguna pelicula');
      setError(true);
      return
      }
      setTimeout(async() =>{
        try {
          const url= `http://www.omdbapi.com/?apikey=96b556cb&i=${id}`;
          const response = await axios.get(url);
          setDetalle(response);
          setShowModal(true);
        } catch (error) {
          setLoading(false);
          setError(true);
          setErrorMsg(error);
        }
      },1500)
    
    
   

    setError(false);
    setLoading(true);

  }
  return (
    <>
    <Detalle show={showModal} datos={detalle} handleClose={handleCloseModal}/>
    <Titulo titulo="Buscador de peliculas"/>
    {error ? (<Error msg={errorMsg}/>): null}
    <Buscador handleSearch={handleChange} submit={handleSubmit}></Buscador>
    {loading ? (
        <div style={spinnerWrapperStyle}>
          <Spinner style={spinnerStyle} animation="border" />
        </div>
      ) : null}
    {!loading && peliculas ? (
          <Listado peliculas={peliculas} obtenerDetalle={obtenerDetallePelicula}></Listado>
          ): null}
    </>
  );
}

export default App;
