export default (products, id) => {
  if (!Array.isArray(products)) {
    return [];
  }
  return products.map(product => {
    if (id === product.id) {
      return { ...product, isFavorite: !product.isFavorite };
    }
    return product;
  });
};
