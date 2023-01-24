import React,{useState} from "react";
import MostrarPestaña from "./MostrarPestaña";
import Pestañas from "./Pestañas";

const Ventana = ()=>{
   const [mostrar, setMostrar] = useState('');
   const matrix=['contenido 1','contenido 2','contenido 3','contenido 4'];
   return (<div className="container">
         <Pestañas matrix={matrix} setMostrar={setMostrar}/>
         <MostrarPestaña mostrar={mostrar}/>
   </div>) 
}

export default Ventana