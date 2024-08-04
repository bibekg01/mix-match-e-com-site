import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'
import { addToCart, addToCartCount } from "../services/cartSlice";
import {useDispatch} from 'react-redux'


const CardComponent = ({id, title, image, description, price, rating, count}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
    <div>
        <div>
        <div
            key={''}
            className=" shadow-xl hover:shadow-2xl rounded-lg overflow-hidden h-[600px] bg-slate-50"
          >
            <div className='grid justify-center'>
              <img
                src={image}
                alt={title}
                className="h-[300px] w-[200px]  p-2"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <p className="text-lg font-bold">${price}</p>
              <p>Rating : {rating}  ({count} reviews)</p>
            </div>
            <div className='flex justify-evenly'>
              <button className='border p-2 px-3 bg-[#064789] rounded-br-3xl rounded-tl-3xl text-white font-bold'
                      onClick={() => {
                        dispatch(addToCart({id,title, price, image }));
                        dispatch(addToCartCount())
                      }}
              >
                Add To Cart
              </button>
              <button onClick={()=>navigate(`/products/${id}`)} className='border p-2 px-3 bg-[#f50b12] rounded-br-3xl rounded-tl-3xl text-white font-bold'>
                View Details
              </button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

CardComponent.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.number,
  count: PropTypes.number,
  description: PropTypes.string,
}

export default CardComponent