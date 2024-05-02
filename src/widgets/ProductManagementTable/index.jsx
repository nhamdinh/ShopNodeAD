// components
import FilterItem from "@ui/FilterItem";
import Select from "@ui/Select";
import StyledTable from "./styles";
import Empty from "@components/Empty";
import Pagination from "@ui/Pagination";
import ProductManagementCollapseItem from "@components/ProductManagementCollapseItem";

// hooks
import { useState, useEffect } from "react";
import usePaginationApi from "@hooks/usePaginationApi";
import { useWindowSize } from "react-use";

// constants
import {
  PRODUCT_MANAGEMENT_OPTIONS,
  PRODUCT_CATEGORIES_REAL,
  STOCK_STATUS_OPTIONS,
  PRODUCT_TYPE_OPTIONS,
  PRODUCT_SELLER_OPTIONS,
  PRODUCT_ADDITIONAL_OPTIONS,
  PRODUCT_SELECT_OPTIONS,
} from "@constants/options";
import { PRODUCTS_MANAGEMENT_COLUMN_DEFS } from "@constants/columnDefs";
import { PAGE_SIZE } from "@utils/constants";
import { useUpdateStatusProductsByShopMutation } from "@store/components/products/productsApi";
import Loader from "@components/Loader";
import { openToast } from "@store/components/customDialog/toastSlice";
import { useDispatch } from "react-redux";
import { useGetBrandsQuery } from "@store/components/products/productsApi";
import { removeNullObject } from "@utils/commonFunction";
import { useSelector } from "react-redux";
import { getCategories } from "@store/selector/RootSelector";

// data placeholder

