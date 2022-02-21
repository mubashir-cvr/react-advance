import React from 'react';
import PropTypes  from 'prop-types';
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({image,name,price}) => {
  const url =image && image.url
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || 'Default Name'} />
      <h4>{name || 'Default Image'}</h4>
      <p>$ {price || 0}</p>
    </article>
  );
};

Product.propTypes={
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}
// Product.defaultProps= {
//   name: "Default Name",
//   price: 0,
//   image: defaultImage,
// };
export default Product;
