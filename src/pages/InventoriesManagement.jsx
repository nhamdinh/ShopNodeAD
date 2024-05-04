// components
import PageHeader from "@layout/PageHeader";
import Search from "@ui/Search";
import { CSVLink } from "react-csv";
import InventoriesManagementTable from "@widgets/InventoriesManagementTable";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getUserInfo } from "@store/selector/RootSelector";
import { useGetInventoriesByShopMutation } from "@store/components/products/productsApi";
import { PAGE_SIZE_8 } from "@utils/constants";
import { useTranslation } from "react-i18next";
import { updateNestedObjectParser } from "@utils/commonFunction";

const csvData = [
  ["firstname", "lastname", "email"],
  ["John", "Doe", "johndoe@domain.com"],
  ["Jane", "Doe", "janedoe@domain.com"],
];

const InventoriesManagement = () => {
  const { t } = useTranslation();

  const userInfo = useSelector(getUserInfo);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const zzz = products.map((product) => {
    return {
      ...product.sku_product_id,
      ...product,
    };
  });
  const [options, setOptions] = useState({});
  const [status, setStatus] = useState({});
  const [params, setParams] = useState({
    shopId: userInfo?._id,
    limit: PAGE_SIZE_8,
    page: 1,
    orderByKey: "_id",
    orderByValue: -1,
  });

  const [getInventoriesByShop, { isLoading, error }] =
    useGetInventoriesByShopMutation();

  const onGetInventoriesByShop = async () => {
    const res = await getInventoriesByShop(params);
    //@ts-ignore
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
        skus,
      } = data?.metadata;
      const _products = skus;
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
  };

  useEffect(() => {
    if (params.shopId) onGetInventoriesByShop(params);
  }, [params]);

  useEffect(() => {
    setParams({
      shopId: userInfo?._id,
      limit: PAGE_SIZE_8,
      page: 1,
      orderByKey: "_id",
      orderByValue: -1,
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
        cb_refetch={onGetInventoriesByShop}
        title={t("Inventories Management")}
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
      <InventoriesManagementTable
        cb_onGetProductsByShop={onGetInventoriesByShop}
        cb_setParamsPage={(ob) => {
          setParams((prevState) => ({
            ...prevState,
            ...ob,
          }));
        }}
        cb_setParamsStatus={(val) => {
          const statusFilter = {
            all: {},
            // trash: { isDelete: true },
            publish: { isDelete: false, isPublished: true },
            draft: { isDelete: false, isPublished: false },
          };
          setParams({
            shopId: userInfo?._id,
            limit: PAGE_SIZE_8,
            page: 1,
            orderByKey: "_id",
            orderByValue: -1,
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
        products={products.map((product) => {
          return {
            ...product.sku_product_id,
            ...product,
          };
        })}
        options={options}
        status={status}
        userInfo={userInfo}
        page_size={PAGE_SIZE_8}
      />
    </>
  );
};

export default InventoriesManagement;
