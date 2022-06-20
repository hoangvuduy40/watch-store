import Styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import FormRegister from '../../components/FormRegister';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getAllBlog } from '../../services/requestApi';

const cx = classNames.bind(Styles);

function Blog() {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            const { data } = await getAllBlog();
            setBlog(data);
        };
        getAll();
    }, []);
    const dateMonth = (t) => {
        const options = { month: 'long' };
        return new Intl.DateTimeFormat('en-US', options).format(t);
    };
    return (
        <div className={cx('wapper')}>
            <div className={cx('title')}>
                <h1>BLOGS</h1>
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <div className={cx('btn-search')}>
                        <input
                            className={cx('input-search')}
                            placeholder="Tìm Kiếm..."
                        />
                        <button className={cx('btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    <div className={cx('blog-list')}>
                        <h3>BÀI VIẾT MỚI</h3>
                        <div className={cx('table-blog')}>
                            {blog.map((blog) => {
                                return (
                                    <div
                                        key={blog.id}
                                        className={cx('blog-item')}
                                    >
                                        <img src={blog.image} alt="" />
                                        <p>{blog.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('listblog')}>
                        {blog.map((blog) => {
                            const time = new Date(blog.date);

                            return (
                                <div key={blog.id} className={cx('blog-item')}>
                                    <div className={cx('time-icon')}>
                                        <h3>{time.getDate()}</h3>
                                        <p>{dateMonth(time)}</p>
                                    </div>
                                    <img src={blog.image} />
                                    <div className={cx('text')}>
                                        <h3>{blog.title}</h3>
                                        <div></div>
                                        <p>{blog.content}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <FormRegister />
        </div>
    );
}

export default Blog;
