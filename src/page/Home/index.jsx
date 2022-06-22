import Styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Slider from '../../components/Slider';
import Cate from './common/Cate';
import ProSale from './common/ProSale';
import FormRegister from '../../components/FormRegister';
import { Fragment } from 'react';
const cx = classNames.bind(Styles);
function Home() {
    return (
        <Fragment>
            <Slider />
            <div className={cx('container')}>
                <div className={cx('banner-min')}>
                    <div className={cx('banner-minone')}>
                        <div className={cx('text')}>
                            <h3>Xu hướng 2022</h3>
                            <div></div>
                            <h1>ĐỒNG HỒ NAM</h1>
                        </div>
                    </div>
                    <div className={cx('banner-mintwo')}>
                        <div className={cx('text')}>
                            <h3>Xu hướng 2022</h3>
                            <div></div>
                            <h1>ĐỒNG HỒ NỮ</h1>
                        </div>
                    </div>
                </div>
                <ProSale />
                <div className={cx('banner-min')}>
                    <div className={cx('banner-min3')}>
                        <div className={cx('text-banner3')}>
                            <h1>CỔ ĐIỂM</h1>
                            <h3>
                                Đa dạng về phong cách, kiểu dáng, màu sắc, kích
                                cỡ…
                            </h3>
                        </div>
                    </div>
                    <div className={cx('banner-min4')}>
                        <div className={cx('text-banner4')}>
                            <h1>SMART WTACH</h1>
                            <h3>
                                Đa dạng về phong cách, kiểu dáng, màu sắc, kích
                                cỡ…
                            </h3>
                        </div>
                    </div>
                </div>
                <Cate />
                <div className={cx('home-blog')}>
                    <div className={cx('blog-item')}>
                        <img
                            alt=""
                            src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-4.jpg"
                        />
                        <h2>
                            Chiếc đồng hồ của những CEO quyền lực nhất thế giới
                        </h2>
                        <p>
                            Đối với một số doanh nhân, một chiếc đồng hồ đeo tay
                            không chỉ là....
                        </p>
                    </div>
                    <div className={cx('blog-item')}>
                        <img
                            alt=""
                            src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg"
                        />
                        <h2>
                            Chiếc đồng hồ của những CEO quyền lực nhất thế giới
                        </h2>
                        <p>
                            Đối với một số doanh nhân, một chiếc đồng hồ đeo tay
                            không chỉ là....
                        </p>
                    </div>
                    <div className={cx('blog-item')}>
                        <img
                            alt=""
                            src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg"
                        />
                        <h2>
                            Chiếc đồng hồ của những CEO quyền lực nhất thế giới
                        </h2>
                        <p>
                            Đối với một số doanh nhân, một chiếc đồng hồ đeo tay
                            không chỉ là....
                        </p>
                    </div>
                </div>
                <FormRegister />
            </div>
        </Fragment>
    );
}

export default Home;
