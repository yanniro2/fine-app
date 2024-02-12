import React from "react";

type Props = {};

const BottomMenu = (props: Props) => {
  return (
    <div className="fixed bottom-[2rem] w-min right-[5rem]  flex items-center gap-[3rem]  text-[#707070] z-[2000]">
      <button className="btn-1">send proof</button>
      <button className="btn-1-active">approve</button>
    </div>
  );
};

export default BottomMenu;
