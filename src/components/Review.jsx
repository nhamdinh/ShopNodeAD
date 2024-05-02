// components
import SubmenuTrigger from '@ui/SubmenuTrigger';
import RatingStars from '@ui/RatingStars';
import Timestamp from '@ui/Timestamp';
import TruncatedText from '@components/TruncatedText';
import Spring from '@components/Spring';
import ModalBase from '@ui/ModalBase';

// hooks
import {useTheme} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';
import useMeasure from 'react-use-measure';
import {useState, useEffect} from 'react';

// utils
import dayjs from 'dayjs';

const placeholder = {
    name: 'John',
    lastName: 'Doe',
    email: 'email@domain.com',
    rating: 5,
    avatar: 'https://via.placeholder.com/63x63',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt.',
    createdAt: new Date()
}

const User = ({data = placeholder, wrapperClass}) => {
    return (
        <div className={`flex items-center ${wrapperClass}`}>
            <img className="bg-input-border shrink-0 w-10 h-10 rounded-md md:w-[63px] md:h-[63px]"
                 src={data?.avatar}
                 alt={`${data?.name} ${data?.lastName}`}
                 width={63}
                 height={63} />
            <div className="flex flex-col gap-1.5 md:gap-2.5">
                <h6 className="truncate max-w-[120px] xs:max-w-[180px]">
                    {data?.name} {data?.lastName}
                </h6>
                <a className="comment-btn" href={`mailto:${data?.email}`}>
                   <span className="truncate max-w-[120px] xs:max-w-[180px]">
                         {data?.email}
                   </span>
                </a>
            </div>
        </div>
    )
}
const Product = ({data = placeholder, wrapperClass}) => {
    return (
        <div className={`flex items-center ${wrapperClass}`}>
            <img className="bg-input-border shrink-0 w-10 h-10 rounded-md md:w-[63px] md:h-[63px]"
                 src={data?.product_thumb_small ?? data?.product_thumb}
                 alt={`${data?.product_name}`}
                 width={63}
                 height={63} />
            <div className="flex flex-col gap-1.5 md:gap-2.5">
                <h6 className="truncate max-w-[120px] xs:max-w-[180px]">
                    {data?.product_name}
                </h6>
                <div className="comment-btn">
                   <span className="truncate max-w-[120px] xs:max-w-[180px]">
                         $ {data?.product_price}
                   </span>
                </div>
            </div>
        </div>
    )
}

const Review = ({data = placeholder, index = 0}) => {
    const {theme} = useTheme();
    const {width} = useWindowSize();
    const [ref, {width: refWidth}] = useMeasure();
    const bgColor = theme === 'light' ? 'var(--body)' : 'rgba(39,50,65,.2)';

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setModalOpen(false);
    }, [width]);

    return (
        <Spring index={index}>
            <div className="p-5" style={{backgroundColor: index % 2 === 0 ? bgColor : 'var(--widget)'}}>
                <div className="flex items-center justify-between">
                    <User data={data?.userId} wrapperClass="gap-5 md:gap-[30px] md:w-[300px]" />
                    <Product data={data?.productId} wrapperClass="gap-5 md:gap-[30px] md:w-[300px]" />
                    {
                        width >= 768 &&
                        <div className="flex items-center gap-[18px] xl:ml-[30px] xl:mr-10 xl:w-[200px]">
                            <RatingStars rating={data?.rating} />
                            <span className="label-comment">{data?.rating}</span>
                        </div>
                    }
                    {
                        width >= 1280 &&
                        <div className="flex flex-1 gap-5 bg-input-bg border border-input-border h-20 rounded-md
                             max-w-[588px] p-4 overflow-hidden">
                            <div className="flex-1 max-w-[513px]" ref={ref}>
                                <TruncatedText className="flex-1" text={data?.comment} width={refWidth} />
                            </div>
                            <button className="self-start icon comment-[18px] mt-1"
                                    onClick={() => setModalOpen(true)}
                                    aria-label="See details">
                                <i className="icon-message-arrow-up-right-regular"/>
                            </button>
                        </div>
                    }
                    {
                        width >= 1024 &&
                        <Timestamp date={data?.createdAt} wrapperClass="xl:ml-[30px] xl:mr-[75px]" />
                    }
                    <div className="flex gap-4 items-center">
                        <button className="icon comment-[18px] mt-0.5 xl:hidden"
                                onClick={() => setModalOpen(true)}
                                aria-label="See details">
                            <i className="icon-message-arrow-up-right-regular"/>
                        </button>
                        <SubmenuTrigger/>
                    </div>
                </div>
            </div>
            <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform">
                    <button className="absolute top-5 right-5 icon comment-[18px] transition hover:comment-red"
                            onClick={() => setModalOpen(false)}
                            aria-label="Close">
                        <i className="icon-circle-xmark-regular"/>
                    </button>
                    <User data={data?.userId} wrapperClass="gap-4 mb-5" />
                    <p className="flex gap-4 mb-2">
                        <span className="label-comment">Date: </span>
                        <span className="comment-sm font-medium">
                            {dayjs(data?.createdAt).format('DD/MM/YYYY, hh:mm A')}
                        </span>
                    </p>
                    <div className="flex gap-4 mb-6">
                        <span className="label-comment">Rate:</span>
                        <RatingStars rating={data?.rating} />
                    </div>
                    <div className="bg-input-bg rounded-md border border-input-border h-[240px] p-4 overflow-y-auto">
                        {data?.comment}
                    </div>
                </div>
            </ModalBase>
        </Spring>
    )
}

export default Review