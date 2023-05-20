
import { Link } from 'react-router-dom';
import errorBanner from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>

        <div className='lg:w-[30%] text-center  mx-auto '>

            <img src={errorBanner} alt="" />
            <Link to='/'> <button className=' btn btn-success'>Go Back</button></Link>
        </div>

    </div>
    );
};

export default ErrorPage;