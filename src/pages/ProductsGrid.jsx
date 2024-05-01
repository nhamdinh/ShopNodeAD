// components
import PageHeader from "@layout/PageHeader";
import ItemsGrid from "@widgets/ItemsGrid";

// hooks
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserInfo, getCategories } from "@store/selector/RootSelector";
import { useGetProductsByShopMutation } from "@store/components/products/productsApi";
import { PAGE_SIZE_999 } from "@utils/constants";

const ProductsGrid = () => {
  const categories = useSelector(getCategories);
  const userInfo = useSelector(getUserInfo);
  const [products, setProducts] = useState([]);

  const [params, setParams] = useState({
    product_shop: userInfo?._id,
    limit: PAGE_SIZE_999,
    page: 1,
  });

  useEffect(() => {
    setParams({
      product_shop: userInfo?._id,
      limit: PAGE_SIZE_999,
      page: 1,
      isDelete: false,
    });
  }, [userInfo]);

  const [getProductsByShop, { isLoading, error }] =
    useGetProductsByShopMutation();

  const onGetProductsByShop = async () => {
    const res = await getProductsByShop(params);
    //@ts-ignore
    const data = res?.data;
    if (data) {
      const _products = data?.metadata?.products;
      setProducts(
        _products.map((ppp) => {
          const status = ppp.isDelete
            ? "trash"
            : ppp.isPublished
            ? "publish"
            : "draft";
          return { ...ppp, status };
        })
      );
    }
  };

  useEffect(() => {
    if (params.product_shop) onGetProductsByShop(params);
  }, [params]);
  return (
    <>
      <PageHeader
        isFetching={isLoading}
        cb_refetch={onGetProductsByShop}
        title="Products Grid"
      />
      <ItemsGrid categories={categories} products={products} cb_refetch={onGetProductsByShop} />
    </>
  );
};

export default ProductsGrid;
