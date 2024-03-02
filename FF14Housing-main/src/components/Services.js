import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'House Decoration',
    description:
      'After discussing with the customer, my typical decoration timeframe is 2-3 days. Prices depend on whether it is a 1 or 2 floor house.',
  },
  {
    name: 'Garden Decoration',
    description:
      'I enhance gardens, whether big or small. Despite some design limitations, my focus is on achieving the desired look. Refer to my price list for more information.',
  },
  {
    name: 'Limitations',
    description:
      'For 2 floor houses, I avoid the second in-game floor and only use the first floor to simplify decorating and minimize glitches, especially in smaller houses. Discussing the use of existing in-game floors may incur extra costs and is generally discouraged.',
  },
];

const Services = () => {
  const [showPriceList, setShowPriceList] = useState(false);
  const [showThemesList, setShowThemesList] = useState(false);

  const togglePriceList = () => {
    setShowPriceList(!showPriceList);
    // Hide the themes list when showing the price list
    setShowThemesList(false);
  };

  const toggleThemesList = () => {
    setShowThemesList(!showThemesList);
    // Hide the price list when showing the themes list
    setShowPriceList(false);
  };

  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent font-brush-script text-5xl'>My Services</h2>
            <p className='max-w-sm mb-16'>
              Explore pricing details for a clear overview. Reach out for questions or customizations—I'm here to bring your vision to life
            </p>

            <div className="flex mb-4">
              <button className='btn btn-lg mr-4' onClick={togglePriceList}>
                Price List
              </button>

              {/* New Button to toggle Themes List */}
              <button className='btn btn-lg' onClick={toggleThemesList}>
                Themes
              </button>
            </div>

            {/* List of Services */}
            {showPriceList && (
              <ul className="list-disc pl-6">
                <li>
                  <strong>Small House:</strong>
                  <ul className="list-disc pl-6">
                    <li>1 floor: 15 mil</li>
                    <li>2 floors: 20 mil + 6-8 mil (Items)</li>
                  </ul>
                </li>
                <li>
                  <strong>Medium House:</strong>
                  <ul className="list-disc pl-6">
                    <li>1 floor: 23 mil</li>
                    <li>2 floors: 28 mil + 8-11 mil (Items)</li>
                  </ul>
                </li>
                <li>
                  <strong>Large House:</strong>
                  <ul className="list-disc pl-6">
                    <li>1 floor: 33 mil</li>
                    <li>2 floors: 38 mil + 9-14 mil (Items)</li>
                  </ul>
                </li>
              </ul>
            )}

            {/* List of Themes */}
            {showThemesList && (
              <ul className="list-disc pl-6">
                <li>
                  <strong>Japanese:</strong>
                  <ul className="list-disc pl-6">
                    <li>Modern, Traditional, Japandi</li>
                  </ul>
                </li>
                <li>
                  <strong>Mansions:</strong>
                  <ul className="list-disc pl-6">
                    <li>Modern, Classic, Goth</li>
                  </ul>
                </li>
                <li>
                  <strong>Others:</strong>
                  <ul className="list-disc pl-6">
                    <li>Beach House, Penthouse, Cozy Cabin, Spaceship</li>
                  </ul>
                </li>
              </ul>
            )}
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                const isLastService = index === services.length - 1;

                return (
                  <motion.div
                    key={index}
                    className={`${
                      isLastService ? '' : 'border-b border-white/20'
                    } mb-[38px] flex py-4 px-4 hover:zoom-in`}
                    style={{
                      backgroundColor: index === 2 ? '#1b00003d' : '#1b00003d',
                      minHeight: index === 2 ? '200px' : 'auto',
                      borderRadius: '10px',
                      border: '4px solid #990000',
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: '#990000' }}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-2' style={{ color: '#FFFFFF' }}>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight' style={{ color: '#FFFFFF' }}>
                        {description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
