import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsBanner from "../components/ProductsBanner";
import ProductsFNA from "../components/ProductsFNA";
import ProductsMainGrid from "../components/ProductsMainGrid";

export default function Products() {
  return (
    <>
      <Navbar></Navbar>
      <ProductsBanner></ProductsBanner>
      <ProductsFNA></ProductsFNA>
      <ProductsMainGrid></ProductsMainGrid>
      <Footer></Footer>
    </>
  );
}
