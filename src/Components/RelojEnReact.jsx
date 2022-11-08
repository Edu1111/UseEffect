import React, {useState,useEffect} from "react";

function Rejol ({Hora}){
    return(
        <h1>La hora en tiempo real es: {Hora}</h1>
    )
}

function RelojEnReact(){
    const [Hora,setHora] = useState(new Date().toLocaleTimeString());
    const [Mirar,setMirar] = useState(false);


useEffect(()=>{
    var Contador;
    Mirar ? (Contador = setInterval(()=>{
        setHora (new Date ().toLocaleTimeString())
    },1000))
    :clearInterval(Contador)
    
    return()=>{
        clearInterval(Contador)
    }
},[Mirar])

return(
    <>
    <h3>Consulta la Hora con el Reloj de React</h3>
    {Mirar && <Rejol Hora={Hora}/>}
    <button onClick={()=> setMirar(true)}>Consultar</button>
    <button onClick={()=> setMirar(false)}>Cancelar</button>
    
    
    
    </>
)}




export default RelojEnReact;