import { Link } from "react-router-dom";
import './Product.css'
function Product (props){
    const {product,showButton,showDescription} = props;
    
    return(
        <>
        <div className="main-body">
        <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {showDescription && <p className="card-text">{product.description}</p>}
        <p>price: {product.price}$</p>
        {showButton && <Link className="btn btn-primary" to={`product/${product.id}`}>Details</Link>}
        </div>
        </div>
        </div>
        </>
    );
}

export default Product;