// components
import PageHeader from "@layout/PageHeader";
import CustomersInfobox from "@components/CustomersInfobox";
import ReviewsRate from "@widgets/ReviewsRate";
import LatestAcceptedReviews from "@widgets/LatestAcceptedReviews";
import ReviewsScore from "@widgets/ReviewsScore";
import { useGetReviewsByShopQuery } from "@store/components/products/productsApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserInfo } from "@store/selector/RootSelector";
import { PAGE_SIZE } from "@utils/constants";

const Reviews = () => {
  const userInfo = useSelector(getUserInfo);
  const [options, setOptions] = useState({});
  const [reviews, setReviews] = useState([]);
  const [dataRate, setDataRate] = useState([]);
  const [rateAverage, setRateAverage] = useState(0);
  const [params, setParams] = useState({
    page: 1,
    limit: PAGE_SIZE,
    orderByValue: -1,
    orderByKey: "_id",
    shopId: userInfo?._id,
  });
  const { data, error, isSuccess, isLoading } = useGetReviewsByShopQuery(
    params,
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );
  useEffect(() => {
    if (isSuccess) {
      const {
        reviews,
        totalCount,
        totalPages,
        limit,
        page,
        count1,
        count2,
        count3,
        count4,
        count5,
      } = data?.metadata;
      const Positive = (count5 + count5) / totalCount;
      const Negative = 1 - Positive;
      const _options = {
        totalCount,
        totalPages,
        limit,
        page,
        Positive: +(Positive * 100).toFixed(0),
        Negative: +(Negative * 100).toFixed(0),
      };
      const __dataRate = [
        { rate: 5, value: count5 },
        { rate: 4, value: count4 },
        { rate: 3, value: count3 },
        { rate: 2, value: count2 },
        { rate: 1, value: count1 },
      ];
      const totalRate = __dataRate.reduce(
        (acc, item) => +acc + +item?.rate * +item?.value,
        0
      );
      setRateAverage(+(+totalRate / +totalCount).toFixed(1));
      setDataRate(__dataRate);
      setOptions(_options);
      setReviews(reviews);
    }
  }, [data]);

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      shopId: userInfo?._id,
    }));
  }, [userInfo]);

  return (
    <>
        <PageHeader title="Reviews"/>
        <div className="flex flex-col flex-1 gap-5 md:gap-[26px]">
            <div className="grid grid-cols-1 gap-y-5 md:gap-y-[26px] xl:grid-cols-6 xl:gap-x-[26px]">
                <div className="widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4">
                    <ReviewsScore score={rateAverage}/>
                    <CustomersInfobox label="Total"
                                      count={options?.totalCount ?? 0}
                                      color="green"/>
                    <CustomersInfobox label="Positive"
                                      count={options?.Positive ?? 0}
                                      suffix="%"
                                      iconClass="user-plus-solid"/>
                    <CustomersInfobox label="Negative"
                                      count={options?.Negative ?? 0}
                                      suffix="%"
                                      color="red"
                                      iconClass="user-group-crown-solid"/>
                </div>
                <ReviewsRate data={dataRate}/>
            </div>
            <LatestAcceptedReviews reviews={reviews} options={options}
                      cb_setParamsPage={(ob) => {
                        setParams((prevState) => ({
                          ...prevState,
                          ...ob,
                        }));
                      }}
                      cb_setParamsSort={(val) => {
                        setParams((prevState) => ({
                          ...prevState,
                          page: 1,
                          ...val,
                        }));
                      }}
            />
        </div>
    </>
)
};

export default Reviews;
