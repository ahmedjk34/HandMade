import Slider from "@mui/material/Slider";
import { width } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Product } from "../../Types";

function CategoryDropdown({
  title,
  categories,
  setCategories,
}: {
  title: String;
  categories: String[];
  setCategories: React.Dispatch<React.SetStateAction<>>;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const filterClass = `search-filter ${isActive ? "active" : ""}`;

  const categoryFilters = [
    "Art",
    "Jewelry",
    "Kitchen",
    "Kids",
    "Phone Cases",
    "Wedding",
    "Pets",
    "Romantic",
  ];
  function handelClick(filter: String) {
    if (categories.includes(filter)) {
      setCategories((prev) => prev.filter((e) => e != filter));
    } else setCategories((prev) => [...prev, filter]);
  }

  return (
    <>
      <div className={filterClass} onClick={() => setIsActive(!isActive)}>
        {title}
      </div>
      <div className="filters">
        {categoryFilters?.map((filter) => (
          <label>
            <input
              type="checkbox"
              name="filters"
              onClick={(e) => handelClick(filter)}
            />
            {filter}
          </label>
        ))}
      </div>
    </>
  );
}
function PriceDropdown({
  title,
  setPriceFilter,
}: {
  title: String;
  setPriceFilter: React.Dispatch<React.SetStateAction<>>;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const filterClass = `search-filter ${isActive ? "active" : ""}`;
  const [range, setRange] = React.useState([5, 100]);
  useEffect(() => {
    const getData = setTimeout(() => {
      setPriceFilter({
        minPrice: range[0],
        maxPrice: range[1],
      });
    }, 1000);
    return () => {
      clearTimeout(getData);
    };
  }, [range]);

  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <>
      <div className={filterClass} onClick={() => setIsActive(!isActive)}>
        {title}
      </div>
      <div className="filters">
        <div>
          <h3>Price Selector</h3>
          <Slider
            value={range}
            onChange={handleChanges}
            valueLabelDisplay="off"
            className="price-slider"
            step={5}
            min={5}
            max={100}
            sx={{
              width: 140,
              marginLeft: 2,
              color: "darkgray",
            }}
          />
          <h2 className="price">
            {range[0]} $ - {range[1]} $
          </h2>
        </div>
      </div>
    </>
  );
}

function SearchPage({}: Props) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [priceFilter, setPriceFilter] = useState<{
    minPrice: number;
    maxPrice: number;
  }>({
    minPrice: 5,
    maxPrice: 100,
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/search`, {
        params: {
          minPrice: priceFilter?.minPrice,
          maxPrice: priceFilter?.maxPrice,
          categories: categories,
        },
      })
      .then((response) => setProducts(response.data))
      .catch((e) => console.log(e));
  }, [categories, priceFilter]);

  return (
    <div className="search-page">
      <input type="text" name="search" id="search-bar" />
      <div>
        <div className="filter-section">
          <CategoryDropdown
            title="Category"
            categories={categories}
            setCategories={setCategories}
          ></CategoryDropdown>
          <PriceDropdown
            title="Price"
            setPriceFilter={setPriceFilter}
          ></PriceDropdown>
        </div>
        <div className="shop">
          <h1>Shop</h1>
          {products && products.length != 0 ? (
            <div>
              {products?.map((product) => (
                <div className="product">
                  <img src={product.photo} alt={`${product.body}`}></img>
                  <h2>{product.title}</h2>
                  <Rating
                    initialValue={Number(product.rating)}
                    readonly={true}
                    allowFraction={true}
                    fillColor="orange"
                    className="rating"
                    size={25}
                  ></Rating>
                  <h3>{product.price}$</h3>
                </div>
              ))}
            </div>
          ) : (
            <h3>This shop doesn't sell anything currently</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
