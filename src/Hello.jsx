import React from 'react'
import { useForm } from "react-hook-form";
import Select from 'react-select'
function Hello() {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const opciones = [{
    label: 'Seleccione una opción',
    value: ''
  },
  {
    label: 'ft125',
    value: 'ft125'
  }
]

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
    <Select options={opciones} />
  <div class="form-outline mb-4">
    <input type="text" id="form1Example1" class="form-control" {...register("nombre",{required:true})}/>
    <label class="form-label" for="form1Example1">Nombre</label>
  </div>

  <div class="form-outline mb-4">
  <input type="text" id="form1Example2" class="form-control" {...register("telefono",{required:true})}/>
  <label class="form-label" for="form1Example2">Telefono</label>
</div>

      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit" class="btn btn-primary btn-block">Solicitar cotizacion</button>

    </form>
    
  )
}

export default Hello

