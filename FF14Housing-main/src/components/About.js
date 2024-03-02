import React from 'react';
// countup
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent font-brush-script text-5xl'>About me</h2>
            <h3 className='h3 mb-4'>
              Greetings! I'm Shiki, an Interior Designer in Final Fantasy 14
            </h3>
            <p className='mb-6'>
              I operate on the Chaos Data Center with a focus on the worlds of Louisoix and Sagittarius.
              My joy lies in decorating small, medium, or large homes, bringing players' dreams to life.
              In my work, I prioritize personalized designs, precision, cohesive aesthetics, and a commitment to meticulous detailing.
              Feel free to peruse my gallery to delve deeper into my creative world!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
