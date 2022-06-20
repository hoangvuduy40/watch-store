import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './Cart.module.scss';
import classNames from 'classnames/bind';

import FormRegister from '../../components/FormRegister';
import Table from './Table';

const cx = classNames.bind(style);
function Cart() {
    const listCart = useSelector((state) => state.cart.list);

    const [total, setTotal] = useState();
    useEffect(() => {
        if (listCart) {
            let TotalCart = 0;
            for (let i = 0; i < listCart.length; i++) {
                TotalCart += listCart[i].price * listCart[i].quantity;
            }
            setTotal(TotalCart);
        }
    }, [listCart]);

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
                    <div className={cx('Cart')}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={cx('product')} colSpan="3">
                                        Sản phẩm
                                    </th>
                                    <th className={cx('price')}>Giá</th>
                                    <th className={cx('quantities')}>
                                        Số lượng
                                    </th>
                                    <th className={cx('sum')}>Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCart.map((product, index) => {
                                    return (
                                        <Table product={product} key={index} />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('Pay')}>
                        <h3>Tổng thanh toán </h3>

                        <div className={cx('item')}>
                            <p>Tổng phụ</p>
                            <p className={cx('price')}>{total}&nbsp;USD</p>
                        </div>
                        <div className={cx('item')}>
                            <p>Giao hàng</p>
                            <div className={cx('ship')}>
                                <p>Giao hàng miễn phí</p>
                                <p>Ước tính phí ship ở Việt Nam</p>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <p>Tổng phụ</p>
                            <p className={cx('price')}>{total}&nbsp;USD</p>
                        </div>
                        <div className={cx('btn')}>
                            <button className={cx('btn-cart')}>
                                <Link to={'/thanh-toan'}>
                                    Tiến Hành Thanh Toán
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <FormRegister />
            </div>
        );
    }
}

export default Cart;
