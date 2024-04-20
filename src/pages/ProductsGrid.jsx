// components
import PageHeader from '@layout/PageHeader';
import ItemsGrid from '@widgets/ItemsGrid';

// hooks
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserInfo } from '@store/selector/RootSelector';
import { useGetPublishedProductsQuery } from '@store/components/products/productsApi';
const ProductsGrid = () => {
    const userInfo = useSelector(getUserInfo);
    const [products, setProducts] = useState([]);

    const {
        data: dataProducts,
        error,
        isSuccess,
        isFetching ,
        refetch
      } = useGetPublishedProductsQuery(
        {
          product_shop: userInfo?._id,
        },
        {
          refetchOnMountOrArgChange: true,
          skip: false,
        }
      );

      useEffect(() => {
        if (isSuccess) {
          const _products = dataProducts?.metadata?.products;
          setProducts(_products)
        }
      }, [dataProducts]);
      // console.log(JSON.stringify(dataFetched[0]))
      // console.log(JSON.stringify(products[0]))
      // console.log(dataFetched)

    return (
        <>
            <PageHeader isFetching={isFetching} cb_refetch={refetch} title="Products Grid" />
            <ItemsGrid products={products} />
        </>
    )
}

export default ProductsGrid