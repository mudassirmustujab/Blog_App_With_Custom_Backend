import { useForm } from "react-hook-form"
import Input from "./Input"


export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (

    <>
   <form 
  onSubmit={handleSubmit(onSubmit)} 
  className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
>
  {/* Example input */}
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-700">Example</label>
    <input 
      defaultValue="test" 
      {...register("example")} 
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Another example using Input component */}
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-700">Example Input Component</label>
    <Input 
      {...register("example")} 
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Required input with error message */}
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-700">Required Field</label>
    <input 
      {...register("exampleRequired", { required: true })} 
      className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
        errors.exampleRequired ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
      }`}
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