const ProductManagementTable = ({
  products = [],
  options,
  status,
  userInfo,
  cb_setParamsPage,
  cb_setParamsStatus,
  cb_setParamsFilter,
  cb_onGetProductsByShop,
}) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const categories = useSelector(getCategories);


  const defaultFilters = {
    stockStatus: null,
    product_categories: null,
    productSeller: null,
    brand: null,
    additionalOptions: null,
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [categoryStatus, setCategoryStatus] = useState("all");
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedAction, setSelectedAction] = useState(null);
  const [activeCollapse, setActiveCollapse] = useState("");

  const getQty = (val) => {
    const statusFilter = {
      all: options?.countAll ?? products.length,
      trash: status?.isDelete ?? 0,
      publish: status?.isPublished ?? 0,
      draft: status?.isDraft ?? 0,
    };
    return statusFilter[val] ?? 0;
    return products.filter((product) => product.status === val).length;
  };

  const handleFilterSelect = ({ value, label }, name) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: { label, value },
    }));
  };

  const handleApplyFilters = () => {
    const filtersRemoveNull = removeNullObject(filters);
    // console.log(filtersRemoveNull)
    const final = {};
    Object.keys(filtersRemoveNull).forEach((key) => {
      if (key === "product_categories") final[key] = filtersRemoveNull[key].value;
      if (key === "brand") final[key] = filtersRemoveNull[key].value;
    });
    if (cb_setParamsFilter) {
      cb_setParamsFilter(final);
      setSelectedRowKeys([]);
      pagination.setCurrentPage(0);
    }
  };

  const [updateStatusProductsByShop, { isLoading, error }] =
    useUpdateStatusProductsByShopMutation();

  const onUpdateStatusProductsByShop = async (values) => {
    const res = await updateStatusProductsByShop(values);
    //@ts-ignore
    const data = res?.data;
    if (data?.metadata) {
      if(cb_onGetProductsByShop) cb_onGetProductsByShop();
      setSelectedRowKeys([]);
      dispatch(
        openToast({
          isOpen: Date.now(),
          content: "Updated Success",
          step: 1,
        })
      );
    } else {
      dispatch(
        openToast({
          isOpen: Date.now(),
          content: "Update Failed",
          step: 2,
        })
      );
    }
  };

  const handleApplyAction = () => {
    const bodyUpdate = PRODUCT_SELECT_OPTIONS.find(
      (ooo) => ooo.value === selectedAction.value
    )?.bodyUpdate;
    const data = {
      ids: selectedRowKeys,
      bodyUpdate,
      product_shop: userInfo?._id,
    };
    onUpdateStatusProductsByShop(data);
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  const dataByStatus = () => {
    if (categoryStatus === "all") return products;
    return products.filter((product) => product.status === categoryStatus);
  };

  const pagination = usePaginationApi({
    ...options,
    data: dataByStatus(),
    limit: PAGE_SIZE,
  });
  // reset active collapse when page or window width changes
  useEffect(() => {
    setActiveCollapse("");
  }, [width]);

  useEffect(() => {
    if (cb_setParamsPage) {
      setSelectedRowKeys([]);
      cb_setParamsPage({
        page: +pagination.currentPage > 0 ? +pagination.currentPage + 1 : 1,
      });
    }
  }, [pagination.currentPage]);

  const handleCollapse = (_id) => {
    if (activeCollapse === _id) {
      setActiveCollapse("");
    } else {
      setActiveCollapse(_id);
    }
  };

  const onSelectChange = (newSelectedRowKeys) => {
    // console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const [brand, setbrand] = useState("All");
  const [brands, setbrands] = useState([]);
  const {
    data: dataBrands,
    error: errBrands,
    isSuccess: isSuccessBrands,
    isLoading: isLoadingBrands,
  } = useGetBrandsQuery(
    {
      page: 1,
      limit: 1000,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );
  useEffect(() => {
    if (isSuccessBrands) {
      setbrands(
        dataBrands?.brands.map((brr) => {
          return {
            value: brr._id,
            label: brr.brand,
          };
        })
      );
    }
  }, [dataBrands]);

  const disabled = selectedRowKeys.length === 0 || !selectedAction;

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-header">Products:</span>
        <div>
          {PRODUCT_MANAGEMENT_OPTIONS.map((option, index) => (
            <FilterItem
              key={`filter-${index}`}
              text={option.label}
              qty={getQty(option.value)}
              value={option.value}
              active={categoryStatus}
              onClick={() => {
                console.log(option.value)
                if (cb_setParamsStatus) {
                  setSelectedRowKeys([]);
                  cb_setParamsStatus(option.value);
                }

                setCategoryStatus(option.value);
                pagination.setCurrentPage(0);
              }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6">
        <Select
          options={STOCK_STATUS_OPTIONS}
          value={filters.stockStatus}
          placeholder="Stock Status"
          onChange={(e) => handleFilterSelect(e, "stockStatus")}
        />
        <Select
          // options={PRODUCT_CATEGORIES_REAL.filter(
          //   (ooo) => ooo.value !== PRODUCT_CATEGORIES_REAL[0]?.value
          // )}
          options={categories}
          value={filters.product_categories}
          placeholder="Product Category"
          onChange={(e) => handleFilterSelect(e, "product_categories")}
        />
        <Select
          options={PRODUCT_SELLER_OPTIONS}
          value={filters.productSeller}
          placeholder="Product Seller"
          onChange={(e) => handleFilterSelect(e, "productSeller")}
        />
        <Select
          options={brands}
          value={filters.brand}
          placeholder="Product Brands"
          onChange={(e) => handleFilterSelect(e, "brand")}
        />
        <Select
          options={PRODUCT_ADDITIONAL_OPTIONS}
          value={filters.additionalOptions}
          placeholder="Additional Options"
          onChange={(e) => handleFilterSelect(e, "additionalOptions")}
        />
        <div className="grid grid-cols-2 gap-3">
          <button
            className="btn btn--secondary !gap-[5px]"
            onClick={handleApplyFilters}
          >
            Apply <i className="icon-chevron-right-regular text-sm" />
          </button>
          <button
            className="btn btn--outline blue !h-[44px]"
            onClick={handleClearFilters}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-4 mt-4 mb-5 md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6">
        <p>View products: {pagination.showingOf()}</p>
        <div>
          <div className="grid grid-cols-2 gap-3">
            <button
              disabled={disabled}
              className="btn btn--outline red !gap-[5px]"
              onClick={handleApplyAction}
            >
              {isLoading ? <Loader radius={30} /> : "Apply Action"}
              <i className="icon-chevron-right-regular text-sm" />
            </button>
            <div className="md:min-w-[280px]">
              <Select
                options={PRODUCT_SELECT_OPTIONS}
                value={selectedAction}
                placeholder="Select Action"
                onChange={(e) => {
                  setSelectedAction(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[22px]">
        {width >= 768 ? (
          <StyledTable
            columns={PRODUCTS_MANAGEMENT_COLUMN_DEFS}
            dataSource={pagination.currentItems()}
            rowKey={(record) => record._id}
            locale={{
              emptyText: <Empty text="No products found" />,
            }}
            rowSelection={{
              type: "checkbox",
              selectedRowKeys,
              onChange: onSelectChange,
            }}
            pagination={false}
          />
        ) : (
          <div className="flex flex-col gap-5">
            {pagination.currentItems().map((product, index) => (
              <ProductManagementCollapseItem
                key={`product-${index}`}
                product={product}
                handleCollapse={handleCollapse}
                activeCollapse={activeCollapse}
              />
            ))}
          </div>
        )}
        {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>
    </div>
  );
};

export default ProductManagementTable;
