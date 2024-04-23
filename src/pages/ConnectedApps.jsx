// components
import PageHeader from '@layout/PageHeader';
import AppsGrid from '@widgets/AppsGrid';
import { useSelector } from 'react-redux';
import { getUserInfo } from "@store/selector/RootSelector";

const ConnectedApps = () => {
    const userInfo = useSelector(getUserInfo);
    return (
        <>
            <PageHeader title="Connected"/>
            <AppsGrid userInfo={userInfo}/>
        </>
    )
}

export default ConnectedApps