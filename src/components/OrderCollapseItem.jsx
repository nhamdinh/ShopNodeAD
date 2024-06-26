// components
import Collapse from '@mui/material/Collapse';
import RatingStars from '@ui/RatingStars';
import SubmenuTrigger from '@ui/SubmenuTrigger';
import {NavLink} from 'react-router-dom';

// hooks
import {useWindowSize} from 'react-use';

// utils
import PropTypes from 'prop-types';
import {getStatusColor} from '@utils/helpers';

const OrderCollapseItem = ({order, activeCollapse, handleCollapse, categories, cb_onPayOrder}) => {
    const isExtraSmall = useWindowSize().width < 375;

    const {product_categories, isDelivered, isPaid, _id} = order

    const status = order?.payment.totalAmountPay === order?.payment.received ?
        'Fully paid'
        :
        (order?.payment.totalAmountPay > order?.payment.received && order?.payment.received !== 0) ? 'Partially paid' : 'Unpaid';


    const getCategory = (value) => {
        return categories.find((category) => category.value === value);
    };

    

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <span className="subheading-2">#{order?._id}</span>
                <div className="flex items-center gap-4">
                {isPaid && !isDelivered && (
              <div
                className="cursor__pointer fw600 shadow__orangered"
                onClick={() => {
                    if(cb_onPayOrder) cb_onPayOrder(_id)
                }}
              >
                Delivery
                {/* <i className="icon icon-pen-to-square-regular text-lg leading-none" /> */}
              </div>
            )}
                    <button className={`collapse-btn ${activeCollapse === order?.SKU ? 'active' : ''}`}
                            aria-label="Toggle view"
                            onClick={() => handleCollapse(order?.SKU)}>
                        <i className="icon icon-caret-down-solid"/>
                    </button>


{/*                     <NavLink to="/product-editor" aria-label="Edit">
                        <i className="icon icon-pen-to-square-regular"/>
                    </NavLink> */}
                    <SubmenuTrigger/>
                </div>
            </div>
            <Collapse in={activeCollapse === order?.SKU}>
                <table className="basic-table">
                    <tbody>
                    <tr>
                        <td colSpan={2}>Product</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div className="flex gap-6">
                                <div className="img-wrapper w-[70px] h-[64px] flex items-center justify-center">
                                    <img src={order?.product?.product_thumb_small ?? order?.product?.product_thumb} alt={order?.product?.name}/>
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-sm mb-1.5">{order?.product?.name}</h5>
                                    <div className="flex flex-col gap-1 text-sm text-body-text">
                                        <p>Regular price: ${order?.product?.product_original_price}</p>
                                        {order?.product?.product_original_price && <p>Sale price: ${order?.product?.product_price}</p>}
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>SKU</td>
                        <td>{order?.SKU}</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>
                        {product_categories.map((category, index) => (
                            <span className="label-text capitalize" key={index}>
                            {getCategory(category)?.label + " "}
                            </span>
                        ))}
                            </td>
                    </tr>
                    <tr>
                        <td>Payment</td>
                        <td>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-header">
                                    {status !== 'Fully paid' && `$${order?.payment.received} / from `}
                                    ${order?.payment.totalAmountPay}
                                </span>
                                <span>{status}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td className="capitalize">
                            {
                                isExtraSmall ?
                                    order?.status
                                    :
                                    <span className="badge-status badge-status--lg"
                                          style={{
                                              backgroundColor: `var(--${getStatusColor(order?.status)})`,
                                              width: '100%'
                                          }}>
                                        {order?.status}
                                    </span>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Rate</td>
                        <td>
                            {
                                isExtraSmall ?
                                    order?.product_ratings
                                    :
                                    <div className="flex justify-center">
                                        <RatingStars rating={order?.product_ratings}/>
                                    </div>
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Collapse>
        </div>
    )
}

OrderCollapseItem.propTypes = {
    order: PropTypes.object.isRequired,
    activeCollapse: PropTypes.string.isRequired,
    handleCollapse: PropTypes.func.isRequired
}

export default OrderCollapseItem