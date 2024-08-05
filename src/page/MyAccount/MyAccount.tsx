import Container from "@/components/block/container/Container";
import style from "./style.module.scss";
import InfoAccount from "./account/InfoAccount";
import MyOrder from "./order/MyOrder";
import { useState } from "react";
import { Avatar } from "flowbite-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import clsx from "clsx";

type Tab = {
  id: number;
  name: string;
  component: () => JSX.Element;
};
const tabAccount: Tab[] = [
  {
    id: 1,
    name: "Account",
    component: InfoAccount,
  },
  {
    id: 2,
    name: "Order",
    component: MyOrder,
  },
];
const MyAccount = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [tab, setTab] = useState<number>(tabAccount[0].id);
  const componentTab = tabAccount.find((e) => e.id === tab);

  return (
    <Container className={style.MyAccount}>
      <h1 className={style.title}>My Account</h1>
      <div className={style.wrapper}>
        <div className={style.tabsList}>
          <div className={style.avata}>
            <Avatar
              img="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
              size="lg"
            />
            <h2>{user?.username}</h2>
          </div>

          <div className={style.navItem}>
            <ul>
              {tabAccount &&
                tabAccount.map((e) => (
                  <li
                    onClick={() => setTab(e.id)}
                    className={clsx({ [style.activeTab]: e.id === tab })}
                    key={e.id}>
                    {e.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="w-full"> {componentTab && (<componentTab.component />)} </div>
      </div>
    </Container>
  );
};

export default MyAccount;
