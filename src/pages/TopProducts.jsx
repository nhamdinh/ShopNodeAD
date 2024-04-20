// components
import PageHeader from '@layout/PageHeader';
import TopSalesByCategories from '@widgets/TopSalesByCategories';
import TopRetail from '@widgets/TopRetail';
import TopProductsList from '@widgets/TopProductsList';
import { useSelector } from "react-redux";
import { getDataProducts } from '@store/selector/RootSelector';
const TopProducts = () => {
    const dataProducts = useSelector(getDataProducts);
    return (
        <>
            <PageHeader title="Top Products" />
            <div className="widgets-grid grid-cols-1 lg:!gap-10 xl:mb-[50px]">
                <div className="widgets-grid grid-cols-1 xl:grid-cols-[minmax(0,330px)_minmax(0,1fr)]
                    2xl:grid-cols-6">
                    <TopSalesByCategories dataProducts={dataProducts} />
                    <TopRetail dataProducts={dataProducts}/>
                </div>
              <div className="widgets-grid grid-cols-1 lg:grid-cols-2">
                    <TopProductsList dataProducts={dataProducts} />
                    <TopProductsList dataProducts={dataProducts} category="household" />
                </div>
              <div className="widgets-grid grid-cols-1 lg:grid-cols-2">
                    <TopProductsList dataProducts={dataProducts} category="clothing"/>
                    <TopProductsList dataProducts={dataProducts} category="furniture" />
                </div> 
            </div>
        </>
    )
}

export default TopProducts