// components
import PageHeader from '@layout/PageHeader';
import UserProfileCard from '@widgets/UserProfileCard';
import UserProfileDetails from '@widgets/UserProfileDetails';
import UserProfilePanel from '@widgets/UserProfilePanel';
import UserProfileInfo from '@widgets/UserProfileInfo';
import { useSelector } from 'react-redux';
import { getUserInfo } from '@store/selector/RootSelector';
import { useState } from 'react';

const GeneralSettings = () => {
    const userInfo = useSelector(getUserInfo);
    const [avatar, setImage] = useState("");
    return (
        <>
            <PageHeader title="Settings"/>
            <div className="widgets-grid md:!grid-cols-2 xl:!grid-cols-[340px,_minmax(0,1fr)]">
                <div className="widgets-grid md:!grid-cols-2 md:col-span-2 xl:!grid-cols-1 xl:col-span-1">
                    <UserProfileCard cb_setImage={(val)=>{
                        setImage(val)
                    }} userInfo={userInfo}/>
                    <div className="widgets-grid">
                        <UserProfilePanel/>
                        <UserProfileInfo userInfo={userInfo}/>
                    </div>
                </div>
                <UserProfileDetails avatar={avatar} userInfo={userInfo}/>
            </div>
        </>
    )
}

export default GeneralSettings