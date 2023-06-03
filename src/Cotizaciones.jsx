import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select'
import { grupo,prods,anios } from "./opciones";
function Cotizaciones() {
    const [moto, setMoto] = useState();
    const [prod, setProd] = useState();
    const [anio, setAnio] = useState();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  function onSubmit(data)
 {
  alert("Muchas gracias por su preferencia. Nos pondremos en contacto con usted");
  const axios = require('axios');
  let data2 = {
    moto:moto,
    prod:prod,
    anio:anio,
    color:data.color,
    nombre:data.nombre,
    telefono:data.telefono,    
  };
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://magenta-gelato-edb500.netlify.app/.netlify/functions/serverlessHttp/mailer',
    headers: { },
    data : data2
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  

 } 


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="row d-flex justify-content-center">
    
      <div class="col-lg-3">
      <h2>Cotizaciones Bici-Vic</h2>
      </div>
    
    </div>
  
    <hr class="my-5" />
    <h4>Selecciona un producto:</h4>
    <Select
      options={prods}
      onChange={e => setProd(e.value)}
      placeholder="Selecciona un producto"
      name="producto" />
    <h4>Selecciona una moto:</h4>
    <Select
      options={grupo}
      onChange={e => setMoto(e.label)}
      placeholder="Selecciona una moto"
      name="moto"></Select>
      <h4>Selecciona el año:</h4>
      <Select
        options={anios}
        onChange={e => setAnio(e.value)}
        placeholder="Selecciona el año"
        name="anio"></Select>

    <div class="form-outline mb-4">
    <input type="text" id="form1Example3" class="form-control" {...register("color",{required:true})}/>
    <label class="form-label" for="form1Example3"> Ingresa el color de tu  moto </label>
  </div>



    <div class="form-outline mb-4">
    <input type="text" id="form1Example1" class="form-control" {...register("nombre",{required:true})}/>
    <label class="form-label" for="form1Example1"> Ingresa tu Nombre</label>
    </div>

  
  <div class="form-outline mb-4">
  <input type="text" id="form1Example2" class="form-control" {...register("telefono",{required:true})}/>
  <label class="form-label" for="form1Example2">  Ingresa tu Telefono</label>
</div>

      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit" class="btn btn-primary btn-block">Solicitar cotizacion</button>

    </form>
    
  )
}

export default Cotizaciones

