import CurrencyNewsUpdateWidget from "@/components/module/Currency/CurrencyNewsUpdateWidget";
import CurrencySummery from "@/components/module/Currency/CurrencySummery";
import MarketActivity from "@/components/module/Currency/MarketActivity";
import CoreAssets from "@/components/template/Currency/CoreAssets/CoreAssets";
import CurrenctCards from "@/components/template/Currency/CurrencyCards/CurrenctCards";
import MarketPreviews from "@/components/template/Currency/MarketPreviews/MarketPreviews";
import React from "react";

function page() {
  return (
    <div>
      <div className="grid grid-cols-7 ">
        <div className="col-span-5  p-10 max-lg:p-0 max-lg:col-span-7">
          <CurrenctCards />
          <CoreAssets />
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-10">
            <div className="col-span-1 max-lg:col-span-2">
              <MarketPreviews />
            </div>
            <div className="col-span-2 ">
              <MarketActivity
                chartData={[50, 80, 60, 90, 85, 100, 120]}
                chartDataSaccond={[50, 90, 20, 90, 85, 100, 120]}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2   mt-10">
          <CurrencyNewsUpdateWidget />
          <CurrencySummery/>
        </div>
      </div>
    </div>
  );
}

export default page;
