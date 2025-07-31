import StatCard from "@/components/module/index1/Card/StateCard";
import Title from "@/components/module/title/Title";
import AccsessBtns from "@/components/template/AccsessBtns/AccsessBtns";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        {/* محتوای اصلی که اسکرول می‌خوره */}
        <div className="w-full   h-screen   ">
          {/* topbar */}
          <div className="flex justify-between items-center p-2 ">
            <Title title="صورتحساب" desc="به داشبورد  خوش آمدید" />
            <AccsessBtns />
          </div>
          {/* end topbar */}

          <div className="flex gap-14 mt-10">
            <div className="flex-1  grid grid-cols-3 gap-10">
              <StatCard
                title="کاربران جدید"
                value={4750}
                percentage={-25}
                chartData={[10, 20, 15, 30, 25, 18, 22]}
              />
              <StatCard
                title="بازدیدها"
                value={129000}
                percentage={5}
                chartData={[50, 80, 60, 90, 85, 100, 120]}
              />
              <StatCard
                title="بازدیدها"
                value={129000}
                percentage={5}
                chartData={[50, 80, 60, 90, 85, 100, 120]}
              />
            </div>
            <div className="min-w-[400px] max-w-[400px]   bg-blue-500"></div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
