import toggleFavoriteById from "./toggleFavoriteById";

describe("toggleFavoriteById works as expected", () => {
  it("toggles product favorite value when product found by id", () => {
    const products = [
      { id: 1, isFavorite: true },
      { id: 2, isFavorite: false },
    ];
    expect(toggleFavoriteById(products, 1)).toEqual([
      { id: 1, isFavorite: false },
      { id: 2, isFavorite: false },
    ]);
    expect(toggleFavoriteById(products, 2)).toEqual([
      { id: 1, isFavorite: true },
      { id: 2, isFavorite: true },
    ]);
  });

  it("returns empty array when given empty array as parameter", () => {
    expect(toggleFavoriteById([], 3245)).toEqual([]);
  });

  it("keeps products unchanged when product id is not found", () => {
    const products = [
      { id: 1, isFavorite: true },
      { id: 2, isFavorite: false },
    ];
    expect(toggleFavoriteById(products, 3)).toEqual(products);
  });

  it("keeps products unchanged when product id is invalid", () => {
    const products = [
      { id: 1, isFavorite: true },
      { id: 2, isFavorite: false },
    ];
    expect(toggleFavoriteById(products)).toEqual(products);
    expect(toggleFavoriteById(products, null)).toEqual(products);
    expect(toggleFavoriteById(products, [])).toEqual(products);
    expect(toggleFavoriteById(products, {})).toEqual(products);
  });

  it("returns empty array when suplied with invalid products", () => {
    expect(toggleFavoriteById(null, 2)).toEqual([]);
    expect(toggleFavoriteById(undefined, 2)).toEqual([]);
    expect(toggleFavoriteById(1234, 2)).toEqual([]);
    expect(toggleFavoriteById("RANDOM", 2)).toEqual([]);
    expect(toggleFavoriteById({}, 2)).toEqual([]);
    expect(toggleFavoriteById(() => {}, 2)).toEqual([]);
  });
});
