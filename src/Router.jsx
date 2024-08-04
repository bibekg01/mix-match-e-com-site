import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductPages from './api/products'
// import Counter from './counter'
import ProductDetails from './api/productDetails'

const RouterComponent = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<ProductPages/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
        </Routes>
    </Router>
  )
}

export default RouterComponent