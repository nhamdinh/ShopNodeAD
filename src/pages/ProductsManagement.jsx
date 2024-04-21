// components
import PageHeader from '@layout/PageHeader';
import Search from '@ui/Search';
import {CSVLink} from 'react-csv';
import ProductManagementTable from '@widgets/ProductManagementTable';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserInfo } from '@store/selector/RootSelector';
import { useGetProductsByShopQuery } from '@store/components/products/productsApi';

const csvData = [
    ["firstname", "lastname", "email"],
    ["John", "Doe", "johndoe@domain.com"],
    ["Jane", "Doe", "janedoe@domain.com"],
];

const ProductsManagement = () => {
    const userInfo = useSelector(getUserInfo);
    const [products, setProducts] = useState([]);

    const {
        data: dataProducts,
        error,
        isSuccess,
        isFetching ,
        refetch
      } = useGetProductsByShopQuery(
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
          setProducts(_products.map(ppp=>{
                const status = ppp.isDelete ? "trash": ppp.isPublished?"publish":"draft"
            return {...ppp,status}
          }))
        }
      }, [dataProducts]);

     const csvData =  products.map((product) =>{
        const arr = Object.entries(product).map(([key, value]) => (value));
         return arr
      })
    return (
        <>
            <PageHeader isFetching={isFetching} cb_refetch={refetch} title="Products Management" />
            <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
                    <button className="btn btn--primary">
                        Add new product <i className="icon-circle-plus-regular"/>
                    </button>
                    <CSVLink className="btn btn--outline blue !h-[44px]" data={csvData}>
                        Export CSV <i className="icon-file-export-solid"/>
                    </CSVLink>
                </div>
                <Search wrapperClass="lg:w-[326px]" placeholder="Search Product"/>
            </div>
            <ProductManagementTable products={products}/>
        </>
    )
}

export default ProductsManagement