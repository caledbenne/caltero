import { TechCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from "../styles";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Technology } from "../models/Technology";
export function Hero() {
  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Cale</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a full stack developer<br className="sm:hidden block" /> with experience in DevOps.</p>
        </div>
      </div>
      <TechCanvas technologies={technologies} setSelectedTechnology={setSelectedTechnology} />
      {selectedTechnology && 
        <div className="absolute overflow-hidden bottom-[15vh] w-full text-center text-white text-[16px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
            key={selectedTechnology.name}
              initial={{x: -30, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              exit={{x: 30, opacity: 0}}
              transition={{duration: 0.3}}
            >
              <div className="rounded-full bg-[#777] py-1 px-2">{selectedTechnology.name}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      }
      {!selectedTechnology && 
        <motion.div
          exit={{opacity: 0}}
          animate={{opacity: .8 }}
          initial={{opacity: 0 }}
          transition={{delay: 4, duration: 0.5}}
        className="absolute top-[40vh] right-10 lg:right-[20vh] xl:right-[30vh]">
          (tap on a technology)
        </motion.div>
      }
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-30 hover:opacity-100">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div>
    </section>
  )
}