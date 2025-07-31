import React from 'react'

type Props = {
    title:string;
    desc:string;
}

function Title({title,desc}: Props) {
  return (
    <div className="">
      <p className="text-3xl peydaBold">{title}</p>
      <p className="text-xl peydasemi">{desc}</p>
    </div>
  );
}

export default Title