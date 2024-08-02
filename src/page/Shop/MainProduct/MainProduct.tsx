import React from "react";
import { CustomSelect } from "@/components/ui/CustomSelect/CustomSelect";

import style from "./style.module.scss";
import { Options_category } from "@/constant";
import Card from "@/components/ui/Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const MainProduct = () => {
  const products = useSelector((state: RootState) => state.product.product);

  return (
    <div className={style.mainProdut}>
      <div className={style.toolBar}>
        <CustomSelect
          name="categori"
          LabelName="Select Categories"
          optios={Options_category}
          className="flex-1"
        />
      </div>

      <div className={style.listProducts}>
      {products && products.map((item,i) => <Card key={i} item={item} />)}
      </div>
    </div>
  );
};

export default MainProduct;
