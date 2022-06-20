import style from './Pay.module.scss';
import classNames from 'classnames/bind';
import FormRegister from '../../components/FormRegister';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addCart } from '../../services/requestApi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { deleteCart } from '../../actions/action';

const cx = classNames.bind(style);
function Pay() {
    const listCart = useSelector((state) => state.cart.list);
    const [total, setTotal] = useState();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (listCart) {
            const pro = [];
            let TotalCart = 0;
            for (let i = 0; i < listCart.length; i++) {
                TotalCart += listCart[i].price * listCart[i].quantity;
                pro.push({ name: listCart[i].name, sl: listCart[i].quantity });
            }
            setProduct(pro);
            setTotal(TotalCart);
        }
    }, [listCart]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const onHandleSubmit = async (data) => {
        await addCart({ ...data, product });
        navigate('/');
        const action = deleteCart();
        dispatch(action);
    };

    if (!isNaN(listCart)) {
        return (
            <div className={cx('wappers')}>
                <h1>Bạn chưa có sản phẩm nào trong giỏ hàng</h1>
                <Link to={'/dong-ho-nam'}>
                    <button className={cx('btn-cart')}>
                        Quay lại mua hàng
                    </button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={cx('wapper')}>
                <div className={cx('container')}>
                    <div className={cx('form-pay')}>
                        <div>
                            <h3>THÔNG TIN THANH TOÁN</h3>
                        </div>

                        <form
                            className={cx('form')}
                            onSubmit={handleSubmit(onHandleSubmit)}
                        >
                            <div className={cx('item')}>
                                <label className={cx('name')}>Tên đệm:*</label>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    {...register('tenDem', {
                                        required: true,
                                    })}
                                />
                                {errors.tenDem && <span>Không để trống </span>}
                            </div>
                            <div className={cx('item-name')}>
                                <label className={cx('name')}>Tên:*</label>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    {...register('Name', {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Za-z]/,
                                            message: 'Tên người không có số',
                                        },
                                    })}
                                />
                                {errors.Name &&
                                    errors.Name.type === 'required' && (
                                        <span>Không để trống</span>
                                    )}
                                {errors.Name &&
                                    errors.Name.type === 'pattern' && (
                                        <span>{errors.Name.message}</span>
                                    )}
                            </div>
                            <div className={cx('items')}>
                                <label className={cx('name')}>Địa chỉ:*</label>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    {...register('address', { required: true })}
                                />
                                {errors.address && <span>Không để trống</span>}
                            </div>
                            <div className={cx('items')}>
                                <label className={cx('name')}>
                                    Tỉnh/Thành Phố:*
                                </label>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    {...register('city', { required: true })}
                                />
                                {errors.city && <span>Không để trống</span>}
                            </div>
                            <div className={cx('items')}>
                                <label className={cx('name')}>
                                    Số điện thoại:*
                                </label>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    {...register('phone', {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9+-]+$/,
                                            message:
                                                'Sai định dạng số điện thoại',
                                        },
                                    })}
                                />
                                {errors.phone &&
                                    errors.phone.type === 'required' && (
                                        <span>Không để trống</span>
                                    )}
                                {errors.phone &&
                                    errors.phone.type === 'pattern' && (
                                        <span>{errors.phone.message}</span>
                                    )}
                            </div>
                            <div className={cx('items')}>
                                <label className={cx('name')}>
                                    Địa chỉ email:*
                                </label>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Sai định dạng email',
                                        },
                                    })}
                                />
                                {errors.email &&
                                    errors.email.type === 'required' && (
                                        <span>{errors.email.message}</span>
                                    )}
                                {errors.email &&
                                    errors.email.type === 'pattern' && (
                                        <span>Sai định dạng email</span>
                                    )}
                            </div>
                            <div className={cx('items')}>
                                <label className={cx('name')}>
                                    Ghi chú đơn hàng(tùy chọn)
                                </label>
                                <textarea
                                    className={cx('form-text')}
                                    type="text"
                                    {...register('note')}
                                    placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                                />
                            </div>
                        </form>
                    </div>
                    <div className={cx('pay')}>
                        <h3>ĐƠN HÀNG CỦA BẠN</h3>
                        <div className={cx('pay-item')}>
                            <h4>SẢN PHẨM</h4>
                            <h4>TỔNG</h4>
                        </div>
                        {listCart.map((product, index) => {
                            return (
                                <div key={index} className={cx('pay-product')}>
                                    <div className={cx('left')}>
                                        <p>{product.name}&nbsp;</p>
                                        <p>x{product.quantity}</p>
                                    </div>
                                    <div className={cx('price')}>
                                        <p>{product.price}&nbsp;USD</p>
                                    </div>
                                </div>
                            );
                        })}
                        <div className={cx('pay-item')}>
                            <h5>Tổng phụ</h5>
                            <p className={cx('price')}>{total}&nbsp;USD</p>
                        </div>
                        <div className={cx('pay-item')}>
                            <h5>Giao hàng</h5>
                            <p
                                style={{
                                    opacity: '60%',
                                }}
                            >
                                Giao hàng miễn phí
                            </p>
                        </div>
                        <div className={cx('pay-item')}>
                            <h5>Tổng</h5>
                            <p className={cx('price')}>{total}&nbsp;USD</p>
                        </div>
                        <form
                            className={cx('pay-items')}
                            onSubmit={handleSubmit(onHandleSubmit)}
                        >
                            <div className={cx('radio')}>
                                <input
                                    type="radio"
                                    defaultValue="ttcod"
                                    {...register('radio', { required: true })}
                                />

                                <label>Trả tiền mặt khi nhận hàng</label>
                            </div>
                            <div className={cx('radio')}>
                                <input
                                    type="radio"
                                    defaultValue="ttck"
                                    {...register('radio', { required: true })}
                                />

                                <label>Chuyển khoản ngân hàng</label>
                            </div>
                            <div>
                                {errors.radio && <span>Không bỏ trống</span>}
                            </div>
                        </form>

                        <form
                            className={cx('pay-btn')}
                            onSubmit={handleSubmit(onHandleSubmit)}
                        >
                            <button type="submit">Đặt hàng</button>
                        </form>
                    </div>
                </div>
                <FormRegister />
            </div>
        );
    }
}

export default Pay;
