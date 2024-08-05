import { CustomSelect } from "@/components/ui/CustomSelect/CustomSelect";
import style from "./style.module.scss";
import { Options_category, PERPAGES } from "@/constant";
import Card from "@/components/ui/Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "flowbite-react";
import { useEffect, useMemo, useState } from "react";
import { handlefilterCategory } from "@/utils/Feature";
import { TypeProduct } from "@/models/model";

const MainProduct = () => {
  const [perPage, setPerPage] = useState<number>(8);
  const [paramCategory, setParamCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState<TypeProduct[]>([]);
  const products = useSelector((state: RootState) => state.product.product);

  const handleLoadMore = () => {
    setPerPage((perPagePrev) => perPagePrev + 4);
  };

  const handleSetPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = parseInt(e.target.value, 10);
    setPerPage(target);
  };

  const handleSearchParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    setParamCategory(target);
  };
 

  useEffect(() => {
    const datamoi = handlefilterCategory(products, paramCategory)
    setFilteredProducts(datamoi);
  },[products,paramCategory])

  const loadMoreData = useMemo(() => {
    return filteredProducts.slice(0, perPage);
  }, [perPage,filteredProducts]);

  return (
    <div className={style.mainProdut}>
      <div className={style.toolBar}>
        <CustomSelect
          name="categori"
          LabelName="Select Categories"
          optios={Options_category}
          className="flex-1"
          onChange={handleSearchParam}
        />

        <CustomSelect
          name="categori"
          LabelName="Select Categories"
          optios={PERPAGES}
          className="flex-1"
          onChange={handleSetPerPage}
        />
      </div>

      <div className={style.listProducts}>
        {loadMoreData &&
          loadMoreData.map((item, i) => <Card key={i} item={item} />)}
      </div>
      <div className="w-full mt-10">
        <Button
          onClick={handleLoadMore}
          className="mx-auto"
          size={"lg"}
          outline
          gradientDuoTone="cyanToBlue">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default MainProduct;
