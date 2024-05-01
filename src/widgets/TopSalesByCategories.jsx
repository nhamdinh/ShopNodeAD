// components
import Spring from "@components/Spring";
import LabeledProgressBar from "@components/LabeledProgressBar";

// utils
import { getPercentage, numFormatter } from "@utils/helpers";
// import { PRODUCT_CATEGORIES_REAL } from "@constants/options";

//   const data = [
//     { label: "Electronics", totalValue: 7541, color: "accent" },
//     { label: "Fashion", totalValue: 3897, color: "red" },
//     { label: "Food & Drinks", totalValue: 9874, color: "header" },
//     { label: "Services", totalValue: 6548, color: "yellow" },
//   ];

const TopSalesByCategories = ({ dataProducts = [], categories = [] }) => {
  // console.log(dataProducts)
  // const options = PRODUCT_CATEGORIES_REAL.filter(
  //   (option) => option.value !== "all"
  // );
  const data = categories.map((ooo) => {
    const totalValue = dataProducts.reduce((acc, ddd) => {
      if (ddd?.product_categories.includes(ooo.value)) {
        acc = acc + +ddd.product_price * +ddd.product_sold;
      }
      return acc;
    }, 0);
    return { ...ooo, totalValue };
  });

  return (
    <Spring className="card flex flex-col gap-2.5 2xl:col-span-2">
      <h5>Top Sales by Categories</h5>
      <div className="flex flex-col gap-[17px]">
        {data.map((item, index) => (
          <LabeledProgressBar
            key={index}
            wrapperClass="!gap-0"
            label={item.label}
            color={item.color}
            value={getPercentage(data, item.totalValue)}
            displayValue={numFormatter(item.totalValue, 2, "$")}
          />
        ))}
      </div>
    </Spring>
  );
};

export default TopSalesByCategories;
