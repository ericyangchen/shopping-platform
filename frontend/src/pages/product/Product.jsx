import './Product.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from './ImageSlider';


// get Item with id == params.productId
const Item = {
  'id': '00000001',
  'title': 'NIKE COURT BOROUGH 大童款 全白',
  'price': '1928',
  'tag': [
    {
      'name': '預購',
      'bg': 'bg-amber-400',
      'color': 'text-black',
    },
  ],
  'content': '尺寸還有22.5/23.5/24 尺寸還有22.5/23.5/24 尺寸還有22.5/23.5/24 尺寸還有22.5/23.5/24 尺寸還有22.5/23.5/24 尺寸還有22.5/23.5/24',
  'src': [
    '/images/products/p1-1.jpeg',
    '/images/products/p1-2.jpeg',
    '/images/products/p2-1.jpeg',
    '/images/products/p2-2.jpeg',
    '/images/products/p2-3.jpeg',
  ],
  'size': {
    'X-SMALL': true,
    'SMALL': true,
    'MEDIUM': true,
    'LARGE': false,
    'X-LARGE': true,
  },
};


function Product() {
  // parmas to get the product id (params.productId) then fetch the product info
  const params = useParams();

  // selected size
  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeButtonClick = (key) => {
    if (selectedSize === key) {
      setSelectedSize("");
    } else {
      setSelectedSize(key);
    }
  }

  // Add to cart (Context API)
  const handleAddToCart = () => {
    console.log("Add to cart", selectedSize);
  }

  return (
    <div className="container p-4 mb-20">
      {/* Image section */}
      <ImageSlider Item={Item} />

      {/* Title, Price, Size, Add To Cart section */}
      <div className="w-full flex flex-col justify-center items-center gap-2 mt-8">
        {/* Title */}
        <h1 className="text-xl font-bold text-center">{Item.title}</h1>

        {/* Price */}
        <h2 className="text-xl font-semibold text-red-600">${Item.price}</h2>

        {/* Size button (Using custom css class in Product.css) */}
        <div className="w-full my-16 grid grid-cols-4"
        >
          {Object.entries(Item.size).map(([key, value]) => (
            <button className={"py-2 mb-2 border border-r-0 border-gray-300 text-sm lg:hover:bg-gray-100 "
              + (value ? "text-black " : "text-gray-300 ")
              + (selectedSize === key ? "custom-css-size-button-selected font-bold " : "custom-css-size-button ")}
              key={key}
              disabled={!value}
              onClick={() => handleSizeButtonClick(key)}
            >
              {key}
            </button>
          )
          )}
        </div>

        {/* Add to cart (fixed at bottom on mobile) */}
        <div className="w-full px-4 p-4 fixed bottom-0 bg-white">
          <button className={"w-full h-14 p-4 rounded-xl text-center font-extrabold bg-gray-800 text-white "
            + ((selectedSize === "") && "opacity-30 ")
          }
            disabled={selectedSize === ""}
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Description section */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Description</h2>
          <p>{Item.content}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">注意事項</h2>
          <p>下單前請詳讀,下單後視同同意,請接受再下單》
            ⚠️訊息一定會回覆,狀態顯示'' 在線上''可能正在出貨或是回覆訊息還沒有看到
            《蝦皮會漏訊》超過一天沒有回覆再私訊我們,感謝您的包容與耐心
            《現貨》備註現貨商品3天內出貨(宅配為7天內出貨)
            《代購》代購時間10-30不含假日(系統時間為最晚出貨日)
            下訂單後不保證100%有貨但會盡力調貨
            ⚠️商品可能遇“庫存超賣”,”延誤”,”缺貨”會於聊聊內通知取消訂單
            不接急單若無法等待或無法接受以上狀況請勿下單
            《尺寸問題》：我們只能建議給您,每個人腳型,舒適感不同請自行斟酌。
            《退換貨》： 除重大瑕疵以外可接受尺寸不合更換尺寸,於收到商品後“三天”內提出
            【商品包含鞋盒需保持全新完整不影響販售才可退換】</p>
        </div>
      </div>
    </div >
  )
}

export default Product