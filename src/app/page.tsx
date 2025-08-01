import ServerRequestChart from "@/components/module/index1/ServerRequestChart/ServerRequestChart";
import MedCharts from "@/components/template/index1/MedCharts/MedCharts";
import StateCardContainer from "@/components/template/index1/stateCardContainer/StateCardContainer";
import TopBarContainer from "@/components/template/index1/topbarContainer/TopBarContainer";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        {/* محتوای اصلی که اسکرول می‌خوره */}
        <div className="w-full   h-screen   ">
          {/* topbar */}
          <TopBarContainer />

          <div className="flex gap-14 mt-10">
            <div className="flex flex-col w-full gap-10  ">
              {/* stateCard */}
              <StateCardContainer />
              {/* end stateCard */}

              {/* server request chart */}
              <div className="w-full bg-white p-7 rounded-4xl ">
                <ServerRequestChart
                  chartData={[50, 80, 60, 90, 85, 100, 120]}
                  chartDataSaccond={[50, 90, 20, 90, 85, 100, 120]}
                />
              </div>
              {/* end server request chart */}

              {/* meddiom Charts */}
              <MedCharts />
              {/* end meddiom Charts */}
            </div>
            <div className="min-w-[400px] max-w-[400px]   bg-blue-500"></div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
