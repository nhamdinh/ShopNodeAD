// styles
import "swiper/css";

// components
import Spring from "@components/Spring";
import CategoryHeader from "@ui/CategoryHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductGridItem from "@components/ProductGridItem";
import { Pagination } from "swiper/modules";
import { sortProducts } from "@utils/helpers";

// data placeholder
// import products from '@db/products';

const TopSalesByCategories = ({
  category = "electronic",
  dataProducts = [],
  categories = [],
}) => {
  const category_id = categories.find((ccc) => ccc?.label === category)?.value;
  const categoryProducts = sortProducts(
    dataProducts.filter((product) =>
      product?.product_categories.includes(category_id)
    ),
    "best-selling"
  ).slice(0, 6);
  return (
    <Spring className="flex flex-col gap-5">
      <CategoryHeader category={category} />
      <div className="w-full">
        <Swiper
          className="!p-2.5 !-m-2.5"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={26}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
          speed={1300}
          rewind={false}
          loop
        >
          {categoryProducts.map((product) => (
            <SwiperSlide className="!h-auto" key={product._id}>
              <ProductGridItem product={product} isSlide />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Spring>
  );
};

export default TopSalesByCategories;
