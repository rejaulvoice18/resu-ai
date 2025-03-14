
import StarRatings from 'react-star-ratings';

const ReviewCard = ({ review }) => {
    console.log(review);
    const rating = review.rating
    return (
        <div className="py-6 text-white lg:flex flex-row-reverse gap-16 ">
            <div className='flex flex-row-reverse justify-items-start items-center'>
                <img className="lg:w-[400px] w-full h-[400px] object-cover rounded-md"
                    src="https://www.purebookkeeping.com/hubfs/AU%20-%20Events/webinars/7%20Proven%20Ways%20to%20Get%20New%20Clients/client%201.jpeg" alt="" />
            </div>
            {/* ------ */}
            <div className=''>
                <div className="mb-10 pt-8 px-4 lg:px-0">
                    <div className='flex flex-row-reverse justify-items-start mb-4'>
                        <StarRatings
                            rating={rating}
                            starDimension="30px"
                            starRatedColor="yellow"
                            name='rating'
                            size={20}
                        />
                    </div>
                    <p className="text-left">{review.feedback}</p>
                </div>
                {/* ------ */}
                <div className='px-4 lg:px-0'>
                    <p className='text-xl font-bold flex flex-row-reverse justify-items-start mt-14'>{review.name}</p>
                    <p className='flex flex-row-reverse justify-items-start mt-3'>{review.profession}</p>
                </div>
                {/* ------ */}
            </div>
        </div>
    );
};

export default ReviewCard;