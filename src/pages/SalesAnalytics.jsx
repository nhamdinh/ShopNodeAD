// components
import PageHeader from '@layout/PageHeader';
import MainProfileInfo from '@widgets/MainProfileInfo';
import SalesStats from '@widgets/SalesStats';
import TotalReport from '@widgets/TotalReport';
import TotalBalance from '@components/Banners/TotalBalance';

// hooks
import {useWindowSize} from 'react-use';
import { useTranslation } from 'react-i18next';

const SalesAnalytics = () => {
    const {width} = useWindowSize();
    const { t } = useTranslation();

    return (
        <>
            <PageHeader title={t("Sales Analytics")}/>
            <div className="widgets-grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-[minmax(0,_951px)_minmax(0,_1fr)]">
                <MainProfileInfo/>
                {width >= 1536 && <TotalBalance />}
                <SalesStats/>
                <TotalReport/>
            </div>
        </>
    )
}

export default SalesAnalytics