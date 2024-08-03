import clsx from "clsx";
import { useState } from "react";
import style from "./style.module.scss";

interface Tab {
    id: number;
    name: string;
  }
  
  interface TabsProps {
    tabs: Tab[];
  }
const Tabs = ({ tabs }: TabsProps) => {
   const [tab] = useState<number>(tabs[0].id)

  return (
    <div className={style.tabs}>
      {tabs &&
        tabs.map((e) => (
          <div key={e.id} className={clsx(style.tabItem, {[style.tabItemActive]: e.id === tab })}>
            <div className={style.process}>{e.id}</div>
            <div className={style.title}>{e.name}</div>
          </div>
        ))}
    </div>
  );
};

export default Tabs;
