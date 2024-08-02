import Container from "@/components/block/container/Container";
import Breadcumb from "@/components/ui/Breadcumb/breadcumb";

const ProductDetail = () => {

  const breadcumbs = ["Product"," áđâsd"]
  return (
    <Container className="mt-[100px]">
      <Breadcumb items={breadcumbs}/>
    </Container>
  );
};

export default ProductDetail;
