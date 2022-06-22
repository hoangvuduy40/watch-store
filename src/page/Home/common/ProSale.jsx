import Styles from '../Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllPro } from '../../../services/requestApi';
import { useDispatch } from 'react-redux';
import { actAddCart } from '../../../actions/action';

const cx = classNames.bind(Styles);
function ProSale() {
    const [data, setData] = useState([]);
    const ProSale = [10, 5, 6, 4, 3, 15, 9, 8];
    const [proSale, setProSale] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            const { data } = await getAllPro();
            setData(data);
        };
        getAll();
    }, []);
    useEffect(() => {
        let a = [];
        ProSale.forEach((item) => {
            data.map((data) => {
                if (data.id == item) {
                    return a.push(data);
                }
            });
        });
        setProSale(a);
    }, [data]);
    const trans = { transform: 'translateX(-50%)' };
    const transP = { transform: 'translateX(0%)' };

    const [style, setStyle] = useState({});
    const hanldeNext = () => {
        if (JSON.stringify(style) == JSON.stringify(trans)) {
            setStyle({});
        } else {
            setStyle(trans);
        }
    };
    const hanldePrev = () => {
        if (JSON.stringify(style) == JSON.stringify(transP)) {
            setStyle(trans);
        } else {
            setStyle(transP);
        }
    };
    const dispatch = useDispatch();
    const handleAddCart = (pro) => {
        const action = actAddCart(pro, 1);
        dispatch(action);
    };
    return (
        <>
            <div className={cx('product-sale')}>
                <div className={cx('pro-title')}>
                    <h2>Sản phẩm bán chạy</h2>
                    <div className={cx('btn')}>
                        <button
                            className={cx('prev')}
                            onClick={hanldePrev}
                        >{`<`}</button>
                        <button className={cx('next')} onClick={hanldeNext}>
                            {`>`}
                        </button>
                    </div>
                </div>
                <div style={style} className={cx('pro-list')}>
                    {proSale.map((pro, index) => {
                        return (
                            <div key={index} className={cx('product-item')}>
                                <div className={cx('icon-sale')}>
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                    ></FontAwesomeIcon>
                                    <span>-29%</span>
                                </div>
                                <div className={cx('icon-heart')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                    ></FontAwesomeIcon>
                                </div>
                                <Link to={`/product/${pro.id}`}>
                                    <div className={cx('pro-img')}>
                                        <img src={pro.image} alt="" />
                                    </div>
                                    <div className={cx('pro-name')}>
                                        {pro.name}
                                    </div>
                                    <div className={cx('pro-price')}>
                                        <p>{pro.price}&nbsp;USD</p>
                                    </div>
                                </Link>
                                <button
                                    onClick={(e) => handleAddCart(pro)}
                                    className={cx('btn-cart')}
                                >
                                    THÊM VÀO GIỎ
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ProSale;
