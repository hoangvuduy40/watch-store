import Style from '../DetailProduct.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(Style);
function Comment() {
    const oneRef = useRef();
    const twoRef = useRef();
    const [toggle, setToggle] = useState(1);
    useEffect(() => {
        if (toggle === 1) {
            oneRef.current.style =
                'border-top: 2px solid red;height:41px;margin-bottom:-1px;background-color: #fff; ';
            twoRef.current.style = '';
        } else {
            twoRef.current.style =
                'border-top: 2px solid red;height:41px;margin-bottom:-1px;background-color: #fff; ';
            oneRef.current.style = '';
        }
    }, [toggle]);

    const handleTab = (index) => {
        setToggle(index);
    };
    return (
        <>
            {' '}
            <div className={cx('cm')}>
                <div className={cx('des')}>
                    <li ref={oneRef} onClick={() => handleTab(1)}>
                        MÔ TẢ
                    </li>
                    <li ref={twoRef} onClick={() => handleTab(2)}>
                        ĐÁNH GIÁ
                    </li>
                </div>
                <div className={cx('container')}>
                    <div
                        className={
                            toggle === 1
                                ? cx('des-content active')
                                : cx('des-content')
                        }
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam fringilla augue nec est tristique auctor.
                            Donec non est at libero vulputate rutrum. Morbi
                            ornare lectus quis justo gravida semper. Nulla
                            tellus mi, vulputate adipiscing cursus eu, suscipit
                            id nulla. Pellentesque aliquet, sem eget laoreet
                            ultrices, ipsum metus feugiat sem, quis fermentum
                            turpis eros eget velit. Donec ac tempus ante. Fusce
                            ultricies massa massa. Fusce aliquam, purus eget
                            sagittis vulputate, sapien libero hendrerit est, sed
                            commodo augue nisi non neque. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed tempor, lorem
                            et placerat vestibulum, metus nisi posuere nisl, in
                            accumsan elit odio quis mi. Cras neque metus,
                            consequat et blandit et, luctus a nunc. Etiam
                            gravida vehicula tellus, in imperdiet ligula euismod
                            eget.
                        </p>
                    </div>
                    <div
                        className={
                            toggle === 2 ? cx('commnet active') : cx('comment')
                        }
                    >
                        <div className={cx('container-cm')}>
                            <div className={cx('title')}>
                                <h2>Đánh Giá</h2>
                                <p>Chưa có đánh giá nào</p>
                            </div>
                            <div className={cx('box-cm')}>
                                <h2>Hãy là người nhận xét về sản phẩm</h2>
                                <div className={cx('star')}>
                                    <h5>Đánh giá của bạn</h5>
                                    <div className={cx('value-star')}>
                                        <li>1 sao</li>
                                        <li>2 sao</li>
                                        <li>3 sao</li>
                                        <li>4 sao</li>
                                        <li>5 sao</li>
                                    </div>
                                </div>
                                <div className={cx('form')}>
                                    <div className={cx('form-comment')}>
                                        <label>Nhận xét của bạn*</label>
                                        <textarea />
                                    </div>
                                    <div className={cx('form-author')}>
                                        <label>Tên*</label>
                                        <input placeholder="Tên" required />
                                    </div>
                                    <div className={cx('form-email')}>
                                        <label>Email*</label>
                                        <input placeholder="Email" required />
                                    </div>
                                    <div className={cx('button')}>
                                        <button>GỬI ĐI</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;
