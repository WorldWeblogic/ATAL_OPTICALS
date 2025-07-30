import woman from '../assets/frame/womenframe.jpg';
import CountUp from 'react-countup';
const Review=()=>{
 return(
    <>
        <div className="flex mt-26">
            <div>
            <div className='ml-26'>
            <p className='text-3xl font-bold'>We are experienced and professional</p>
                <p className='mt-6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='flex mt-10 gap-10 items-center'>
                <div className='flex flex-col'>
                <div className='font-bold text-3xl'><CountUp end={170} duration={3} />k+</div>
                <p className='text-lg'>Followers</p>
                </div>
                <div className='flex flex-col'>
                <div className='font-bold text-3xl'><CountUp end={140} duration={3} />k+</div>
                <p className='text-lg'>Frames</p>
                </div>
                <div className='flex flex-col'>
                <div className='font-bold text-3xl'><CountUp end={95} duration={3} />%</div>
                <p className='text-lg'>Satisfied Customer</p>
                </div>
                </div>
            </div>
            </div>
            <div className='mr-16 ml-30 pb-20 w-800'>
            <div className='bg-red-600 rounded-xl '>
                <img src={woman} alt='woman' loading='lazy' decoding='async' className='rounded-xl w-full h-full -translate-6 border-red-600 border-2 '/>
            </div>
            </div>
        </div>
    </>
 )
}
export default Review;