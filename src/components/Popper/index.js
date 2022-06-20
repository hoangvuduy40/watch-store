import Styles from './popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);
function Wapper({ children }) {
    return <div className={cx('wapper')}>{children}</div>;
}

export default Wapper;
