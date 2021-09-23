import {useState,useEffect} from 'react';
import axios from "axios";
import useUpdateEffect from '../hooks/useUpdateEffect';
import { useStickyState } from '../hooks/useStickyState';
import Loader from './Loader';
import Buscador from './Buscador';
import Error from "./Error";
import Titulo from './Titulo';
import Detalle from "./Detalle"
import Listado from './Listado';
import {Container} from 'react-bootstrap';
import Historial from './Historial';


const LOCAL_STORAGE_KEY = "pelis.historial";
function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState({nombre: '', year:'', tipo:''})
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [detalle, setDetalle] = useState({});
  const [historial, SetHistorial] = useStickyState([],LOCAL_STORAGE_KEY);
  const [showHistorial, setShowHistorial] = useState(false)
  const [url, setUrl] = useState('');

  useUpdateEffect(()=>{
    const nuevoItem = detalle;
    if(historial.find(item => item.imdbID === nuevoItem.imdbID)) return;
    SetHistorial([...historial,nuevoItem]);
  },[detalle])

  useEffect(() => {
    if(showHistorial) setShowHistorial(false);
  }, [showModal,peliculas])


  useEffect(() => {
    setUrl(`http://www.omdbapi.com/?apikey=96b556cb&s=${busqueda.nombre}&y=${busqueda.year}&type=${busqueda.tipo}`)
  }, [busqueda])


  const handleSubmit =  async () =>{    
      if(!busqueda){
        setErrorMsg('no ingresaste ninguna pelicula');
        setError(true);
        return
      }

      setError(false);
      setLoading(true);

      setTimeout(async() =>{
        try {
          const response = await axios.get(url);
          const data = response.data;
          console.log(response)
          if(data.Error){
            setError(true);
            setErrorMsg('Lo sentimos hubo un error')
            setLoading(false);
          }
          else{
            setPeliculas(data.Search);
            SetHistorial([...historial, {Title:busqueda.nombre, data: data.Search}])
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
          setError(true);
          setErrorMsg(error);
        }
      },1500)
  }


  const handleChangeDetalle = detalle =>{
    setDetalle(detalle);
    setShowModal(true);
   }

   const handleChangePelis = pelis =>{
    setPeliculas(pelis);
    setShowHistorial(false)
   }

  const handleChange = value =>{
    setBusqueda({...busqueda, ...value});
  }
  
  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleCloseHistorial = () => {
    setShowHistorial(false);
  }
   const mostrarHistorial = () => {
     setShowHistorial(true)
   }
   const borrarHistorial = () => {
     SetHistorial([]);
     setShowHistorial(false);
   }

   const borrarItemHistorial = (id) => {
     console.log(id);
    SetHistorial(historial.filter(item => item.imdbID !==id));
  }
      
  

  const obtenerDetallePelicula = async (id) =>{
      setError(false);
      setLoading(true);
      setTimeout(async() =>{
        try {
          const url= `http://www.omdbapi.com/?apikey=96b556cb&i=${id}`;
          const response = await axios.get(url);
          const data = response.data;
          console.log(response)
          if(data.Error){
            setError(true);
            setErrorMsg("Lo sentimos hubo un error");
            }
            else{
              setDetalle(data);
              setLoading(false);
              setShowModal(true);
            }
        } catch (error) {
          setLoading(false);
          setError(true);
          setErrorMsg(error);
        }
      },1500);
  }
  return (
    <>
      <Historial show={showHistorial} historial={historial} verDetalle={handleChangeDetalle} borrarHistorial={borrarHistorial} verPelis={handleChangePelis} borrarItem={borrarItemHistorial} handleClose={handleCloseHistorial} /> 
    <Detalle show={showModal} datos={detalle} handleClose={handleCloseModal}/>
    <Container className="center">
    <div className="w-100" style={{ maxWidth: "1200px" }}>
        <Titulo titulo="Buscador de peliculas"/>
      {error ? (<Error msg={errorMsg}/>): null}
      <Buscador search={handleChange} submit={handleSubmit} mostrarHistorial={mostrarHistorial}></Buscador>
      {loading ? (
          <Loader/>
        ) : null}
      {!loading && peliculas ? (
            <Listado peliculas={peliculas} obtenerDetalle={obtenerDetallePelicula}></Listado>
            ): null}
            </div>
    </Container>
    </>
  );
}

export default App;
