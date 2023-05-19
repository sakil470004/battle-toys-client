import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
const Category = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/initialToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className='my-20 shadow-xl rounded-lg md:p-4'>
                <h2 className='text-4xl text-pink-400 text-center mb-10 font-bold'>Product Category You may like</h2>

            <Tabs>
                <TabList>
                    <Tab>Anime</Tab>
                    <Tab>Marvel</Tab>
                    <Tab>Transformers</Tab>
                </TabList>

                <TabPanel>
                   <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4'>

                    {toys.map(toy => toy?.category === "Anime" && <CategoryCard key={toy._id} toy={toy} />)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4'>
                    {toys.map(toy => toy?.category === "Marvel" && <CategoryCard key={toy._id} toy={toy} />)
                    }
                    </div>
                </TabPanel> <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4 '>
                    {toys.map(toy => toy?.category === "Transformers" && <CategoryCard key={toy._id} toy={toy} />)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );

};

export default Category;