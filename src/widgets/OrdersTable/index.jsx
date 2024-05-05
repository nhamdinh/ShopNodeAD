// components
import dayjs from "dayjs";
import Spring from "@components/Spring";
import StyledTable from "./styles";
import Pagination from "@ui/Pagination";
import OrderCollapseItem from "@components/OrderCollapseItem";
import Empty from "@components/Empty";

// hooks
import usePagination from "@hooks/usePagination";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

// constants
// import {ORDERS_COLUMN_DEFS} from '@constants/columnDefs';
import RatingStars from "@ui/RatingStars";
import SubmenuTrigger from "@ui/SubmenuTrigger";
import { NavLink } from "react-router-dom";
import { getStatusColor } from "@utils/helpers";
import { formatMoney } from "@utils/commonFunction";
import { useDeliveredOrderMutation } from "@store/components/orders/ordersApi";
import { openToast } from "@store/components/customDialog/toastSlice";
import { useDispatch } from "react-redux";

// data placeholder
// import orders_product from '@db/orders';

const OrdersTable = ({
  category,
  sort,
  ordersProduct,
  categories,
  cb_onGetOrdersByShop,
}) => {
  const dispatch = useDispatch();

  const { width } = useWindowSize();
  const [activeCollapse, setActiveCollapse] = useState("");

  const filteredData =
    category.value === "all"
      ? ordersProduct
      : ordersProduct.filter((order) =>
          order?.product_categories.includes(category.value)
        );
  const sortedData = () => {
    switch (sort.value) {
      default:
      case "default":
        return filteredData;
      case "a-z":
        return filteredData.sort((a, b) =>
          a.product?.product_name.localeCompare(b.product?.product_name)
        );
      case "z-a":
        return filteredData.sort((a, b) =>
          b.product?.product_name.localeCompare(a.product?.product_name)
        );
      case "rating-high-to-low":
        return filteredData.sort(
          (a, b) => b.product_ratings - a.product_ratings
        );
      case "rating-low-to-high":
        return filteredData.sort(
          (a, b) => a.product_ratings - b.product_ratings
        );
    }
  };

  const pagination = usePagination({ data: sortedData(), limit: 5 });

  // go to first page when period or sort changes and reset active collapse
  useEffect(() => {
    pagination.goToPage(0);
    setActiveCollapse("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sort]);

  // reset active collapse when page or window width changes
  useEffect(() => {
    setActiveCollapse("");
  }, [pagination.currentPage, width]);

  const handleCollapse = (SKU) => {
    if (activeCollapse === SKU) {
      setActiveCollapse("");
    } else {
      setActiveCollapse(SKU);
    }
  };

  const getCategory = (value) => {
    return categories.find((category) => category.value === value);
  };

  const ORDERS_COLUMN_DEFS = [
    {
      title: "# order",
      dataIndex: "_id",
      width: "100px",
      render: (text) => (
        <div className="subheading-2 w80px line__clamp__2">#{text}</div>
      ),
    },
    {
      title: "Product",
      dataIndex: "product",
      className: "product-cell",
      render: (product) => (
        <div className="flex gap-6">
          <div className="img-wrapper w-[70px] h-[64px] flex items-center justify-center shrink-0">
            <img
              src={product?.product_thumb_small ?? product?.product_thumb}
              alt={product?.product_name}
            />
          </div>
          <div className="flex-col hidden 2xl:flex">
            <h5 className="text-sm max-w-[195px] mb-1.5 line__clamp__2">
              {product?.product_name}
            </h5>
            <div className="flex flex-col gap-1 text-sm">
              <p>Regular price: ${product?.product_original_price}</p>
              {product?.product_original_price && (
                <p>Sale price: ${product?.product_price}</p>
              )}
            </div>
          </div>
        </div>
      ),
      responsive: ["lg"],
    },
    // {
    //     title: 'SKU',
    //     dataIndex: 'product_id',
    //     render: text => <div className="w80px line__clamp__2">{text}</div>

    // },
    {
      title: "Category",
      dataIndex: "product_categories",
      align: "center",
      render: (product_categories) => (
        <div className="flex items-center gap-4 direction__column">
          {product_categories.map((category, index) => (
            <div className="flex items-center gap-4 " key={index}>
              <div
                className={`badge-icon badge-icon--sm bg-${
                  getCategory(category)?.color
                }`}
              >
                <i className={`${getCategory(category)?.icon} text-base`} />
              </div>
              <span className="label-text capitalize">
                {getCategory(category)?.label}
              </span>
            </div>
          ))}
        </div>
      ),
      responsive: ["lg"],
    },
    {
      title: "Payment",
      dataIndex: "payment",
      render: (payment) => {
        const status =
          payment.totalAmountPay === payment.received
            ? "Fully paid"
            : payment.totalAmountPay > payment.received &&
              payment.received !== 0
            ? "Partially paid"
            : "Unpaid";

        return (
          <div className="flex flex-col">
            <span className="font-heading font-bold text-header">
              {status !== "Fully paid" && `$${payment.received} / from `}$
              {formatMoney(payment.totalAmountPay)}
            </span>
            <span>{status}</span>
          </div>
        );
      },
    },
    {
      title: "Order Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="badge-status badge-status--lg"
          style={{ backgroundColor: `var(--${getStatusColor(status)})` }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Rate",
      dataIndex: "product_ratings",
      render: (rating) => <RatingStars rating={rating} />,
      responsive: ["xl"],
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (date) => (
        <div className="flex flex-col">
          <span>Created At:</span>
          <span className="font-bold text-header">
            {date && dayjs(date).format("DD/MM/YYYY")}
          </span>
        </div>
      ),
      responsive: ["xl"],
    },
    {
      title: "Actions",
      dataIndex: "actions",
      width: "70px",
      align: "center",
      render: (_, record) => {
        const { isDelivered, isPaid } = record;
        return (
          <div className="flex items-center justify-end gap-11">
            {isPaid && !isDelivered && (
              <div
                className="cursor__pointer fw600 shadow__orangered"
                onClick={() => {
                  onPayOrder({ orderId: record?._id });
                }}
              >
                Delivery
                {/* <i className="icon icon-pen-to-square-regular text-lg leading-none" /> */}
              </div>
            )}
            <SubmenuTrigger />
          </div>
        );
      },
    },
  ];

  const [payOrder, { isLoading: LoadingpayOrder }] =
    useDeliveredOrderMutation();

  const onPayOrder = async (values) => {
    await payOrder(values)
      .then((res) => {
        const data = res?.data;
        if (data) {
          if (cb_onGetOrdersByShop) cb_onGetOrdersByShop();
          dispatch(
            openToast({
              isOpen: Date.now(),
              content: "Delivered Order Success",
              step: 1,
            })
          );
        } else {
          const message = res?.error?.data?.message ?? "";
          dispatch(
            openToast({
              isOpen: Date.now(),
              content: message ? message : "Deliver Order Failed",
              step: 2,
            })
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Spring className="flex flex-col flex-1 w-full">
      {width >= 768 ? (
        <StyledTable
          columns={ORDERS_COLUMN_DEFS}
          dataSource={pagination.currentItems()}
          pagination={false}
          locale={{
            emptyText: <Empty text="No orders found" />,
          }}
          rowKey={(record) => record.SKU}
        />
      ) : (
        <div className="flex flex-1 flex-col gap-5 mb-[26px]">
          {pagination.currentItems().map((order) => (
            <OrderCollapseItem
              key={order?.SKU}
              order={order}
              activeCollapse={activeCollapse}
              handleCollapse={handleCollapse}
              categories={categories}
              cb_onPayOrder={(val)=>{
                onPayOrder({ orderId: val })
              }}
            />
          ))}
        </div>
      )}
      {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </Spring>
  );
};

export default OrdersTable;
