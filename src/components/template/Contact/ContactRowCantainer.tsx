import { Heart, More } from "iconsax-reactjs";
import React, { useState } from "react";
import Dropdown from "../../module/DropDown/DropDown";
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

function ContactRowContainer({ contactData }: Props) {
  const [CurrentPage, setCurrentPage] = useState<number>(1);
  const itemPerPage = 12;
  const indexOfLastItem = CurrentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = contactData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(contactData.length / itemPerPage);

  return (
    <div>
      <div className="rounded-3xl element p-7 mt-10">
        <table className="table table-auto w-full  text-center mt-10">
          <tr className="text-blue-500">
            <th>نام</th>
            <th> تعیین</th>
            <th> شرکت</th>
            <th>شماره</th>
            <th> ایمیل</th>
            <th></th>
          </tr>
          {currentItems.map((contact) => (
            <tr key={contact.id} className="h-20 border-b border-gray-500/40">
              <td>{contact.name}</td>
              <td>{contact.title}</td>
              <td>{contact.company}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <div className="flex gap-3 ">
                  <Dropdown icon={<More />}>
                    <button className="  rounded-full w-full text-right h-10  ">
                        حذف
                    </button>
                  </Dropdown>
                  <Heart />
                </div>
              </td>
            </tr>
          ))}
        </table>
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

export default ContactRowContainer;
