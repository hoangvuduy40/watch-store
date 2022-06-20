import Styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import FormRegister from '../../components/FormRegister';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocation,
    faPhone,
    faMailBulk,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);
function Contact() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('map')}>
                <div className={cx('container-map')}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4478791335196!2d106.65261921472937!3d10.77696826213081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed189fa855d%3A0xf63e15bfce46baef!2sC%C3%B4ng+ty+TNHH+-+MONA+MEDIA!5e0!3m2!1svi!2s!4v1524639789314" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-container')}>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faLocation} />
                        </div>
                        <div className={cx('text')}>
                            <h2>Địa chỉ:</h2>
                            <p>
                                319 C16 Lý Thường Kiệt, Phường 15, Quận 11,
                                Tp.HCM
                            </p>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className={cx('text')}>
                            <h2>Điện thoại:</h2>
                            <p>
                                <a href="#">1900 636 648</a>
                                <br />
                                Bấm 109 Phòng kinh doanh
                                <br />
                                Bấm 103 Phòng kỹ thuật
                            </p>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faMailBulk} />
                        </div>
                        <div className={cx('text')}>
                            <h2>Email:</h2>
                            <p>
                                demonhunterg@gmail.com
                                <br />
                                mon@mona.media
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('form')}>
                <div className={cx('form-container')}>
                    <input
                        className={cx('form-input')}
                        placeholder="Họ và tên"
                    />
                    <input className={cx('form-input')} placeholder="Email" />
                    <input
                        className={cx('form-input')}
                        placeholder="Số điện thoại"
                    />
                    <input className={cx('form-input')} placeholder="Địa chủ" />
                    <textarea
                        className={cx('form-inputG')}
                        placeholder="Lời nhắn"
                    />
                    <button className={cx('form-btn')}>Gửi</button>
                </div>
            </div>
            <FormRegister />
        </div>
    );
}

export default Contact;
