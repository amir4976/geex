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



export const testContact = [
  {
    "id": 1,
    "name": "لیلا احمدی",
    "title": "توسعه‌دهنده وب",
    "company": "ایده‌پردازان برتر",
    "phone": "03979673988",
    "email": "user0@mail.com"
  },
  {
    "id": 2,
    "name": "ندا جعفری",
    "title": "کارشناس بازاریابی",
    "company": "راهکار نوین",
    "phone": "01781891574",
    "email": "user1@mail.com"
  },
  {
    "id": 3,
    "name": "سارا مرادی",
    "title": "طراح تحرک منطقه",
    "company": "شرکت فناوران",
    "phone": "01602834792",
    "email": "user2@mail.com"
  },
  {
    "id": 4,
    "name": "سارا مرادی",
    "title": "مدیر پروژه",
    "company": "استودیوهای پرسرعت",
    "phone": "08821239410",
    "email": "user3@mail.com"
  },
  {
    "id": 5,
    "name": "لیلا احمدی",
    "title": "توسعه‌دهنده وب",
    "company": "پارس سیستم",
    "phone": "01416045634",
    "email": "user4@mail.com"
  },
  {
    "id": 6,
    "name": "تامارا حسینی",
    "title": "کارشناس بازاریابی",
    "company": "افق روشن",
    "phone": "01093771673",
    "email": "user5@mail.com"
  },
  {
    "id": 7,
    "name": "تامارا حسینی",
    "title": "طراح گرافیک",
    "company": "راهکار نوین",
    "phone": "09673518825",
    "email": "user6@mail.com"
  },
  {
    "id": 8,
    "name": "علی رضایی",
    "title": "کارشناس فروش",
    "company": "کانون خلاقیت",
    "phone": "02895687233",
    "email": "user7@mail.com"
  },
  {
    "id": 9,
    "name": "حمید صادقی",
    "title": "کارشناس بازاریابی",
    "company": "کانون خلاقیت",
    "phone": "03053363132",
    "email": "user8@mail.com"
  },
  {
    "id": 10,
    "name": "ندا جعفری",
    "title": "کارشناس بازاریابی",
    "company": "شرکت فناوران",
    "phone": "03644239127",
    "email": "user9@mail.com"
  },
  {
    "id": 11,
    "name": "سارا مرادی",
    "title": "توسعه‌دهنده وب",
    "company": "راهکار نوین",
    "phone": "02999522011",
    "email": "user10@mail.com"
  },
  {
    "id": 12,
    "name": "سارا مرادی",
    "title": "تحلیلگر داده",
    "company": "راهکار نوین",
    "phone": "01690733056",
    "email": "user11@mail.com"
  },
  {
    "id": 13,
    "name": "تامارا حسینی",
    "title": "کارشناس فروش",
    "company": "شرکت فناوران",
    "phone": "03715775636",
    "email": "user12@mail.com"
  },
  {
    "id": 14,
    "name": "لیلا احمدی",
    "title": "توسعه‌دهنده وب",
    "company": "راهکار نوین",
    "phone": "06529801762",
    "email": "user13@mail.com"
  },
  {
    "id": 15,
    "name": "سارا مرادی",
    "title": "مهندس نرم‌افزار",
    "company": "شرکت فناوران",
    "phone": "04699112133",
    "email": "user14@mail.com"
  },
  {
    "id": 16,
    "name": "جان اوکونوا",
    "title": "طراح تحرک منطقه",
    "company": "کانون خلاقیت",
    "phone": "01455785912",
    "email": "user15@mail.com"
  },
  {
    "id": 17,
    "name": "تامارا حسینی",
    "title": "طراح تحرک منطقه",
    "company": "ایده‌پردازان برتر",
    "phone": "08872936134",
    "email": "user16@mail.com"
  },
  {
    "id": 18,
    "name": "سارا مرادی",
    "title": "توسعه‌دهنده وب",
    "company": "پارس سیستم",
    "phone": "07824929296",
    "email": "user17@mail.com"
  },
  {
    "id": 19,
    "name": "علی رضایی",
    "title": "مهندس نرم‌افزار",
    "company": "کانون خلاقیت",
    "phone": "01869372778",
    "email": "user18@mail.com"
  },
  {
    "id": 20,
    "name": "علی رضایی",
    "title": "توسعه‌دهنده وب",
    "company": "شرکت فناوران",
    "phone": "08439207702",
    "email": "user19@mail.com"
  },
  {
    "id": 21,
    "name": "علی رضایی",
    "title": "تحلیلگر داده",
    "company": "پارس سیستم",
    "phone": "06634538983",
    "email": "user20@mail.com"
  },
  {
    "id": 22,
    "name": "تامارا حسینی",
    "title": "مهندس نرم‌افزار",
    "company": "کانون خلاقیت",
    "phone": "02097280230",
    "email": "user21@mail.com"
  },
  {
    "id": 23,
    "name": "حمید صادقی",
    "title": "توسعه‌دهنده وب",
    "company": "افق روشن",
    "phone": "06023110588",
    "email": "user22@mail.com"
  },
  {
    "id": 24,
    "name": "لیلا احمدی",
    "title": "طراح تحرک منطقه",
    "company": "افق روشن",
    "phone": "02920408505",
    "email": "user23@mail.com"
  },
  {
    "id": 25,
    "name": "علی رضایی",
    "title": "توسعه‌دهنده وب",
    "company": "استودیوهای پرسرعت",
    "phone": "08519285774",
    "email": "user24@mail.com"
  },
  {
    "id": 26,
    "name": "سارا مرادی",
    "title": "مهندس نرم‌افزار",
    "company": "افق روشن",
    "phone": "06154587817",
    "email": "user25@mail.com"
  },
  {
    "id": 27,
    "name": "حمید صادقی",
    "title": "مهندس نرم‌افزار",
    "company": "پارس سیستم",
    "phone": "05200624044",
    "email": "user26@mail.com"
  },
  {
    "id": 28,
    "name": "لیلا احمدی",
    "title": "مهندس نرم‌افزار",
    "company": "نگاه هوشمند",
    "phone": "03879866411",
    "email": "user27@mail.com"
  },
  {
    "id": 29,
    "name": "حمید صادقی",
    "title": "طراح تحرک منطقه",
    "company": "شرکت فناوران",
    "phone": "06747460688",
    "email": "user28@mail.com"
  },
  {
    "id": 30,
    "name": "ندا جعفری",
    "title": "کارشناس بازاریابی",
    "company": "راهکار نوین",
    "phone": "03327492148",
    "email": "user29@mail.com"
  },
  {
    "id": 31,
    "name": "سارا مرادی",
    "title": "کارشناس فروش",
    "company": "استودیوهای پرسرعت",
    "phone": "08100179131",
    "email": "user30@mail.com"
  },
  {
    "id": 32,
    "name": "لیلا احمدی",
    "title": "تحلیلگر داده",
    "company": "راهکار نوین",
    "phone": "09953621305",
    "email": "user31@mail.com"
  },
  {
    "id": 33,
    "name": "تامارا حسینی",
    "title": "طراح تحرک منطقه",
    "company": "راهکار نوین",
    "phone": "05555271680",
    "email": "user32@mail.com"
  },
  {
    "id": 34,
    "name": "تامارا حسینی",
    "title": "مهندس نرم‌افزار",
    "company": "افق روشن",
    "phone": "03019847831",
    "email": "user33@mail.com"
  },
  {
    "id": 35,
    "name": "ندا جعفری",
    "title": "طراح گرافیک",
    "company": "کانون خلاقیت",
    "phone": "01564322608",
    "email": "user34@mail.com"
  },
  {
    "id": 36,
    "name": "حمید صادقی",
    "title": "مدیر پروژه",
    "company": "ایده‌پردازان برتر",
    "phone": "01698226109",
    "email": "user35@mail.com"
  },
  {
    "id": 37,
    "name": "سارا مرادی",
    "title": "مهندس نرم‌افزار",
    "company": "راهکار نوین",
    "phone": "03518318881",
    "email": "user36@mail.com"
  },
  {
    "id": 38,
    "name": "سارا مرادی",
    "title": "تحلیلگر داده",
    "company": "شرکت فناوران",
    "phone": "02200140280",
    "email": "user37@mail.com"
  },
  {
    "id": 39,
    "name": "جان اوکونوا",
    "title": "تحلیلگر داده",
    "company": "پارس سیستم",
    "phone": "08014480666",
    "email": "user38@mail.com"
  },
  {
    "id": 40,
    "name": "ندا جعفری",
    "title": "کارشناس بازاریابی",
    "company": "نگاه هوشمند",
    "phone": "04835917056",
    "email": "user39@mail.com"
  }
]



