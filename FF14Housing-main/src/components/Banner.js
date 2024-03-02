import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Image from '../assets/headerbild2.png';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <section
    className='min-h-screen flex items-center bg-cover bg-center'
      style={{
        backgroundImage: `url(${Image})`, // Set the background image here
      }}
      id='home'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
  variants={fadeIn('up', 0.3)}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  className='text-[55px] font-bold leading-[0.8] lg:text-[110px] shiki-rhyougi-title mb-10' // Hinzugefügt: größeren Margin-Bottom
>
  <span className='text-accent'>Shiki Rhyougi</span>
</motion.h1>
<motion.div
  variants={fadeIn('up', 0.4)}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  className='mb-8 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  ' House Designer',
                  2000,
                  'Garden Designer',
                  2000,
                  'Lizard girl',
                  2000,
                ]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
            <Link to='contact' smooth={true} duration={500}>
              <button className='btn btn-lg'>Contact me</button>
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
