import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
 import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../ProductCard';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';



const product = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/2/1.jpg",
            "https://cdn.dummyjson.com/product-images/2/2.jpg",
            "https://cdn.dummyjson.com/product-images/2/3.jpg",
            "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/4/1.jpg",
            "https://cdn.dummyjson.com/product-images/4/2.jpg",
            "https://cdn.dummyjson.com/product-images/4/3.jpg",
            "https://cdn.dummyjson.com/product-images/4/4.jpg",
            "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/5/1.jpg",
            "https://cdn.dummyjson.com/product-images/5/2.jpg",
            "https://cdn.dummyjson.com/product-images/5/3.jpg"
        ]
    },
    {
        "id": 6,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": 83,
        "brand": "Apple",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
        "images": [
            "https://cdn.dummyjson.com/product-images/6/1.png",
            "https://cdn.dummyjson.com/product-images/6/2.jpg",
            "https://cdn.dummyjson.com/product-images/6/3.png",
            "https://cdn.dummyjson.com/product-images/6/4.jpg"
        ]
    },
    {
        "id": 7,
        "title": "Samsung Galaxy Book",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1499,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "stock": 50,
        "brand": "Samsung",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/7/1.jpg",
            "https://cdn.dummyjson.com/product-images/7/2.jpg",
            "https://cdn.dummyjson.com/product-images/7/3.jpg",
            "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
        ]
    },
    {
        "id": 8,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/8/1.jpg",
            "https://cdn.dummyjson.com/product-images/8/2.jpg",
            "https://cdn.dummyjson.com/product-images/8/3.jpg",
            "https://cdn.dummyjson.com/product-images/8/4.jpg",
            "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
        ]
    },
    {
        "id": 9,
        "title": "Infinix INBOOK",
        "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        "price": 1099,
        "discountPercentage": 11.83,
        "rating": 4.54,
        "stock": 96,
        "brand": "Infinix",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/9/1.jpg",
            "https://cdn.dummyjson.com/product-images/9/2.png",
            "https://cdn.dummyjson.com/product-images/9/3.png",
            "https://cdn.dummyjson.com/product-images/9/4.jpg",
            "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
        ]
    },
    {
        "id": 10,
        "title": "HP Pavilion 15-DK1056WM",
        "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        "price": 1099,
        "discountPercentage": 6.18,
        "rating": 4.43,
        "stock": 89,
        "brand": "HP Pavilion",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
        "images": [
            "https://cdn.dummyjson.com/product-images/10/1.jpg",
            "https://cdn.dummyjson.com/product-images/10/2.jpg",
            "https://cdn.dummyjson.com/product-images/10/3.jpg",
            "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
        ]
    }
]


const ProductSlider = () => {
   const sliderRef = useRef<Slider>(null);

   interface ArrowProps {
    onClick: () => void;
  }
  
  interface Product {
    name: string;
    // Other properties of the product
  }

  const [screenSize, setScreenSize] = useState({
    width: undefined || 1035,     
  });


  const PrevArrow: FunctionComponent<ArrowProps> = ({ onClick }) => (
    <div
      className="absolute left-0 z-10"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <FaArrowAltCircleLeft style={{ color: "#E58F28", fontSize: 45 }} />
    </div>
  );
  
  const NextArrow: FunctionComponent<ArrowProps> = ({ onClick }) => (
    <div
      className="absolute right-0 z-10"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <FaArrowAltCircleRight style={{ color: "#E58F28", fontSize: 45 }} />
    </div>
  );
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    arrows: true,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window?.innerWidth,
         
      });
    };

    window?.addEventListener('resize', handleResize);

     return () => {
      window?.removeEventListener('resize', handleResize);
    }
  }, []);

  const router = useRouter();

  return (
      <div className='grid grid-cols-12' >     
        <div className='col-span-12 sm:col-span-12 md:col-span-12' >
            <div className='mt-10'>
              <Slider {...settings} ref={sliderRef}>
              {product.map((item:any) => (
  <div className="p-2" key={item.id}>
    <div
      onClick={() => router.push(`/products/${item.id}`)}
      className="bg-[#fef3bc] shadow-lg rounded-lg overflow-hidden cursor-pointer w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between card-container"
    >
      <img
        className="w-full h-48 object-cover object-center"
        src={item.thumbnail}
        alt={item.title}
      />

      <div className="p-4">
        <div>
          <h2 className="text-gray-900 font-bold text-lg sm:text-xl md:text-xl mb-2">
            {item.title}
          </h2>
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`h-4 w-4 fill-current ${
                    star <= item.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6l2.4-7.2z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">
              {item.rating.toFixed(1)}
            </span>
          </div>

        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-bold text-2xl">
            ₹{item.price}
          </span>
          <button className="bg-[#E58F28] px-5 py-2.5 text-center text-white rounded-full transition-transform duration-300 transform hover:scale-110 hover:shadow-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
))}

              </Slider>
            </div>
        </div>
      </div>
    
  )
}

export default ProductSlider;