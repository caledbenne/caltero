import { motion } from "framer-motion"
import { Contact } from "../../models/Contact"
import { fadeIn } from "../../utils/motion"

interface ContactCardProps {
    contact: Contact,
    index: number
}

export function ContactCard({contact, index}: ContactCardProps) {
    return (<motion.div
    variants={fadeIn('right', 'spring', 0.5*index, 0.75)}
    className="flex-1 px-10 py-2"
>
        <a href={contact.url} className="bg-tertiary rounded-[40px] py-2 px-12  flex justify-evenly items-center hover:bg-secondary max-w-md">
        <img src={contact.icon} alt={contact.name} className="w-16 h-16 object-contain pr-5"/>
        <span>{contact.name}</span>
        </a>
</motion.div>)
}