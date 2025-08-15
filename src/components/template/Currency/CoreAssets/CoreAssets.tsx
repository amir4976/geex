import CandlestickChart from '@/components/module/Currency/CandelChart'
import React from 'react'

export default function CoreAssets() {
    const testData = [
  { time: '2025-08-14T15:00:00Z', open: 9500, high: 9550, low: 9480, close: 9530, volume: 120 },
  { time: '2025-08-14T15:10:00Z', open: 9530, high: 9580, low: 9510, close: 9550, volume: 140 },
  { time: '2025-08-14T15:20:00Z', open: 9550, high: 9600, low: 9520, close: 9590, volume: 160 },
  { time: '2025-08-14T15:30:00Z', open: 9590, high: 9620, low: 9570, close: 9580, volume: 180 },
  { time: '2025-08-14T15:40:00Z', open: 9580, high: 9610, low: 9550, close: 9560, volume: 150 },
  { time: '2025-08-14T15:50:00Z', open: 9560, high: 9590, low: 9530, close: 9540, volume: 170 },
  { time: '2025-08-14T16:00:00Z', open: 9540, high: 9580, low: 9520, close: 9570, volume: 190 },
];
  return (
    <div>
      {<CandlestickChart data={testData} height={420} />}
    </div>
  )
}



