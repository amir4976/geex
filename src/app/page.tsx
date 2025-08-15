"use client";
import ServerRequestChart from "@/components/module/index1/ServerRequestChart/ServerRequestChart";
import MedCharts from "@/components/template/index1/MedCharts/MedCharts";
import StateCardContainer from "@/components/template/index1/stateCardContainer/StateCardContainer";
import Testimonial from "@/components/template/index1/testimonial/Testimonial";
import "./globals.css";
import ColChart from "@/components/module/index1/ColChart/ColChart";
import RecentProblems from "@/components/module/index1/RecentProblems/RecentProblems";

export default function Home() {
  return (
    <>
        {/* محتوای اصلی که اسکرول می‌خوره */}


          <div className="grid grid-cols-7 gap-10 mt-10  ">
            <div className="col-span-5  max-xl:col-span-7">
              <div className="flex flex-col w-full gap-10  ">
                {/* stateCard */}

                <StateCardContainer />
                {/* end stateCard */}

                {/* server request chart */}
                <div className="w-full element  p-7 rounded-4xl ">
                  <ServerRequestChart
                    // chartData={[50, 80, 60, 90, 85, 100, 120]}
                    // chartDataSaccond={[50, 90, 20, 90, 85, 100, 120]}
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
            <div className="  col-span-2 max-xl:col-span-7 ">
                <ColChart/>
                <RecentProblems/>
            </div>
          </div>

    </>
  );
}
