import  { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CiStar } from "react-icons/ci";
import { useGetProductsQuery,usePostProductsMutation } from '../services/productApi';

const ProductCard = () => {

  const {
    data :productsApi,
    isLoading : LoadingProducts,
    error,
    refetch,
  } = useGetProductsQuery();

  const [postProducts,{
    isLoading : postProductsLoading,
    error : postProductsError,
  }] = usePostProductsMutation();

  const { register, handleSubmit, reset,  } = useForm();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  const loadMore = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts([...products, ...data]));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const viewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setFormVisible(false);
  };


  const createProduct = async(data) => {
    try {
      await postProducts(data);
      refetch();
      toggleFormVisibility();
      reset();
    } catch (error) {
      console.log(error);
    }
    
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  
  if(LoadingProducts) return <div>Loading...</div>

  if(error) return <div>Error</div>



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productsApi.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
            {product.rating && (
              <div className="text-sm text-gray-500">
                <p>Rating:</p>
                <div className="flex items-center">
                  {Array.from({ length: Math.floor(product.rating.rate) }, (_, i) => (
                    <CiStar key={i} className="text-yellow-500" />
                  ))}
                  <span className="ml-2">({product.rating.count})</span>
                </div>
              </div>
            )}
            <button 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => viewDetails(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>

      <div className="mt-8 text-center">
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleFormVisibility}
        >
          Create New Product
        </button>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
            <form onSubmit={handleSubmit(createProduct)} className="grid grid-cols-1 gap-4">
              <input 
                type="text" 
                name="title" 
                placeholder="Title" 
                className="border rounded p-2"
                {...register('title', { required: true })}
              />
              <input 
                type="text" 
                name="description" 
                placeholder="Description" 
                className="border rounded p-2"
                {...register('description', { required: true })}
              />
              <input 
                type="number" 
                name="price" 
                placeholder="Price" 
                className="border rounded p-2"
                {...register('price', { required: true })}
              />
              <input 
                type="text" 
                name="category" 
                placeholder="Category" 
                className="border rounded p-2"
                {...register('category', { required: true })}
              />
              <input 
                type="text" 
                name="image" 
                placeholder="Image URL" 
                className="border rounded p-2"
                {...register('image', { required: true })}

              />

              
              <div className="flex justify-end">
                <button 
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-bold mb-4">${selectedProduct.price}</p>
            <button 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;