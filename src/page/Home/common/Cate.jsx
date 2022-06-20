import { Fragment, useEffect, useState } from 'react';
import Style from '../Home.module.scss';
import classNames from 'classnames/bind';
import ProImg from '../../../assets/images/product-05.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { getAllPro } from '../../../services/requestApi';
import { useDispatch } from 'react-redux';
import { actAddCart } from '../../../actions/action';

const cx = classNames.bind(Style);

function Cate() {
    const [data, setData] = useState([]);
    const seddingPro = [1, 8, 9, 4, 13];
    const seddingP = [2, 6, 7, 12, 15];
    const [spbc, setSpbc] = useState([]);
    const [spkm, setSpkm] = useState([]);
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            const { data } = await getAllPro();
            setData(data);
        };
        getAll();
    }, []);
    useEffect(() => {
        const a = [];
        const b = [];
        for (let i = 0; i < seddingPro.length; i++) {
            data.map((data) => {
                if (data.id == seddingPro[i]) {
                    a.push(data);
                }
            });
        }
        for (let i = 0; i < seddingP.length; i++) {
            data.map((data) => {
                if (data.id == seddingP[i]) {
                    b.push(data);
                }
            });
        }
        setSpbc(a);
        setSpkm(b);
        setNewData(a);
    }, [data]);
    const dispatch = useDispatch();
    const handleAddCart = (pro) => {
        const action = actAddCart(pro, 1);
        dispatch(action);
    };
    return (
        <>
            <div className={cx('cate-pro')}>
                <div className={cx('cate')}>
                    <h2
                        onClick={() => {
                            if (spbc == newData) {
                                return;
                            } else {
                                setNewData(spbc);
                            }
                        }}
                    >
                        Sản phẩm bán chạy
                    </h2>
                    <h2
                        onClick={() => {
                            if (spkm == newData) {
                                return;
                            } else {
                                setNewData(spkm);
                            }
                        }}
                    >
                        Sản phẩm khuyến mãi
                    </h2>
                </div>
                <div className={cx('cate-list')}>
                    {newData.map((product, index) => {
                        return (
                            <div key={index} className={cx('pro-item')}>
                                <div className={cx('icon-heart')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className={cx('img')}>
                                    <img src={product.image} alt="" />
                                </div>
                                <div className={cx('pro-name')}>
                                    {product.name}
                                </div>
                                <div className={cx('pro-price')}>
                                    <p>{product.price} &nbsp;USD</p>
                                </div>
                                <button
                                    onClick={(e) => handleAddCart(product)}
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

export default Cate;
