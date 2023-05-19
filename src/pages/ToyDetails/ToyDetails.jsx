import React from 'react';

const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy)
    return (
        <div>
            toys Details
        </div>
    );
};

export default ToyDetails;