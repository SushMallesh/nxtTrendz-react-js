import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <img
          className="products-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
          alt="products"
        />
      </div>
    </>
  )
}
export default Products
