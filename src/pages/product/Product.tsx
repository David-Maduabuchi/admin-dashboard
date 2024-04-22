import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"

const Product = () => {

    //fetch data and ssend to Single Component
  return (
    <div className="product">
          <Single {...singleProduct}/>
    </div>
  )
}

export default Product