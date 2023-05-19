import Banner from './Banner';
import Gallery from './Galley';
import Category from './Category';

const Home = () => {

    return (
        <div className='px-2 md:p-0'>
            <Banner />
            <Gallery />
            <Category />
        </div>
    );
};

export default Home;