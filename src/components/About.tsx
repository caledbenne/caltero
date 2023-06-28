import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { ServiceCard } from "./cards";
import { SectionWrapper } from "../hoc";

export function About() {
    return (
        <>
            <motion.div variants={textVariant(.1)}>
                <p className={styles.sectionSubText}>
                    Introduction
                </p>
                <h2 className={styles.sectionHeadText}>
                    Overview
                </h2>
            </motion.div>
            <motion.p
                variants={fadeIn("","",0.1,1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I develop and architect enterprise grade applications with React and Angular frontends and .NET backends. I have a background in cybersecurity, authentication, and cryptography. Through close collaboration with customers, I develop exciting, user-friendly solutions that are scalable and secure. I also enjoy developing unique and interactive ways to deliver information to users, like my popcorn tech-stack above.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((s,i) => (
                    <ServiceCard key={i} index={i} {...s}/>
                ))}
            </div>
        </>
    );
}
export const AboutComponent = SectionWrapper(About, "about");
