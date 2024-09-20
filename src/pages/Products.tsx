import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsBanner from "../components/ProductsBanner";
import ProductsFNA from "../components/ProductsFNA";

export default function Products() {
  return (
    <>
      <Navbar></Navbar>
      <ProductsBanner></ProductsBanner>
      <ProductsFNA></ProductsFNA>
      <Footer></Footer>
    </>
  );
}
