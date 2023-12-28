import discount from '../../assets/discount.jpg';
import BestSallersSlide from './BestSallersSlide';

const BestSallers = () => {
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 py-10">
            <div className='w-full h-full'>
                <img className='w-full h-full object-contain' src={discount} alt="Discount" />
            </div>
            <div>
                <div>
                    <BestSallersSlide />
                </div>
            </div>
        </div>
    );
};

export default BestSallers;