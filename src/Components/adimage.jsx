
import Untitled from '../assets/Untitled.png'

const Adimages = () => {
  return (
    <div className='flex justify-center gap-8 p-5 '>
        <div className=' justify-center items-center tracking-wider bg-white px-5 border rounded-xl hidden xl:block'>
            <ul className='grid gap-2'>
                <li>Womens Fashion</li>
                <li>Health & Beauty</li>
                <li>Mens Fashion</li>
                <li>Watches & Accessories</li>
                <li>Electronic Devices</li>
                <li>TV & Home Appliances</li>
                <li>Electronic Accessories</li>
                <li>Groceries & Pets</li>
                <li>Babies & Toys</li>
                <li>Home & Lifestyle</li>
                <li>Sports & Outdoor</li>
                <li>Motors, Tools & DIY</li>
            </ul>
        </div>
        <div >
            <img src={Untitled} alt="" className='border rounded-xl'/>
        </div>
    </div>
  )
}

export default Adimages;


