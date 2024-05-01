// components
import PageHeader from "@layout/PageHeader";
import TopSalesByCategories from "@widgets/TopSalesByCategories";
import TopRetail from "@widgets/TopRetail";
import TopProductsList from "@widgets/TopProductsList";
import { useSelector } from "react-redux";
import { getDataProducts } from "@store/selector/RootSelector";
import { useGetCodesQuery } from "@store/components/products/productsApi";
import { PRODUCT_CATEGORY } from "@utils/constants";
import { useEffect, useState } from "react";
import { PRODUCT_CATEGORIES_REAL } from "@constants/options";
const TopProducts = () => {
  const dataProducts = useSelector(getDataProducts);
  const [categories, setCategories] = useState([]);

  const {
    data: dataFetch,
    error,
    isSuccess,
    isLoading,
  } = useGetCodesQuery(
    {
      mainCode_type: PRODUCT_CATEGORY,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );
  useEffect(() => {
    if (isSuccess) {
      const options = PRODUCT_CATEGORIES_REAL.filter(
        (option) => option.value !== "all"
      );
      const lll = options.length ?? 1;

      const { mainCodes = [] } = dataFetch?.metadata;
      const __mainCodes = mainCodes.map((mm, index) => {
        const inx = index % lll;
        return {
          value: mm._id,
          label: mm.mainCode_value,
          icon: options[inx].icon,
          color: options[inx].color,
        };
      });
      setCategories(__mainCodes);
    }
  }, [dataFetch]);

  return (
    <>
      <PageHeader title="Top Products" />
      <div className="widgets-grid grid-cols-1 lg:!gap-10 xl:mb-[50px]">
        <div
          className="widgets-grid grid-cols-1 xl:grid-cols-[minmax(0,330px)_minmax(0,1fr)]
                    2xl:grid-cols-6"
        >
          <TopSalesByCategories
            categories={categories}
            dataProducts={dataProducts}
          />
          {/*                     <TopRetail dataProducts={dataProducts}/>*/}
        </div>
        <div className="widgets-grid grid-cols-1 lg:grid-cols-2">
          <TopProductsList
            dataProducts={dataProducts}
            categories={categories}
          />
          <TopProductsList
            dataProducts={dataProducts}
            categories={categories}
            category="household"
          />
        </div>
        <div className="widgets-grid grid-cols-1 lg:grid-cols-2">
          <TopProductsList
            dataProducts={dataProducts}
            categories={categories}
            category="clothing"
          />
          <TopProductsList
            dataProducts={dataProducts}
            categories={categories}
            category="furniture"
          />
        </div>
      </div>
    </>
  );
};

export default TopProducts;
