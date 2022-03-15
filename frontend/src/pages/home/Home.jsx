import { Link } from "react-router-dom"
import ProductItem from "../../components/product/ProductItem"

const LatestItemsList = [
  {
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
    'content': '尺寸還有22.5/23.5/24',
    'src': [
      '/images/products/p1-1.jpeg',
      '/images/products/p1-2.jpeg',
    ],
  },
  {
    'id': '00000002',
    'title': 'NEW BALANCE 5740',
    'price': '3781',
    'content': '奶茶配色 尺寸23-25有半號 實穿更好看✨',
    'tag': [],
    'src': [
      '/images/products/p2-1.jpeg',
      '/images/products/p2-2.jpeg',
      '/images/products/p2-3.jpeg',
    ],
  },
  {
    'id': '00000003',
    'title': 'NEW BALANCE 5740 新平衡 5740 超新平衡 測試用測試用測試用測試用',
    'price': '3781',
    'content': '海鹽配色 尺寸22.5-25',
    'tag': [
      {
        'name': '新配色',
        'bg': 'bg-amber-400',
        'color': 'text-black',
      },
      {
        'name': '現貨供應',
        'bg': 'bg-sky-400',
        'color': 'text-white',
      },
    ],
    'src': [
      '/images/products/p3-1.jpeg',
      '/images/products/p3-2.jpeg',
      '/images/products/p3-3.jpeg',
      '/images/products/p3-4.jpeg',
      '/images/products/p3-5.jpeg',
    ],
  },
  {
    'id': '00000004',
    'title': 'NEW BALANCE 327 白絲綢',
    'price': '3580',
    'content': '終於趕上在今天補貨✨ 尺寸22.5-25.5 數量有限',
    'tag': [],
    'src': [
      '/images/products/p4-1.jpeg',
      '/images/products/p4-2.jpeg',
      '/images/products/p4-3.jpeg',
      '/images/products/p4-4.jpeg',
    ],
  },
  {
    'id': '00000005',
    'title': 'CONVERSE 1970 黑色 低筒',
    'price': '1790',
    'content': '全尺寸22-29有半號 特賣時間 18: 00 - 20: 00 免運日最後一擋特賣不要錯過!!!!!!!!',
    'tag': [
      {
        'name': '下週到貨',
        'bg': 'bg-amber-400',
        'color': 'text-black',
      },
    ],
    'src': [
      '/images/products/p5-1.jpeg',
      '/images/products/p5-2.jpeg',
      '/images/products/p5-3.jpeg',
      '/images/products/p5-4.jpeg',
      '/images/products/p5-5.jpeg',
      '/images/products/p5-6.jpeg',
    ],
  },
  {
    'id': '00000006',
    'title': 'NIKE WAFFLE TRAINER2',
    'price': '2380',
    'content': '黑底白勾 尺寸22-25有半號 版型建議正常',
    'tag': [],
    'src': [
      '/images/products/p6-1.jpeg',
      '/images/products/p6-2.jpeg',
      '/images/products/p6-3.jpeg',
    ],
  },
  {
    'id': '00000007',
    'title': 'WHO A U 羊羔毛/尼龍面 雙面外套',
    'price': '2180',
    'content': '尺寸S~XL 部分尺寸已斷貨',
    'tag': [],
    'src': [
      '/images/products/p7-1.jpeg',
      '/images/products/p7-2.jpeg',
      '/images/products/p7-3.jpeg',
      '/images/products/p7-4.jpeg',
    ],
  },
]
const MensWearList = [
  {
    'id': '00000005',
    'title': 'CONVERSE 1970 黑色 低筒',
    'price': '1790',
    'content': '全尺寸22-29有半號 特賣時間 18: 00 - 20: 00 免運日最後一擋特賣不要錯過!!!!!!!!',
    'tag': [
      {
        'name': '下週到貨',
        'bg': 'bg-amber-400',
        'color': 'text-black',
      },
    ],
    'src': [
      '/images/products/p5-1.jpeg',
      '/images/products/p5-2.jpeg',
      '/images/products/p5-3.jpeg',
      '/images/products/p5-4.jpeg',
      '/images/products/p5-5.jpeg',
      '/images/products/p5-6.jpeg',
    ],
  },
  {
    'id': '00000006',
    'title': 'NIKE WAFFLE TRAINER2',
    'price': '2380',
    'content': '黑底白勾 尺寸22-25有半號 版型建議正常',
    'tag': [],
    'src': [
      '/images/products/p6-1.jpeg',
      '/images/products/p6-2.jpeg',
      '/images/products/p6-3.jpeg',
    ],
  },
  {
    'id': '00000007',
    'title': 'WHO A U 羊羔毛/尼龍面 雙面外套',
    'price': '2180',
    'content': '尺寸S~XL 部分尺寸已斷貨',
    'tag': [],
    'src': [
      '/images/products/p7-1.jpeg',
      '/images/products/p7-2.jpeg',
      '/images/products/p7-3.jpeg',
      '/images/products/p7-4.jpeg',
    ],
  },
  {
    'id': '00000003',
    'title': 'NEW BALANCE 5740 新平衡 5740 超新平衡 測試用測試用測試用測試用',
    'price': '3781',
    'content': '海鹽配色 尺寸22.5-25',
    'tag': [
      {
        'name': '新配色',
        'bg': 'bg-amber-400',
        'color': 'text-black',
      },
      {
        'name': '現貨供應',
        'bg': 'bg-sky-400',
        'color': 'text-white',
      },
    ],
    'src': [
      '/images/products/p3-1.jpeg',
      '/images/products/p3-2.jpeg',
      '/images/products/p3-3.jpeg',
      '/images/products/p3-4.jpeg',
      '/images/products/p3-5.jpeg',
    ],
  },
]

function Home() {
  return (
    <div className="container p-4">
      {/* Home page main image */}
      <div className="h-2/5 lg:h-2/3">
        <img
          className="rounded-md h-full w-full object-cover lg:rounded-lg"
          src="images/home-back-img.webp"
          alt="home-back"
        />
      </div>

      {/* Latest Items */}
      <div className="px-8 mt-8 pt-8 lg:mt-16 lg:pt-16">
        <Link to="/new-arrivals">
          <h1 className="text-center text-3xl font-bold lg:text-5xl">New Arrivals</h1>
        </Link>
        <ul className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-4 lg:gap-8 lg:mt-8">
          {LatestItemsList.map(item => (
            <li key={item.id}>
              < ProductItem
                id={item.id}
                title={item.title}
                price={item.price}
                tag={item.tag}
                src={item.src}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Mens Wear */}
      <div className="px-8 mt-8 pt-8 lg:mt-16 lg:pt-16 border-gray-200 border-t">
        <Link to="/men">
          <h1 className="text-center text-3xl font-bold lg:text-5xl">Mens Wear</h1>
        </Link>
        <ul className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-4 lg:gap-8 lg:mt-8">
          {MensWearList.map(item => (
            <li key={item.id}>
              < ProductItem
                id={item.id}
                title={item.title}
                price={item.price}
                tag={item.tag}
                src={item.src}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Womens Wear */}
      <div className="px-8 mt-8 pt-8 lg:mt-16 lg:pt-16 border-gray-200 border-t">
        <Link to="/women">
          <h1 className="text-center text-3xl font-bold lg:text-5xl">Womens Wear</h1>
        </Link>
        <ul className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-4 lg:gap-8 lg:mt-8">
          {MensWearList.map(item => (
            <li key={item.id}>
              < ProductItem
                id={item.id}
                title={item.title}
                price={item.price}
                tag={item.tag}
                src={item.src}
              />
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Home