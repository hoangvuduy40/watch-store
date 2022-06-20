import Styles from './Slider.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);
function Slider() {
    return (
        <div className={cx('container')}>
            <div className={cx('wapper')}>
                <div className={cx('slider-box')}>
                    <div className={cx('slider-text')}>
                        <h3>Mono Watch</h3>
                        <br />
                        <h1>Đồng hồ Classico</h1>
                        <div className={cx('content')}>
                            Cùng với sự phát triển không ngừng của thời trang
                            thế giới, rất nhiều thương hiệu cho ra đời những mẫu
                            đồng hồ nam chính hãng đa dạng về phong cách, kiểu
                            dáng, màu sắc, kích cỡ…
                        </div>
                    </div>

                    <button>Xem sản phẩm</button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
