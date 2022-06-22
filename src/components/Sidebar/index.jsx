import Styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { getAllBlog, getAllPro } from '../../services/requestApi';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);
function Sidebar() {
    const [blog, setBlog] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getBlog = async () => {
            const { data } = await getAllBlog();
            setBlog(data);
        };
        const getProduct = async () => {
            const { data } = await getAllPro();
            setProduct(data);
        };
        getBlog();
        getProduct();
    }, []);
    return (
        <div className={cx('wapper')}>
            <div className={cx('cate')}>
                <h2>DANH MỤC SẢN PHẨM</h2>
                <div className={cx('cate-item')}>
                    <li>Demo</li>
                    <li className={cx('center')}>Demo</li>
                    <li>Sản phẩm</li>
                </div>
            </div>
            <div className={cx('product')}>
                <div className={cx('product-container')}>
                    <h2>SẢN PHẨM</h2>
                    <div className={cx('pro-list')}>
                        {product.map((pro) => {
                            return (
                                <Link
                                    to={`/product/${pro.id}`}
                                    className={cx('pro-item')}
                                    key={pro.id}
                                >
                                    <img src={pro.image} alt="" />
                                    <div className={cx('text')}>
                                        <h3>{pro.name}</h3>
                                        <p>{pro.price} &nbsp;USD</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={cx('blog')}>
                <div className={cx('blog-container')}>
                    <h2>BÀI VIẾT MỚI NHẤT</h2>
                </div>
                <div className={cx('blog-list')}>
                    {blog.map((blog) => {
                        return (
                            <div key={blog.id} className={cx('blog-item')}>
                                <img src={blog.image} alt="" />
                                <div className={cx('text')}>{blog.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
