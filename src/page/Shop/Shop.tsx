import React from "react";
import HeroShop from "./HeroShop/HeroShop";
import Container from "@/components/block/container/Container";
import MainProduct from "./MainProduct/MainProduct";

const Shop = () => {
  return (
    <>
      <Container>
        <HeroShop />
       <MainProduct />
      </Container>
    </>
  );
};

export default Shop;
