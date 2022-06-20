import Styles from './FormRegister.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);
function FormRegister() {
    return (
        <>
            <div className={cx('res-container')}>
                <div className={cx('res')}>
                    <h1>ĐĂNG KÝ NHẬN THÔNG TIN</h1>
                    <div className={cx('from')}>
                        <input placeholder="Email..." />
                        <button>ĐĂNG KÝ</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormRegister;
