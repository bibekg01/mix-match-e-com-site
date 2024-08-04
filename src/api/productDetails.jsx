import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const [product, setproduct] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response =>response.json())
            .then(data => setproduct(data))
            .catch(error => console.error('Error Fetching Data', error))
    },[id])

    return(
        <>
        <div>
            <div>
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetails;