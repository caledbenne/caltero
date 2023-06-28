
import {
    VerticalTimeline,
  } from 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from '../constants';
import { ExperienceCard } from './cards';
import { SectionWrapper } from '../hoc';

export function Experiences() {
    return (
      <>
        <motion.div variants={textVariant(0.2)}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Experience
          </h2>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  }

export const ExperiencesComponent = SectionWrapper(Experiences,"experience");