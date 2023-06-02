import React from 'react'
import { useForm } from "react-hook-form";
import Select from 'react-select'
import { grupo,prods,anios } from "./opciones";
function Hello() {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="row d-flex justify-content-center">
    
      <div class="col-lg-3">
      <h2>Cotizaciones Bici-Vic</h2>
      </div>
    
    </div>
  
    <hr />
    <h4>Selecciona un producto:</h4>
    <Select
      options={prods}
      onChange={data => console.log(data)}
      placeholder="Selecciona un producto"
      name="producto" />
    <h4>Selecciona una moto:</h4>
    <Select
      options={grupo}
      onChange={data => console.log(data)}
      placeholder="Selecciona una moto"
      name="moto"></Select>
      <h4>Selecciona el año:</h4>
      <Select
        options={anios}
        onChange={data => console.log(data)}
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

export default Hello

