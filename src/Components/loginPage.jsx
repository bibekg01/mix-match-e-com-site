// import { useForm } from 'react-hook-form'


// const LoginPage = (onClick) => {
//     const { register, handleSubmit } = useForm();

//     const LoginData = async (data) => {
//         console.log(data);
//     }
//     return(
//         <>
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-slate-200 p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4 text-center">Create New Product</h2>
//                 <form action="" onSubmit={handleSubmit(LoginData)} className='grid grid-cols-1 gap-4' >
//                     <input 
//                     type="text"
//                     name='FullName'
//                     placeholder='Full Name'
//                     className="border rounded p-2"
//                     {...register('FullName', {required : true})}
//                     />
//                     <input 
//                     type="text"
//                     name=''
//                     placeholder='Description'
//                     className="border rounded p-2"
//                     {...register('description', {required : true})}
//                     />
//                     <input 
//                     type="number"
//                     name='price'
//                     placeholder='Price'
//                     className="border rounded p-2"
//                     {...register('price', {required : true})}
//                     />
//                     <input 
//                     type="text"
//                     name='category'
//                     placeholder='Category'
//                     className="border rounded p-2"
//                     {...register('title', {required : true})}
//                     />
//                     <input 
//                     type="file"
//                     accept='image/*'
//                     name='image'
//                     placeholder='ImageURL'
//                     className="border rounded p-2"
//                     {...register('image', {required : true})}
//                     />

//                 <div className="flex justify-evenly">
//                     <button 
//                     type="reset"
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
//                     onClick={onClick}
//                     >
//                     Cancel
//                     </button>
//                     <button 
//                     type="submit"
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                     onClick={handleSubmit(createProduct)}
//                     >
//                     Create Product
//                     </button>
//                 </div>
//                 </form>
//             </div>
//         </div>
//         </>
//     )
// }



// export default LoginPage;