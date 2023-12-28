import PropTypes from 'prop-types';
import products from './products';
import { FaHeart, FaRegStar, FaSearch, FaStar } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { LuRefreshCcw } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from 'react-rating';

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-5 group">
            <div>
                <div className="h-60 w-60 overflow-hidden relative p-5">
                    <div className={`absolute z-20 top-5 left-5 w-10 h-10 bg-orange-500 flex items-center justify-center rounded-full ${product?.discount == '0' && 'hidden'}`}>
                        <span className='text-white'> -{product?.discount}</span>
                    </div>
                    <div className='absolute z-10 left-0 right-0 top-0 bottom-0 flex items-center justify-center gap-3 bg-slate-950/30 invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'>
                        <button className='p-4 bg-white rounded-full transition-colors hover:text-orange-500'><FaHeart /></button>
                        <button className='p-4 bg-white rounded-full transition-colors hover:text-orange-500'><LuRefreshCcw /></button>
                        <button className='p-4 bg-white rounded-full transition-colors hover:text-orange-500'><FaSearch /></button>
                    </div>
                    <img className="w-full h-full object-contain" src={product?.image} alt={product?.title} />
                </div>
            </div>
            <div className="space-y-2">
                <span>
                    <Rating
                        initialRating={product?.rating}
                        readonly
                        emptySymbol={<FaRegStar className='text-orange-500' />}
                        fullSymbol={<FaStar className='text-orange-500' />}
                    />
                </span>
                <h4 className="text-slate-900 text-xl font-medium">{product?.title}</h4>
                <h3 className="text-red-500 text-2xl font-medium">${product?.price}</h3>
                <p className="text-base text-slate-500">{product?.desc}</p>
                <button className='px-4 py-2 bg-slate-700 text-white rounded-full opacity-0 transition-opacity group-hover:opacity-100'>Add to cart</button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.array,
}

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            className="products">
            <SwiperSlide>
                <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                    {
                        products.slice(0, 4).map(product => <ProductCard key={product.title} product={product} />)
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                    {
                        products.slice(4, 8).map(product => <ProductCard key={product.title} product={product} />)
                    }
                </div>
            </SwiperSlide>
            <span className='swiper-button-prev service-btn-prev p-2 text-4xl transition-all bg-white shadow-md rounded-full z-40 text-slate-500 hover:bg-orange-500 hover:text-white'><FaAngleLeft /></span>
            <span className='swiper-button-next service-btn-next p-2 text-4xl transition-all bg-white shadow-md rounded-full z-40 text-slate-500 hover:bg-orange-500 hover:text-white'><FaAngleRight /></span>
        </Swiper>
    );
};

export default Slider;