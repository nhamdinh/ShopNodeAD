// components
import { uid } from "uid";
import dayjs from "dayjs";

import PageHeader from "@layout/PageHeader";
import CalendarSelector from "@components/CalendarSelector";
import Select from "@ui/Select";
import OrdersAverageRate from "@widgets/OrdersAverageRate";
import OrdersInfobox from "@components/OrdersInfobox";
import OrdersTable from "@widgets/OrdersTable";

// hooks
import { useState, useEffect } from "react";

// constants
import { PRODUCT_CATEGORIES, ORDER_SORT_OPTIONS } from "@constants/options";
import { useSelector } from "react-redux";
import { getUserInfo } from "@store/selector/RootSelector";
import { useGetOrdersByShopMutation } from "@store/components/orders/ordersApi";
import { PAGE_SIZE_1, PAGE_SIZE_999 } from "@utils/constants";

const Orders = () => {
  const [category, setCategory] = useState(PRODUCT_CATEGORIES[0]);
  const [sort, setSort] = useState(ORDER_SORT_OPTIONS[0]);

  const userInfo = useSelector(getUserInfo);

  const [Paid, setPaid] = useState(0);
  const [Delivered, setDelivered] = useState(0);
  const [Canceled, setCanceled] = useState(0);
  const [Refunded, setRefunded] = useState(0);

  const [ordersProduct, setOrdersProduct] = useState([]);
  const [params, setParams] = useState({
    shopId: userInfo?._id,
    limit: PAGE_SIZE_999,
    page: 1,
  });

  useEffect(() => {
    setParams({
      shopId: userInfo?._id,
      limit: PAGE_SIZE_999,
      page: 1,
    });
  }, [userInfo]);

  const [getOrdersByShop, { isLoading, error }] = useGetOrdersByShopMutation();

  const onGetOrdersByShop = async () => {
    const res = await getOrdersByShop(params);
    //@ts-ignore
    const data = res?.data;
    if (data) {
      const { isPaid, isDelivered, isCanceled, isRefunded, orders } =
        data?.metadata;

      setPaid(isPaid);
      setDelivered(isDelivered);
      setCanceled(isCanceled);
      setRefunded(isRefunded);

      const checkedProducts = orders.flatMap((order) => order.itemProducts);

      const setStatus = ({ isPaid, isDelivered, isCanceled, isRefunded }) => {
        if (isRefunded === true) return "refunded";
        if (isCanceled === true) return "cancelled";
        if (isDelivered === true) return "confirmed";
        if (isPaid === true) return "completed";
        return "completed";
      };
      const _ordersProduct = checkedProducts.map((pro, index) => {
        const orderFound = orders.find((order) => order._id === pro.order_id);
        const { isPaid, isDelivered, isCanceled, isRefunded } = orderFound;
        return {
          ...orderFound,
          product_id: pro._id,
          product_ratings: pro.product_ratings,
          product_type: pro.product_type,
          payment: {
            totalAmountPay: orderFound.totalAmountPay,
            received: orderFound.isPaid ? orderFound.totalAmountPay : 0,
          },
          status: setStatus({ isPaid, isDelivered, isCanceled, isRefunded }),
          SKU: uid() + index,
          product: pro,
        };
      });
      setOrdersProduct(_ordersProduct);
    }
  };

  useEffect(() => {
    if (params.shopId) onGetOrdersByShop(params);
  }, [params]);

  return (
    <>
      <PageHeader title="Orders" />
      <div className="flex flex-col flex-1 gap-5 md:gap-[26px]">
        <div
          className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[26px] lg:grid-cols-4 lg:items-end
                     xl:grid-cols-6"
        >
          <CalendarSelector
            wrapperClass="lg:max-w-[275px] lg:col-span-2 xl:col-span-4"
            id="ordersPeriodSelector"
            cb_setRangeDate={(val) => {
              const createdAt = {
                gte: dayjs(val[0]).format(),
                lt: dayjs(val[1]).format(),
              };
              setParams({
                shopId: userInfo?._id,
                limit: PAGE_SIZE_999,
                page: 1,
                createdAt,
              });
            }}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[26px] md:col-span-2">
            <Select
              value={category}
              options={PRODUCT_CATEGORIES}
              onChange={setCategory}
              placeholder="Product category"
            />
            <Select
              value={sort}
              options={ORDER_SORT_OPTIONS}
              onChange={setSort}
              placeholder="Default sorting"
            />
          </div>
        </div>
        <div className="w-full widgets-grid grid-cols-1 xl:grid-cols-6">
          <div className="xl:col-span-2">
            <OrdersAverageRate />
          </div>
          <div className="widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4">
            <OrdersInfobox
              title="Paid"
              count={Paid * PAGE_SIZE_1}
              icon={<i className="icon-check-to-slot-solid" />}
            />
            <OrdersInfobox
              title="Delivered"
              count={Delivered * PAGE_SIZE_1}
              color="green"
              icon={<i className="icon-list-check-solid" />}
            />
            <OrdersInfobox
              title="Canceled"
              count={Canceled * PAGE_SIZE_1}
              color="red"
              icon={<i className="icon-ban-solid" />}
            />
            <OrdersInfobox
              title="Refunded"
              count={Refunded * PAGE_SIZE_1}
              color="badge-status-bg"
              icon={<i className="icon-rotate-left-solid" />}
            />
          </div>
        </div>
        <OrdersTable
          ordersProduct={ordersProduct}
          category={category}
          sort={sort}
        />
      </div>
    </>
  );
};

export default Orders;
