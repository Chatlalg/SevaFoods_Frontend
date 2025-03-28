// import React from 'react';
// import Laptop from '../assets/fooddonate.avif';

// const Analytics = () => {
//   return (
//     <div className='w-full bg-white py-16 px-4'>
//       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
//         <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
//         <div className='flex flex-col justify-center'>
//           <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
//           <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
//             molestiae delectus culpa hic assumenda, voluptate reprehenderit
//             dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
//             eveniet ex deserunt fuga?
//           </p>
//           <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;

import React from 'react';
import { Link } from 'react-router-dom';  
import Logo from '../assets/finallogo.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Logo} alt='Food Donation' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '> Join us in reducing food waste and
             supporting those in need by donating surplus food to trusted NGOs.</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
           Save Food. Feed Lives. Make an Impact.
          </h1>
          <p>
          Every day, tons of food go to waste while millions go hungry. Our mission is to bridge this gap by connecting food donors
           (restaurants, supermarkets, individuals) with NGOs that distribute food to those in need.
          </p>

          
          <Link to="/donate">
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
