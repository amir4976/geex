import { SearchNormal } from 'iconsax-reactjs'
import React from 'react'

function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full  h-10 rounded-xl px-2 focus:outline-none"
        placeholder="جستوجو"
      />
      <div className=" absolute left-2 top-3  ">
        <SearchNormal size={15} />
      </div>
    </div>
  );
}

export default Search
