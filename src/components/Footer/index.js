import Styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faLocationDot,
    faPhone,
    faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';

import { faSkype } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(Styles);
function Footer() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('container')}>
                <div className={cx('section-content')}>
                    <div className={cx('content')}>
                        <div className={cx('content-title')}>
                            THÔNG TIN LIÊN HỆ
                        </div>
                        <div className={cx('content-item')}>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>
                                    319 C16 Lý Thường Kiệt, Phường 15, Quận 11,
                                    Tp.HCM
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <p>076 922 0162</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelopeSquare} />
                                <p>
                                    demonhunterg@gmail.com <br /> mon@mona.media
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faSkype} />
                                <p>demonhunterp</p>
                            </li>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-title')}>LIÊN KẾT</div>
                        <div className={cx('content-item')}>
                            <li>Giới thiệu</li>
                            <li>Đồng hồ nam</li>
                            <li>Đồng hồ nữ</li>
                            <li>Blogs</li>
                            <li>Liên hệ</li>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-title')}>HỖ TRỢ</div>
                        <div className={cx('content-item')}>
                            <li>Hướng dẫn mua hàng</li>
                            <li>Hướng dẫn thanh toán</li>
                            <li>Chính sách bảo hành</li>
                            <li>Chính sách đổi trả</li>
                            <li>Tư vấn khách hàng</li>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-title')}>
                            TẢI ỨNG DỤNG TRÊN
                        </div>
                        <div className={cx('content-item')}>
                            <p>
                                Ứng dụng Mocha Watch hiện có sẵn trên Google
                                Play và AppStore. Tải nó ngay
                            </p>
                            <img
                                width="181"
                                height="45"
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-googleplay.jpg"
                                alt=""
                            />
                            <img
                                width="181"
                                height="45"
                                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-appstore.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-text')}>
                <div className={cx('text')}>
                    <p>
                        © Bản quyền thuộc về . Thiết kế website MonaMedia Mona
                        Media
                    </p>
                    <div>
                        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-payment.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
