'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| El mundo" textStyles="text-center" />
        <TitleText
          title={<>Elige el mundo que quieres <br className="hidden md:block" /> para explorar</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
