import { FaChartBar, FaRegUser } from "react-icons/fa";

import { LuHouse } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CiFileOn } from "react-icons/ci";
import { GoFileDirectory } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { LuPencil } from "react-icons/lu";
type NavbarLink = {
  title: string;
  link: string;
  Icon: React.ElementType;
};

export const navbarLinks: NavbarLink[] = [
  { title: "خانه", link: "/", Icon: LuHouse },
  { title: "ایمیل", link: "/", Icon: FaChartBar },
  { title: "مخاطبین", link: "/Contact", Icon: FaRegUser },
  { title: "کریپتو", link: "/Currency", Icon: RiMoneyDollarCircleLine },
  { title: "صورتحساب", link: "/Bills", Icon: CiFileOn },
  { title: "حسابداری", link: "/Financial", Icon:CiWallet},
  { title: "مدیریت فایل", link: "/FileManager", Icon: GoFileDirectory },
  { title: "تقویم", link: "/", Icon: CiCalendar },
  { title: "تودو لیست", link: "/", Icon: LuPencil },
];
