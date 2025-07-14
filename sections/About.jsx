'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About EmpowHER" textStyles="text-center text-dark-purple" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-dark-purple"
      >
        <div className="text-center"> {/* Centering the text */}
          <span className="font-extrabold text-[40px] text-dark-pink">EmpowHER<br /></span>
        </div>
        Discover a revolutionary AI-powered health assistant designed specifically for women. Our platform provides personalized insights and support across various life stages, empowering you to take control of your health like never before.{' '}
        <span className="font-extrabold text-dark-purple">
          <br />Empower your health journey
        </span>{' '} with our Comprehensive Women's Health Assistant. Using AI-driven insights, you can easily track your health and wellness across various life stages, transforming your health goals into reality. Let's{' '}
        <span className="font-extrabold text-dark-purple">
          Discover
        </span> personalized health insights and take control of your well-being together by scrolling down!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
