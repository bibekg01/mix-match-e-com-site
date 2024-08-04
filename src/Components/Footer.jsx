import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <>
      <div className="flex justify-evenly p-5 bg-[#064789] text-white text-sm sm:text-xl">
          <div>
            <h1 className=" pb-1 font-bold border-b-4 border-b-red-800 mb-2">Company</h1>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
                <li>Affiliate Program</li>
              </ul>
          </div>
          <div>
                <div>
                    <h1 className=" pb-1 font-bold border-b-4 border-b-red-800 mb-2">Get Help</h1>
                </div>
              <ul>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Order Status</li>
                <li>Payment Options</li>
              </ul>
          </div>
          <div>
                <h1 className=" pb-1 font-bold border-b-4 border-b-red-800 mb-2">Online Shop</h1>
              <ul>
                <li>Watch</li>
                <li>Bag</li>
                <li>Shoes</li>
                <li>Dress</li>
              </ul>
          </div>
          <div>
                <h1 className=" pb-1 font-bold border-b-4 border-b-red-800 mb-2">Follow us</h1>
              <ul className="flex gap-2 text-2xl mt-4">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaXTwitter /></li>
                <li><FaLinkedin /></li>
              </ul>

          </div>
      </div>
      </>
    )
  }
  
  export default Footer;