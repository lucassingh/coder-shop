import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({id, titulo, precio, categoria, type='grid'}) => {
    return (
        <article className={`productCard ${type}`}>
            <img src="http://placehold.it/200x200" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>

                <div className="cont-button">
                    <Link to={`/${categoria}/${id}`}>Ver detalle</Link>
                </div>
            </div>
        </article>
    )
}

export default ProductCard;