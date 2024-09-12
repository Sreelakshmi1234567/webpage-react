import React from 'react';
import natureImage from './nature.jpg'; 
import './page.css'

function Page() {
  return (
    <>
      <div className="org" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>NATURE</h1>
        <img src={natureImage} alt="orange" style={{ width: '100%  ', height: '500px' }} />
        <p>
        Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components. But deforestation has been the primary cause of global warming, destroying nature. In addition to exploiting excessive natural resources, other industries pollute the environment with toxic gases and chemicals. It is now essential to reduce biological damage, reuse things, and recycle existing materials to create new ones. People from all over the world should join forces to relieve pressure on the environment and restore its balance. 
        </p>
        
      </div>
    </>
  );
}

export default Page;
