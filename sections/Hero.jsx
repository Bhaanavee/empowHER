'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    {/* Title Section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center mb-8`}
    >
      <motion.h1
        variants={textVariant(1.1)}
        className={`${styles.heroHeading} text-pink-700 text-center`}
      >
        EmpowHER
      </motion.h1>
    </motion.div>

    {/* First Main Content Section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row items-center justify-between mb-12`}
    >
      {/* Left side text box */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="w-full md:w-[50%] flex flex-col justify-center z-10 relative h-[400px] p-4"
      >
        <motion.p
          variants={textVariant(1.2)}
          className="mt-8 text-[18px] leading-[1.5] text-gray-700"
        >
          <span className="text-[24px] font-bold text-pink-700">
            EmpowHER: Not Just a Movement, It's a Revolution!
          </span>
          <br />
          EmpowHER is your ultimate space to unlock unstoppable potential, connect with fierce women, and lead with purpose. It's not just a website—it's a revolution of empowerment, where ambition meets action and confidence becomes contagious!
        </motion.p>

        {/* Robot Button and Pink Text Box */}
        <div className="flex mt-12 items-center space-x-8">
          {/* Robot Image */}
          <motion.div
            className="block"
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <img
              src="/bot3.png"
              alt="Jumping Robot"
              className="w-[250px] h-[250px] object-contain"
            />
          </motion.div>

          {/* Pink Text Box with Link */}
          <motion.a
            href="https://womens-health-assistant-chatbot.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            variants={slideIn('right', 'tween', 0.2, 1)}
          >
            <div className="bg-pink-600 text-white px-8 py-6 rounded-lg shadow-md text-[16px] font-semibold">
              Purr-suade to help you<br /> Click to find out more!
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* Right side image */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="w-full md:w-[50%] flex justify-center relative z-10 h-[400px] p-4"
      >
        <img
          src="/cover8.png"
          alt="women health"
          className="w-full h-full object-cover rounded-[20px] shadow-lg"
        />

        {/* Explore Button */}
        <a href="#explore">
          <div className="absolute bottom-[-60px] right-[-40px]">
            <img
              src="/explore_2.png"
              alt="explore"
              className="sm:w-[170px] w-[150px] sm:h-[170px] h-[150px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>

    {/* Second Section: Tracker Content */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center mb-12`} // Centered flex column
    >
      {/* Title Above Tracker Image */}
      <h1 className=" text-center text-bold text-pink-900 text-[28px] font-bold mb-4">Work, Strive and Thrive!</h1>
      <h2 className=" text-center text-dark-pink-red text-[24px] font-bold mb-4">Track Your Wellness Journey </h2> {/* Title added */}

      {/* Left side with image and button */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="w-full md:w-[40%] flex flex-col items-center justify-center z-10 relative h-[400px] p-4" // Increased height for balance
      >
        {/* Tracker Image */}
        <img
          src="/tracker.png"
          alt="Tracker"
          className="w-full h-[300px] object-contain rounded-[10px] shadow-lg" // Increased height for the image
        />

        {/* Button with same width as the image */}
        <motion.a
          href="https://tracker-olive-nine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ backgroundColor: '#ff3d84' }} // Darker shade of pink on hover
          className="mt-8 bg-pink-500 text-white w-full px-6 py-4 rounded-lg shadow-md text-[16px] font-semibold text-center" // Shades of pink for the button
        >
          Wanna be Productive?
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
