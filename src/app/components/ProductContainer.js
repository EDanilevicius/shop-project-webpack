import PropTypes from "prop-types";
import styled from "styled-components";

const ProductContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

ProductContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};

export default ProductContainer;
