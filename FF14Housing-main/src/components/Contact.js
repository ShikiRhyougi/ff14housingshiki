import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img4 from '../assets/contact2.png';

const Contact = () => {
  const openDiscordWebsite = () => {
    window.open('https://discord.com/', '_blank');
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto relative'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-4xl uppercase text-accent font-medium mb-2 tracking-wide font-brush-script'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
              <p>My discord: shiki1376</p>
              <motion.form
                className='mt-4'
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.button
                  className='btn btn-lg'
                  onClick={openDiscordWebsite}
                  whileHover={{ x: -10 }}
                >
                  Send message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
          {/* large image on the right */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <img src={Img4} alt='Contact' className='w-full h-auto' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



