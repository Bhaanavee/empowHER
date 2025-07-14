'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Feedback = () => {
  const videoRef = useRef(null); // Reference for the video element

  useEffect(() => {
    const videoElement = videoRef.current;

    // Callback for the Intersection Observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => { // Added parentheses around entry
        if (entry.isIntersecting) {
          videoElement.play(); // Play video when in view
        } else {
          videoElement.pause(); // Pause video when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25, // Trigger when 25% of the video is in view
    });

    if (videoElement) {
      observer.observe(videoElement); // Observe the video element
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement); // Clean up observer on unmount
      }
    };
  }, [videoRef]);

  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        {/* Text Section */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.6] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-extrabold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-matte-black">
              Women in STEM:
            </h4>
            <h4 className="font-extrabold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-rosewood-brown">
              Breaking Barriers and Shaping the Future
            </h4><br />

            <p className="mt-[8px] font-semibold sm:text-[18px] text-[16px] sm:leading-[22.68px] leading-[20.68px] text-dark-pink-red">
              Women are breaking barriers and shattering glass ceilings, paving the way for future generations in STEM. Despite historical underrepresentation, women are making significant strides in science, technology, engineering, and mathematics.
            </p>
            <p className="mt-[16px] font-semibold sm:text-[22px] text-[16px] sm:leading-[40.6px] leading-[36.6px] text-onyx-black">
              According to the United Nations, women now represent 35% of STEM students globally. Trailblazers like Dr. Mae Jemison, the first African American woman in space, and Dr. Maryam Mirzakhani, the first female Fields Medal winner, continue to inspire new generations of women to pursue their passions. Women-led innovations are transforming industries and improving lives.
            </p>
            <p className="mt-[16px] font-semibold sm:text-[22px] text-[16px] sm:leading-[40.6px] leading-[36.6px] text-onyx-black">
              Examples include Dr. Fei-Fei Li, director of the Stanford Artificial Intelligence Lab, who developed AI-powered algorithms to diagnose diseases, and Dr. Ayanna Howard, robotics engineer, who created affordable prosthetic limbs for children. Their achievements highlight the importance of diversity in STEM.
            </p>
            <p className="mt-[16px] font-semibold sm:text-[22px] text-[16px] sm:leading-[40.6px] leading-[36.6px] text-onyx-black">
              As women continue to excel in STEM, role models like NASA's Dr. Katherine Johnson and Nobel laureate Dr. Donna Strickland inspire a new wave of innovators. Mentorship and advocacy are crucial to bridging the gap and unlocking a more inclusive, innovative world where women thrive in STEM.
            </p>
          </div>
        </motion.div>

        {/* Image and Video Section */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-[0.4] flex flex-col justify-between items-center"
        >
          {/* First Image */}
          <img
            src="/stem1.png"
            alt="stem"
            className="w-full h-[50%] object-cover rounded-[40px]"
          />

          {/* Video Section */}
          <video
            ref={videoRef} // Attach the ref to the video element
            className="w-full h-[50%] object-cover rounded-[40px] mt-2" // Adjusts height to match the image
            controls
            muted
          >
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
