// components
import PageHeader from "@layout/PageHeader";
import Search from "@ui/Search";
import { CSVLink } from "react-csv";
import ProductManagementTable from "@widgets/ProductManagementTable";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserInfo } from "@store/selector/RootSelector";
import { useGetProductsByShopMutation } from "@store/components/products/productsApi";
import { PAGE_SIZE } from "@utils/constants";
import { useTranslation } from "react-i18next";

const csvData = [
  ["firstname", "lastname", "email"],
  ["John", "Doe", "johndoe@domain.com"],
  ["Jane", "Doe", "janedoe@domain.com"],
];

const ProductsManagement = () => {
  const { t } = useTranslation();

  const userInfo = useSelector(getUserInfo);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState({});
  const [status, setStatus] = useState({});
  const [params, setParams] = useState({
    product_shop: userInfo?._id,
    limit: PAGE_SIZE,
    page: 1,
  });

  const [getProductsByShop, { isLoading, error }] =
    useGetProductsByShopMutation();

  const onGetProductsByShop = () => {
    getProductsByShop(params)
      .then((res) => {
        const data = res?.data;
        if (data) {
          const {
            countAll,
            totalCount,
            totalPages,
            limit,
            page,
            isDelete,
            isPublished,
            isDraft,
          } = data?.metadata;
          const _products = data?.metadata?.products;
          const _options = { countAll, totalCount, totalPages, limit, page };
          const _status = { isDelete, isPublished, isDraft };
          setStatus(_status);
          setOptions(_options);
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
      })
      .catch(function (err) {
        console.error(err);
      });
    //@ts-ignore
    // const data = res?.data;
    // if (data) {
    //   const {
    //     countAll,
    //     totalCount,
    //     totalPages,
    //     limit,
    //     page,
    //     isDelete,
    //     isPublished,
    //     isDraft,
    //   } = data?.metadata;
    //   const _products = data?.metadata?.products;
    //   const _options = { countAll, totalCount, totalPages, limit, page };
    //   const _status = { isDelete, isPublished, isDraft };
    //   setStatus(_status);
    //   setOptions(_options);
    //   setProducts(
    //     _products.map((ppp) => {
    //       const status = ppp.isDelete
    //         ? "trash"
    //         : ppp.isPublished
    //         ? "publish"
    //         : "draft";
    //       return { ...ppp, status };
    //     })
    //   );
    // }
  };

  useEffect(() => {
    if (params.product_shop) onGetProductsByShop(params);
  }, [params]);

  useEffect(() => {
    setParams({
      product_shop: userInfo?._id,
      limit: PAGE_SIZE,
      page: 1,
    });
  }, [userInfo]);

  const csvData = products.map((product) => {
    const arr = Object.entries(product).map(([key, value]) => value);
    return arr;
  });

  return (
    <>
      <PageHeader
        isFetching={isLoading}
        cb_refetch={onGetProductsByShop}
        title={t("Products Management")}
      />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          {/*           <button className="btn btn--primary">
            Add new product <i className="icon-circle-plus-regular" />
          </button> */}
          <CSVLink className="btn btn--outline blue !h-[44px]" data={csvData}>
            Export CSV <i className="icon-file-export-solid" />
          </CSVLink>
        </div>
        <Search
          query={searchInput}
          setQuery={setSearchInput}
          cb_setParamsSearch={() => {
            setParams((prevState) => ({
              ...prevState,
              page: 1,
              keyword: searchInput,
            }));
          }}
          wrapperClass="lg:w-[326px]"
          placeholder="Search Product"
        />
      </div>
      <ProductManagementTable
        cb_onGetProductsByShop={onGetProductsByShop}
        cb_setParamsPage={(ob) => {
          setParams((prevState) => ({
            ...prevState,
            ...ob,
          }));
        }}
        cb_setParamsStatus={(val) => {
          const statusFilter = {
            all: {},
            trash: { isDelete: true },
            publish: { isDelete: false, isPublished: true },
            draft: { isDelete: false, isPublished: false },
          };
          setParams({
            product_shop: userInfo?._id,
            limit: PAGE_SIZE,
            page: 1,
            ...statusFilter[val],
          });
        }}
        cb_setParamsFilter={(val) => {
          setParams((prevState) => ({
            ...prevState,
            page: 1,
            ...val,
          }));
        }}
        products={products}
        options={options}
        status={status}
        userInfo={userInfo}
      />
    </>
  );
};

export default ProductsManagement;
