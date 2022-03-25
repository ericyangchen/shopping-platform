import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ProductItem from "../../components/product/ProductItem"
import CategoryNames from "../../constants/CategoryNames";

import { getFirstBatch } from '../../services/Product';

function Home() {
  const [latestItems, setLatestItems] = useState([]);
  const [mensWear, setMensWear] = useState([]);
  const [WomensWear, setWomensWear] = useState([]);

  // firestore
  useEffect(() => {
    // latest items
    getFirstBatch("new-arrivals", 8, "createdAt", "desc")
      .then((res) => {
        setLatestItems(res.products);
      })
      .catch((error) => {
        console.log(error);
      })

    // men
    getFirstBatch("men", 8, "createdAt", "desc")
      .then((res) => {
        setMensWear(res.products);
      })
      .catch((error) => {
        console.log(error);
      })

    // women
    getFirstBatch("women", 8, "createdAt", "desc")
      .then((res) => {
        setWomensWear(res.products);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div className="wrapper container p-4">
      {/* Home page main image */}
      <div className="w-full max-h-64 md:max-h-128 overflow-hidden">
        <img
          className=" w-full object-cover "
          src="images/home-back-img.webp"
          alt="home-back"
        />
      </div>

      {/* Latest Items */}
      <div className="py-8">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">{CategoryNames['new-arrivals']}</h1>
          <div className="px-2">
            <Link to="/category/new-arrivals">
              <span className="text-sm text-gray-500">View more</span>
            </Link>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-5">
          {latestItems?.map(item => (
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
          ))}
        </ul>
      </div>

      {/* Mens Wear */}
      <div className="py-8 border-gray-200 border-t">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">{CategoryNames['men']}</h1>
          <div className="px-2">
            <Link to="/category/men">
              <span className="text-sm text-gray-500">View more</span>
            </Link>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-5">
          {mensWear?.map(item => (
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
          ))}
        </ul>
      </div>

      {/* Womens Wear */}
      <div className="py-8 border-gray-200 border-t">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">{CategoryNames['women']}</h1>
          <div className="px-2">
            <Link to="/category/women">
              <span className="text-sm text-gray-500">View more</span>
            </Link>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-5">
          {WomensWear?.map(item => (
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
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home