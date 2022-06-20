import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import Popper from '../Popper';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import Styles from './Search.module.scss';

import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';

const cx = classNames.bind(Styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                debounced,
            )}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => {
                setLoading(true);
                setSearchResult(res.data);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            placement="bottom"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Popper>
                        {searchResult.map((result) => (
                            <h1 className="" key={result.id}>
                                {result.full_name}
                            </h1>
                        ))}
                    </Popper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('inner-search')}>
                <input
                    value={searchValue}
                    placeholder="Tìm kiếm...."
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}
export default Search;
