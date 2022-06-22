import Style from '../DetailProduct.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addCartDetail } from '../../../actions/action';

const cx = classNames.bind(Style);
function Detail({ product }) {
    const imgRef = useRef();
    const [index, setIndex] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const handleClick = (index) => {
        setIndex(index);
        const image = imgRef.current.children;
        for (let i = 0; i < image.length; i++) {
            image[i].className = image[i].className.replace(
                cx('active'),
                cx(''),
            );
        }
    };
    const handlePrev = (src) => {
        const image = imgRef.current.children;
        if (index === 0) {
            setIndex(index + 3);
        } else if (index <= src.length - 1) {
            setIndex(index - 1);
        }
        for (let i = 0; i < image.length; i++) {
            image[i].className = image[i].className.replace(
                cx('active'),
                cx(''),
            );
        }
    };
    const handleNext = (src) => {
        const image = imgRef.current.children;
        if (index >= src.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        for (let i = 0; i < image.length; i++) {
            image[i].className = image[i].className.replace(
                cx('active'),
                cx(''),
            );
        }
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleChange = (e) => {
        var value = e.target.value.replace(/[^0-9]/, '');
        value = value === '' ? 1 : value;
        value = parseInt(value);

        setQuantity(value);
    };
    useEffect(() => {
        const image = imgRef.current.children;
        image[index].className = cx('active');
    }, [index, quantity]);
    const dispatch = useDispatch();

    const listCart = useSelector((state) => state.cart.list);

    const handleAddCart = (pro) => {
        const data = listCart.filter((data) => data.id === pro.id);
        if (isNaN(data)) {
            const q = +data.map((data) => {
                return data.quantity;
            });
            const a = {
                ...pro,
                quantity: quantity + q,
            };
            const action = addCartDetail(a);
            dispatch(action);
        } else {
            const a = {
                ...pro,
                quantity: quantity,
            };
            const action = addCartDetail(a);
            dispatch(action);
        }
    };
    return (
        <div className={cx('detail-pro')}>
            <div className={cx('image-pro')}>
                <div className={cx('main')}>
                    <div
                        onClick={(e) => handlePrev(product.src)}
                        className={cx('prev')}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <img
                        className={cx('MainImg')}
                        src={product.src[index]}
                        alt=""
                    />
                    <div
                        onClick={(e) => handleNext(product.src)}
                        className={cx('next')}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
                <div ref={imgRef} className={cx('group-image')}>
                    {product.src.map((img, index) => {
                        return (
                            <img
                                key={index}
                                onClick={(e) => handleClick(index)}
                                className={cx('small-img')}
                                src={img}
                                alt=""
                            />
                        );
                    })}
                </div>
            </div>
            <div className={cx('content-pro')}>
                <div className={cx('link')}>TRANG CHỦ/ ĐỒNG HỒ NAM</div>
                <div className={cx('pro')}>
                    <div className={cx('name-pro')}>
                        <h1> {product.name}</h1>
                    </div>
                    <div className={cx('price-pro')}>{product.price}</div>
                    <div className={cx('contentPro')}>{product.content}</div>
                    <div className={cx('cate-pro')}>
                        <li>Sku: P006</li>
                        <li>Categories: Butter, Eggs, Cultured Butter</li>
                        <li>Tag: Man</li>
                    </div>
                    <div className={cx('pro-button')}>
                        <span onClick={handleDecrement}>-</span>
                        <input
                            type="text"
                            value={quantity}
                            onChange={handleChange}
                        />
                        <span onClick={handleIncrement}>+</span>
                        <button onClick={(e) => handleAddCart(product)}>
                            THÊM VÀO GIỎ
                        </button>
                    </div>
                </div>
                <div className={cx('ship')}>
                    <div className={cx('Left')}>
                        <h3>Tính phí ship tự động</h3>
                        <div className={cx('img')}>
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ghtk.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ghn.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ninja-van.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-shipchung.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-viettle-post.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vn-post.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx('Right')}>
                        <h3>Thanh Toán</h3>
                        <div className={cx('img')}>
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-acb.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-techcombank.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vib.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vcb.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-paypal.jpg"
                                alt=""
                            />
                            <img
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-mastercard.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('description')}>"{product.description}"</div>
            </div>
        </div>
    );
}

export default Detail;
