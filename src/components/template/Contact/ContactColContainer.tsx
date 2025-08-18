import ContactCard from "@/components/module/Contact/ContactCard";
import React, { useState } from "react";
type Contact = {
  id: number;
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
};

type Props = {
  contactData: Contact[];
};

function ContactColContainer({ contactData }: Props) {
  const [CurrentPage, setCurrentPage] = useState<number>(1);
  const itemPerPage = 12;
  const indexOfLastItem = CurrentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = contactData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(contactData.length / itemPerPage);

  return (
    <div>
      <div className={`gap-10 grid   grid-cols-4  transition-all mt-10`}>
        {currentItems.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>

      <div className="flex  justify-end gap-2 mt-10 ">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 bg-blue-500 rounded-xl  ${
              CurrentPage === index + 1 ? "bg-blue-500/40" : "bg-blue-500"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContactColContainer;
