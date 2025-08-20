import React from 'react'
import StateCard from '@/components/module/FileManager/StateCard'
function StateCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      <StateCard used={41} total={100}/>
      <StateCard used={41} total={100}/>
      <StateCard used={41} total={100}/>
      <StateCard used={41} total={100}/>
    </div>
  );
}

export default StateCards
