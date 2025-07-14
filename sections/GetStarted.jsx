'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10 bg-light-pink`} id="get-started">
    {/* Added light-pink background */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/menstrual.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain opacity-90"
          // Reduced opacity for subtlety
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| EmpowHER: The Journey from Within " textStyles="text-dark-purple" />
        {/* Changed text color */}
        <TitleText
          title={<>Evolve in Cycles!</>}
          textStyles="text-dark-pink text-center"
          // Keep this color unchanged
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
              textStyles="text-dark-purple" // Ensure text is visible
            />
          ))}
        </div>
      </motion.div>
    </motion.div>

    {/* New Section for Menstrual Cycle Paragraph */}
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="mt-10 text-center"
    >
      <h2 className="font-extrabold text-dark-purple text-[34px] mb-4">
        Understanding the Menstrual Cycle
      </h2>
      <p className="font-medium text-black text-[24px] leading-relaxed max-w-[1000] mx-auto">
        The menstrual cycle, often shrouded in whispers and misconceptions, is a powerful testament to the incredible capabilities of the female body. Spanning approximately 28 days, this natural rhythm encompasses the transformative phases of menstruation, ovulation, and hormonal fluctuations that shape not only physical health but emotional well-being. Yet, despite its universal nature, the conversation around menstruation remains taboo, leaving many women feeling isolated in their experiences. By breaking the silence and embracing the beauty of this cycle, we empower ourselves and each other to reclaim our narratives, fostering a community where knowledge reigns and women feel supported in their journeys. Let's illuminate the path to understanding and celebrate the strength inherent in our cycles!
      </p>
    </motion.div>
  </section>
);

export default GetStarted;
