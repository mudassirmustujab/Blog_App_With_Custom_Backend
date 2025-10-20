import { useForm } from "react-hook-form"
import Input from './Input'


export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  
  
  const onSubmit = async (data) =>{
    console.log(data)
try {
  
 await fetch('http://localhost:8000/user/register',{
    method:'POST',
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(data)
  })

} catch (error) {q
  return error.message
}


  }

  console.log("testing",watch("example")) // watch input value by passing the name of it
  

  return (

    <>
    <h1 className="text-center text-5xl font-bold py-10">Register Form</h1>

   <form 
  onSubmit={handleSubmit(onSubmit)} 
  className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
>
  {/* Example input */}
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-900">Username</label>
    <Input 
     register={register}
      registerValue={'username'} 
       errors={errors}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black-500"
    />
  </div>

  {/* Another example using Input component */}
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-700">Email</label>
    <Input 
      register={register}
      registerValue={'email'}
      errors={errors}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>


  {/* Required input with error message */}
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-700">Password</label>
    <Input 
      register={register}
      registerValue={'password'}
      errors={errors}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    {errors.exampleRequired && (
      <span className="text-red-500 text-sm mt-1">This field is required</span>
    )}
  </div>

  {/* Submit button */}
  <button 
    type="submit" 
    className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition"
  >
    Submit
  </button>
</form>

    </>
  )
}