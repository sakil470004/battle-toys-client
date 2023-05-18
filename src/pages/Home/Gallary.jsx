import React from 'react';

const Gallery = () => {
    const imgs = [
        'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsJTIwdG95fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFydmVsJTIwdG95fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1674271895767-d06559f81f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFydmVsJTIwdG95fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1592513002316-e4fa19175023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcnZlbCUyMHRveXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1589886359717-acc4cdd04d8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFydmVsJTIwdG95fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=687&q=80',


    ]
    return (
        <div>
            <h3 className='text-4xl mt-16 mb-10 text-pink-400 text-center'>Our Most Famous Collection</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    imgs.map((img, index) => <img className=' object-cover rounded-lg h-[540px] w-full' key={index} src={img}></img>)
                }
            </div>
        </div>
    );
};

export default Gallery;