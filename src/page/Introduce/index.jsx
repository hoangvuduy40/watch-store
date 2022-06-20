import Styles from './Introduce.module.scss';
import classNames from 'classnames/bind';
import FormRegister from '../../components/FormRegister';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSwatchbook,
    faStar,
    faShield,
    faTimeline,
    faTruckFast,
    faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(Styles);
function Introduce() {
    const divRef = useRef();
    const imgRef = useRef();
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const TopImg = divRef.current.getClientRects()[0].top;
            const Bottom = divRef.current.getClientRects()[0].bottom;
            if (Bottom < 0) return;
            imgRef.current.style = `transform:translate3d(0px, ${-Math.floor(
                window.scrollY / 3,
            )}px,0px );`;
        });
    }, []);
    return (
        <>
            <div>
                <div className={cx('page')}>
                    <div className={cx('page-container')}>
                        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/about-us_bg.jpg" />
                        <div className={cx('text')}>
                            <h1 className={cx('text-title')}>
                                Giới thiệu về Watch Mona
                            </h1>
                            <p>
                                “Cùng với sự phát triển không ngừng của thời
                                trang thế giới, rất nhiều thương hiệu cho ra đời
                                những mẫu đồng hồ nam chính hãng đa dạng về
                                phong cách, kiểu dáng, màu sắc, kích cỡ… Một
                                chiếc đồng hồ nam cao cấp chính hãng khắc họa
                                một giá trị đích thực khi nói đến phụ kiện xa xỉ
                                dành cho phái mạnh. Hiện nay, đồng hồ là phụ
                                kiện thời trang thiết yếu đối với những người
                                đàn ông hiện đại ngày nay. Trên cổ tay của những
                                người đàn ông thành đạt luôn dành vị trí cho một
                                chiếc đồng hồ nam cao cấp.”
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('container-content')}>
                        <div className={cx('content-item')}>
                            <div className={cx('item-icon')}>
                                {' '}
                                <FontAwesomeIcon icon={faSwatchbook} />
                            </div>
                            <div className={cx('item-text')}>
                                <h2>Hàng chính hãng</h2>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            {' '}
                            <div className={cx('item-icon')}>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className={cx('item-text')}>
                                <h2>Sản phẩm mới 100%</h2>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            {' '}
                            <div className={cx('item-icon')}>
                                <FontAwesomeIcon icon={faShield} />
                            </div>
                            <div className={cx('item-text')}>
                                <h2>Bảo hành 12 tháng</h2>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            {' '}
                            <div className={cx('item-icon')}>
                                <FontAwesomeIcon icon={faTimeline} />
                            </div>
                            <div className={cx('item-text')}>
                                <h2>Đổi trả trong vòng 7 ngày</h2>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            {' '}
                            <div className={cx('item-icon')}>
                                <FontAwesomeIcon icon={faTruckFast} />
                            </div>
                            <div className={cx('item-text')}>
                                <h2>Miễn phí giao hàng</h2>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                            </div>
                        </div>
                        <div className={cx('content-item')}>
                            {' '}
                            <div className={cx('item-icon')}>
                                <FontAwesomeIcon icon={faHandHoldingDollar} />
                            </div>
                            <div className={cx('item-text')}>
                                <h2>Giá cả hợp lý</h2>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Inwatch')}>
                    <div className={cx('watch')}>
                        <div ref={divRef} className={cx('watch-inner')}>
                            <img
                                ref={imgRef}
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-portfolio.jpg"
                                alt=""
                            />
                            <div className={cx('bg-overlay')}></div>
                        </div>
                    </div>
                    <div className={cx('watch-container')}>
                        <div className={cx('watch-text')}>
                            <h2>1280</h2>
                            <p>Sản Phẩm</p>
                        </div>
                        <div className={cx('watch-text')}>
                            <h2>8</h2>
                            <p>Giải Thưởng</p>
                        </div>
                        <div className={cx('watch-text')}>
                            <h2>3898</h2>
                            <p>Khách hàng hài lòng</p>
                        </div>
                        <div className={cx('watch-text')}>
                            <h2>25</h2>
                            <p>Chi nhánh cửa hàng</p>
                        </div>
                    </div>
                </div>
                <div className={cx('author')}>
                    <div className={cx('container-author')}>
                        <div className={cx('item-author')}>
                            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-2-150x150.png" />
                            <div className={cx('text')}>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                                <h2>Thúy Kiều</h2>
                            </div>
                        </div>
                        <div className={cx('item-author')}>
                            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-4-150x150.png" />
                            <div className={cx('text')}>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                                <h2>Nguyễn Du</h2>
                            </div>
                        </div>
                        <div className={cx('item-author')}>
                            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-3-150x150.png" />
                            <div className={cx('text')}>
                                <p>
                                    Hiện nay, đồng hồ là phụ kiện thời trang
                                    thiết yếu đối với những người đàn ông hiện
                                    đại ngày nay
                                </p>
                                <h2>Thúy Vân</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <FormRegister />
            </div>
        </>
    );
}

export default Introduce;
