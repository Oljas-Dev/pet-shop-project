import { useEffect, useState } from "react";
import SliderGroup from "../sliderGroup";
import axios from "axios";

function HomepageProductsSale() {
  const [sliderArray, setSliderArray] = useState([]);

  const headerObj = {
    title: "Sale",
    btnText: "All sales",
    href: "/all-sales",
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/products/all")
      .then((response) => {
        setSliderArray(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the products!",
          error.message,
        );
      });
  }, []);

  const productsWithSale = sliderArray.filter((product) => {
    return product.discont_price > 0;
  });

  return <SliderGroup sliderArray={productsWithSale} headerObj={headerObj} />;
}

export default HomepageProductsSale;
