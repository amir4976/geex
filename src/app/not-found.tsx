import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <MainLayout>
        <div className="flex w-full element justify-center items-center flex-col p-10 rounded-3xl">
          <p className="text-[100px] lg:text-[250px] md:text-[250px] leading-[250px]  sm:text-[160px] xs:text-[140px] text-gray-500/50">
            404
          </p>
          <p className="text-3xl">این صفحه وجود ندارد</p>
          <p>
            با عرض پوزش، صفحه ای که به نظر می رسد به دنبال آن هستید، منتقل شده،
            هدایت شده یا برای همیشه حذف شده است.
          </p>
          <Link
            className="p-3 bg-blue-500/20 rounded-2xl mt-5 hover:bg-blue-500 hover:text-white"
            href="/"
          >
            بازگشت به خانه
          </Link>
        </div>
      </MainLayout>
    </>
  );
}
