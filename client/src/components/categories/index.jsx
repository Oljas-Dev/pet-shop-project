import { useEffect, useState } from "react";
import SliderGroup from "../sliderGroup";
import axios from "axios";

function HomepageCategories() {
  const [sliderArray, setSliderArray] = useState([]);

  const headerObj = {
    title: "Categories",
    btnText: "All categories",
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/categories/all")
      .then((response) => {
        setSliderArray(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the categories!",
          error.message,
        );
      });
  }, []);

  return <SliderGroup sliderArray={sliderArray} headerObj={headerObj} />;
}

export default HomepageCategories;
