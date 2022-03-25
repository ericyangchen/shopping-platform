import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from "../../components/product/ProductItem";
import CircularProgress from '@mui/material/CircularProgress';

import { getFirstBatch, getNextBatch } from '../../services/Product';
import CategoryNames from '../../constants/CategoryNames';

function Category() {
  const { category } = useParams();

  const [productList, setProductList] = useState([]);
  const [lastVisible, setLastVisible] = useState("");
  // control infinite scroll
  const [loading, setLoading] = useState(false);
  const [endOfProduct, setEndOfProduct] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  // change to new category
  useEffect(() => {
    console.log("get first batch")
    setLoading(false);
    setEndOfProduct(false);
    setPageNumber(1);

    // firestore fetch data
    getFirstBatch(category, 8, "createdAt", "desc")
      .then((res) => {
        if (res.products.length === 0) {
          setEndOfProduct(true);
        }
        setProductList(res.products);
        setLastVisible(res.lastVisible);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [category]);


  // fetch first batch
  useEffect(() => {
    setLoading(true);
    setEndOfProduct(false);

    console.log("c p")
    if (pageNumber === 1) {
      console.log("0")

      getFirstBatch(category, 8, "createdAt", "desc")
        .then((res) => {
          if (res.products.length === 0) {
            setEndOfProduct(true);
          }
          setProductList(res.products);
          setLastVisible(res.lastVisible);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else {
      console.log("1")
      getNextBatch(category, 8, "createdAt", "desc", lastVisible)
        .then((res) => {
          if (res.products.length === 0) {
            setEndOfProduct(true);
          }
          setProductList(prevProductList => ([...prevProductList, ...res.products]));
          setLastVisible(res.lastVisible);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [category, pageNumber]);

  // observe scroll to bottom
  const observer = useRef();
  const lastProductRef = useCallback(node => {
    // do nothing if is current loading
    if (loading) return
    // bottom element is visible
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !endOfProduct) {
        setPageNumber(prevPageNumber => (prevPageNumber + 1));
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, endOfProduct]);

  return (
    <div className="wrapper container p-4">
      {/* Title & Count */}
      <div className="flex flex-col justify-center items-center gap-1">
        {/* Title */}
        <span className="w-full text-xl font-bold text-center">{CategoryNames[category]}</span>
        {/* Count */}
        <span className="w-full text-xs font-base text-right">{productList.length} products found</span>
      </div>

      {/* CategoryResult List */}
      <div className="">
        <ul className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-4 lg:gap-8 lg:mt-8">
          {productList?.map((item, index) => {
            // if last element, add a ref to it (for infinite scroll)
            if (index === productList.length - 1) {
              return (
                <li ref={lastProductRef}
                  key={item.id}
                >
                  < ProductItem
                    id={item.id}
                    sku={item.sku}
                    brand={item.brand}
                    title={item.title}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    description={item.description}
                    tag={item.tag}
                    size={item.size}
                    src={'/images/products/p2-1.jpeg'}
                  />
                </li>
              )
            } else {
              return (
                <li key={item.id}>
                  < ProductItem
                    id={item.id}
                    sku={item.sku}
                    brand={item.brand}
                    title={item.title}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    description={item.description}
                    tag={item.tag}
                    size={item.size}
                    src={'/images/products/p2-1.jpeg'}
                  />
                </li>
              )
            }
          })}
        </ul>
      </div>

      {/* load more */}
      <div className="text-center" hidden={!loading}>
        <CircularProgress color="inherit" />
      </div>
    </div>
  )
}

export default Category