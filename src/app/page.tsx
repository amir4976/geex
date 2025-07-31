import Title from "@/components/module/title/Title";
import AccsessBtns from "@/components/template/AccsessBtns/AccsessBtns";
import MainLayout from "@/layout/MainLayout";
export default function Home() {
  return (
    <>
      <MainLayout>
        {/* محتوای اصلی که اسکرول می‌خوره */}
        <div className="w-full  border border-black h-screen   ">
          {/* topbar */}
          <div className="flex justify-between items-center p-2 ">
            <Title title="صورتحساب" desc="به داشبورد  خوش آمدید" />
            <AccsessBtns />
          </div>
          {/* end topbar */}

          <div className="flex gap-14">
            <div className="flex-1 bg-red-500">ستون اول</div>
            <div className="min-w-[400px] max-w-[400px]   bg-blue-500">
              ستون دوم
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
