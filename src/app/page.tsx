"use client";
import ServerRequestChart from "@/components/module/index1/ServerRequestChart/ServerRequestChart";
import MedCharts from "@/components/template/index1/MedCharts/MedCharts";
import StateCardContainer from "@/components/template/index1/stateCardContainer/StateCardContainer";
import Testimonial from "@/components/template/index1/testimonial/Testimonial";
import TopBarContainer from "@/components/template/index1/topbarContainer/TopBarContainer";
import MainLayout from "@/layout/MainLayout";
import "./globals.css";
import ColChart from "@/components/module/index1/ColChart/ColChart";

export default function Home() {
  return (
    <>
      <MainLayout>
        {/* محتوای اصلی که اسکرول می‌خوره */}
        <div className="w-full ">
          {/* topbar */}
          <TopBarContainer />

          <div className="grid grid-cols-7 gap-10 mt-10 max-xl:flex-col">
            <div className="col-span-5">
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

                {/* اینجا میخوام بزارمش  */}
                <div className="">
                  <Testimonial />
                </div>
              </div>
            </div>
            <div className="  col-span-2 ">
                <ColChart/>

            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
