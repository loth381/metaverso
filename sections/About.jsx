'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="z-0 gradient-02" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Acerca de Metaverso" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverso</span> is a new
        cosa en el futuro, donde podrás disfrutar del mundo virtual sintiéndote
        como si fuera realmente real, puedes sentir lo que sientes en este metaverso
        mundo, porque este es realmente el{' '}
        <span className="font-extrabold text-white">
          locura del metaverso
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span>dispositivos que puedes
        explora fácilmente el mundo metaverso que deseas, convierte tus sueños en
        realidad. vamos{' '}
        <span className="font-extrabold text-white">explorar</span>la locura
        del metaverso desplazándose hacia abajo
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
