import Styles from './Watchman.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import FormRegister from '../../components/FormRegister';
import { useEffect, useState } from 'react';
import { getAllPro } from '../../services/requestApi';
import { useDispatch } from 'react-redux';
import { actAddCart } from '../../actions/action';
const cx = classNames.bind(Styles);
function Watchman() {
    const [data, setData] = useState([]);
    const [dataMan, setDataMan] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            const { data } = await getAllPro();
            setData(data);
        };
        getAll();
    }, []);
    useEffect(() => {
        const a = data.filter((data) => data.cateID == 1);
        setDataMan(a);
    }, [data]);

    const dispatch = useDispatch();
    const handleAddCart = (pro) => {
        const action = actAddCart(pro, 1);
        dispatch(action);
    };
    return (
        <div className={cx('wapper')}>
            <div className={cx('container')}>
                <div className={cx('title-top')}>
                    <div className={cx('title')}>
                        <Link to={'/'}> TRANG CHỦ</Link>

                        <p>/ ĐỒNG HỒ NAM</p>
                    </div>
                    <div className={cx('select')}>
                        <p>Hiện thị một kết quả duy nhất</p>
                        <select>
                            <option>Thứ mặc định</option>
                            <option>Thứ tự theo mức độ phổ biến</option>
                            <option>Thứ tự theo điểm đánh giá</option>
                            <option>Mới nhất</option>
                            <option>Thứ tự theo giá: thấp đến cao</option>
                            <option>Thứ theo giá: cao xuống thấp</option>
                        </select>
                    </div>
                </div>
                <div className={cx('content')}>
                    <Sidebar />
                    <div className={cx('list-pro')}>
                        {dataMan.map((pro) => {
                            return (
                                <div
                                    key={pro.id}
                                    className={cx('product-item')}
                                >
                                    <div className={cx('pro-img')}>
                                        <img src={pro.image} alt="" />
                                    </div>
                                    <div className={cx('pro-name')}>
                                        <Link to={`/product/${pro.id}`}>
                                            {pro.name}
                                        </Link>
                                    </div>
                                    <div className={cx('pro-price')}>
                                        <p>{pro.price}&nbsp;USD</p>
                                    </div>
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

                <FormRegister />
            </div>
        </div>
    );
}

export default Watchman;
