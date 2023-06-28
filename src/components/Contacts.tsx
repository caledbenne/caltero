
import { SectionWrapper } from "../hoc";
import { contacts } from "../constants";
import { ContactCard } from "./cards";

export function Contacts() {
    return (
        <div className="w-full flex">
            {contacts.map((c,i) => (
                <ContactCard contact={c} key={i} index={i}/>
            ))}
        </div>
    );
}
export const ContactsComponent = SectionWrapper(Contacts, "contact");
