import Title from "@/components/module/title/Title";
import AccsessBtns from "@/components/template/AccsessBtns/AccsessBtns";
import MainLayout from "@/layout/MainLayout";
export default function Home() {
  return (
    <>
      <MainLayout>
        {/* محتوای اصلی که اسکرول می‌خوره */}
        <div className="w-full  border border-black h-screen   ">
          <div className="flex justify-between items-center p-2 ">
            <Title title="صورتحساب" desc="به داشبورد گیگسی خوش آمدید" />
            <AccsessBtns/>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
