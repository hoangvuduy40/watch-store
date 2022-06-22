import styles from './Header.module.scss';
import classNames from 'classnames/bind';

// fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
    faLocationDot,
    faPhone,
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Search from '../Search';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuantityCart, setLogger } from '../../actions/action';

const cx = classNames.bind(styles);
function Header() {
    const listCart = useSelector((state) => state.cart.list);
    const logger = useSelector((state) => state.cart.logger);
    const NavBar = useRef();
    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY >= 140) {
                NavBar.current.style.position = 'fixed';
                NavBar.current.style.top = '0';
                NavBar.current.style.left = '0';
            } else {
                NavBar.current.style.position = '';
            }
        });
        return () => {
            document.removeEventListener('srcoll', () => {
                console.log('a');
            });
        };
    }, []);
    const [total, setTotal] = useState();
    const CartRef = useRef();
    const dispatch = useDispatch();
    const handleDeleteCart = (product) => {
        const action = deleteQuantityCart(product);
        dispatch(action);
    };

    useEffect(() => {
        if (listCart) {
            let TotalCart = 0;
            for (let i = 0; i < listCart.length; i++) {
                TotalCart += listCart[i].price * listCart[i].quantity;
            }
            setTotal(TotalCart);
        }
        if (logger == true) {
            CartRef.current.style.display = 'block';
            setTimeout(() => {
                CartRef.current.style.display = '';
                const action = setLogger();
                dispatch(action);
            }, 5000);
        }
    }, [listCart]);

    return (
        <header className={cx('wapper')}>
            <div className={cx('top-bar')}>
                <div className={cx('topbar-container')}>
                    <div className={cx('topbar-text')}>
                        <div className={cx('text-address')}>
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div>
                                <p>
                                    319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM
                                </p>
                            </div>
                        </div>
                        <div className={cx('text-phone')}>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <p>076 922 0162</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('topbar-icon')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('inner')}>
                <div className={cx('inner-container')}>
                    <div className={cx('inner-logo')}>
                        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png" />
                    </div>
                    <Search />
                    <div className={cx('inner-cart')}>
                        <div className={cx('icon-tym')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>

                        <div className={cx('icon-cart')}>
                            <div className={cx('length')}>
                                {listCart.length}
                            </div>
                            <Link to={'/cart'}>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </Link>
                            {isNaN(listCart) ? (
                                <div ref={CartRef} className={cx('cart')}>
                                    {listCart.map((product, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={cx('cart-item')}
                                            >
                                                <Link
                                                    to={`/product/${product.id}`}
                                                >
                                                    <img
                                                        src={`${product.image}`}
                                                        alt=""
                                                    />
                                                </Link>
                                                <div className={cx('text')}>
                                                    <Link
                                                        to={`/product/${product.id}`}
                                                    >
                                                        <p
                                                            className={cx(
                                                                'name',
                                                            )}
                                                        >
                                                            {product.name}
                                                        </p>
                                                    </Link>
                                                    <p>
                                                        {product.price}
                                                        &nbsp;USD x
                                                        {product.quantity}
                                                    </p>
                                                </div>

                                                <button
                                                    style={{
                                                        fontSize: '2rem',
                                                        backgroundColor:
                                                            'white',
                                                        paddingLeft: '5px',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() =>
                                                        handleDeleteCart(
                                                            product,
                                                        )
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCircleXmark}
                                                    />
                                                </button>
                                            </div>
                                        );
                                    })}
                                    <div className={cx('Sum')}>
                                        <p>Tổng Phụ:&nbsp;{total}&nbsp;USD</p>
                                    </div>
                                    <div className={cx('button')}>
                                        <Link to={'/cart'}>
                                            <button>XEM GIỎI HÀNG</button>
                                        </Link>
                                        <button className={cx('tt')}>
                                            <Link to={'/thanh-toan'}>
                                                THANH TOÁN
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div ref={CartRef} className={cx('cart')}>
                                    <h3>
                                        Bạn chưa có sản phẩm nào trong giỏ hàng!
                                    </h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div ref={NavBar} className={cx('header-nav')}>
                <div className={cx('nav-container')}>
                    <li className={cx('nav-item')}>
                        <Link to={'/'}>TRANG CHỦ</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={'/gioi-thieu'}>GIỚI THIỆU</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={'/dong-ho-nam'}>ĐỒNG HỒ NAM</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={'/dong-ho-nu'}>ĐỒNG HỒ NỮ</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={'/blog'}>BLOG</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={'/contact'}>LIÊN HỆ</Link>
                    </li>
                </div>
            </div>
        </header>
    );
}

export default Header;
