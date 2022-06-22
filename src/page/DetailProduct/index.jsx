import Style from './DetailProduct.module.scss';
import classNames from 'classnames/bind';
import FormRegister from '../../components/FormRegister';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Detail from './components/Detail';
import Comment from './components/Comment';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailPro, getAllPro } from '../../services/requestApi';

const cx = classNames.bind(Style);
function DetailProduct() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        try {
            const detailPro = async () => {
                const { data } = await getDetailPro(id);
                setProductDetail(data);
            };
            const getAll = async () => {
                const { data } = await getAllPro();
                setProduct(data);
            };
            detailPro();
            getAll();
        } catch (error) {
            console.log(error);
        }
    }, [id]);
    return (
        <div className={cx('wapper')}>
            {productDetail && <Detail product={productDetail} />}
            <Comment />
            <div className={cx('product-sale')}>
                <h3>SẢN PHẨM TƯƠNG TỰ</h3>
                <div className={cx('pro-list')}>
                    {product.map((pro) => {
                        return (
                            <div key={pro.id} className={cx('product-item')}>
                                <div className={cx('icon-heart')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className={cx('pro-img')}>
                                    <img src={pro.image} alt="" />
                                </div>
                                <div className={cx('pro-name')}>{pro.name}</div>
                                <div className={cx('pro-price')}>
                                    <p>{pro.price}</p>
                                </div>
                                <button className={cx('btn-cart')}>
                                    THÊM VÀO GIỎ
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <FormRegister />
        </div>
    );
}

export default DetailProduct;
