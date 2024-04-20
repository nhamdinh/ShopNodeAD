// components
import "./styles.scss";
import Spring from '@components/Spring';
import SubmenuTrigger from '@ui/SubmenuTrigger';
import RatingStars from '@ui/RatingStars';
import {NavLink} from 'react-router-dom';
import { calPerDiscount, formatMoney, formatMoneyCurrency } from "@utils/commonFunction";

const ProductGridItem = ({ product, index, isSlide }) => {
    const Wrapper = isSlide ? 'div' : Spring;
    const wrapperProps = isSlide ? {} : {type: 'slideUp', index};

    return (
        <Wrapper className="ProductGridItem card flex flex-col h-full" {...wrapperProps}>
            <div className="flex items-start gap-[14px] mb-2.5">
                <div className="img-wrapper flex flex-1 items-center justify-center">
                    <img className="img__GridItem" loading="lazy" src={product?.product_thumb_small ?? product?.product_thumb} alt={product.product_name}/>
                </div>
                <SubmenuTrigger/>
            </div>
            <NavLink className={`line__clamp__2 h46px h6 !leading-[1.4] block max-w-[180px] transition hover:text-accent ${isSlide ? 'mb-3' : ''}`}
                     to="/product-editor">
                {product.product_name}
            </NavLink>
            {isSlide && <RatingStars rating={product.product_ratings}/>}
            <div className={`flex flex-col flex-1 ${isSlide ? 'gap-1 mt-1.5' : 'gap-2.5 mt-2.5'}`}>
                <p className="font-heading font-bold text-sm leading-[1.4] text-green">
                    Available : {formatMoney(product.product_quantity) || 0}
                </p>
                <p className="font-heading font-bold text-sm leading-[1.4] text-accent">
                    Already sold : {formatMoney(product.product_sold) || 0}
                </p>
                {
                    !isSlide && (
                        <>
                            <p className="font-heading font-bold text-sm leading-[1.4]">
                                Regular price : $ <span className="underline">{formatMoneyCurrency(product.product_original_price) || 0}</span>
                            </p>
                            <p className="font-heading font-bold text-sm leading-[1.4] ">
                                Sale price : $ <span className="ed1c24">{formatMoneyCurrency(product.product_price) || 0}</span>
                            </p>
                            <p className="font-heading font-bold text-sm leading-[1.4] ">
                            Discount : <span className="ed1c24">- {calPerDiscount(product)} %</span>
                            </p>
                        </>
                    )
                }
            </div>
            {
                !isSlide && (
                    <div className="grid grid-cols-2 gap-1.5 mt-4">
                        <NavLink className="btn btn--outline blue !text-sm" to="/product-editor">
                            <i className="icon icon-pen-solid text-xs"/> Edit
                        </NavLink>
                        <button className="btn btn--outline red !text-sm">Delete</button>
                    </div>
                )
            }
        </Wrapper>
    )
}

export default ProductGridItem