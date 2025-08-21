"use client";
import React from "react";
import { FilesData } from "@/utils/testData";
import { FilesDataType } from "@/utils/types";

import {
  Video,
  Music,
  Folder,
  PictureFrame,
  DocumentSketch,
  More,
  More2,
} from "iconsax-reactjs";
import Dropdown from "@/components/module/DropDown/DropDown";

function Files() {
  const categories: FilesDataType["categories"] = FilesData[0].categories;
  const iconFinder = (icon: string) => {
    switch (icon) {
      case "image":
        return (
          <>
            <div className="w-14 h-14 flex justify-center items-center rounded-xl bg-[#ec9b8e] text-white ">
              <PictureFrame size="32" variant={"Bold"} />
            </div>
          </>
        );
        break;
      case "video":
        return (
          <>
            <div className="w-14 h-14 flex justify-center items-center rounded-xl bg-[#ffbb52] text-white ">
              <Video size="32" variant={"Bold"} />
            </div>
          </>
        );
        break;
      case "music":
        return (
          <>
            <div className="w-14 h-14 flex justify-center items-center rounded-xl bg-[#00a38d] text-white ">
              <Music size="32" variant={"Bold"} />
            </div>
          </>
        );
        break;
      case "Documents":
        return (
          <>
            <div className="w-14 h-14 flex justify-center items-center rounded-xl bg-[#58cefe] text-white ">
              <DocumentSketch size="32" variant={"Bold"} />
            </div>
          </>
        );
        break;
      case "folder":
        return (
          <>
            <div className="w-14 h-14 flex justify-center items-center rounded-xl bg-[#ad53d8] text-white ">
              <Folder size="32" variant={"Bold"} />
            </div>
          </>
        );
        break;

      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-5 mt-10">
      <div className="col-span-1 py-4 element rounded-2xl">
        <div className="justify-between flex items-center p-3 ">
          <p>دسته بندی ها</p>
          <Dropdown icon={<More size="20" />} size={"med"}>
            pink
          </Dropdown>
        </div>

        {categories.map((cat) => (
          <div
            key={cat.id}
            className="w-full py-2 hover:bg-gray-500/10 border-4 border-gray-500/0 hover:border-r-blue-500 transition-all"
          >
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center gap-3 ">
                {iconFinder(cat.icon)}
                <h1 className=" font-bold">{cat.label}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-3 py-5 element rounded-2xl">
        <table className="table table-auto w-full text-center ">
          <tbody>
            <tr className="text-gray-400">
              <th>نام فایل</th>
              <th>ایتم فایل</th>
              <th>اخرین بازدید</th>
              <th>سایز فایل</th>
            </tr>
            <tr className="odd:bg-gray-600/10 h-20  hover:border-r-blue-500 border-r-4 border-gray-500/0  ">
              <td>
                <div className="flex  items-center gap-5 px-10">
                  <div className="w-14 h-14 flex justify-center items-center rounded-xl bg-[#ec9b8e] text-white ">
                    <PictureFrame size="32" variant={"Bold"} />
                  </div>
                  <p>take-a-look-my-garden.jpg</p>
                </div>
              </td>
              <td>1 file</td>
              <td>2d ago</td>
              <td>10,4 mb</td>
              <td>
                <More />
              </td>
            </tr>
            <tr className="odd:bg-gray-600/10 h-20 hover:border-r-blue-500 border-r-4 border-gray-500/0   ">
              <td>
                <div className="flex  items-center gap-5 px-10">
                  <div className="w-14 h-14 flex justify-center items-center rounded-xl bg-[#58cefe] text-white ">
                    <DocumentSketch size="32" variant={"Bold"} />
                  </div>

                  <p>take-a-look-my-garden.jpg</p>
                </div>
              </td>
              <td>1 file</td>
              <td>2d ago</td>
              <td>10,4 mb</td>
              <td>
                <More />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Files;
