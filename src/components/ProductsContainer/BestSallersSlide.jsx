import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaRegStar, FaStar } from "react-icons/fa";
import products from '../HeaderSlider/products';
import Rating from 'react-rating';

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-5">
            <div>
                <div className="h-32 w-32 overflow-hidden relative p-5">
                    <img className="w-full h-full object-contain" src={product?.image} alt={product?.title} />
                </div>
            </div>
            <div className="space-y-1">
                <span>
                    <Rating
                        initialRating={product?.rating}
                        readonly
                        emptySymbol={<FaRegStar className='text-orange-500' />}
                        fullSymbol={<FaStar className='text-orange-500' />}
                    />
                </span>
                <h4 className="text-slate-900 text-xl font-medium">{product?.title?.length > 25 ? product?.title?.slice(0, 25) + '...' : product?.title}</h4>
                <h3 className="text-red-500 text-2xl font-medium">${product?.price}</h3>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.array,
}

const BestSallersSlide = () => {

    return (
        <div>
            <div className='flex items-center justify-between relative pb-2 after:w-full after:h-1 after:bg-slate-400 after:absolute after:top-10'>
                <h4 className='text-3xl font-medium after:w-40 after:h-1 after:bg-orange-500 after:z-20 after:absolute after:left-0 after:top-10'>Best Sallers</h4>
                <div>
                    <div id="containerForBullets"></div>
                </div>
            </div>
            <Swiper pagination={{
                el: "#containerForBullets",
                type: "bullets",
                bulletClass: "swiper-custom-bullet",
                bulletActiveClass: "swiper-custom-bullet-active",
                clickable: true,
            }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div>
                        {
                            products.slice(0, 4).map(product => <ProductCard key={product.title} product={product} />)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        {
                            products.slice(4, 8).map(product => <ProductCard key={product.title} product={product} />)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        {
                            products.slice(0, 4).map(product => <ProductCard key={product.title} product={product} />)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BestSallersSlide;