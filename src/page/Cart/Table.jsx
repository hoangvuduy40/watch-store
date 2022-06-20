import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { deleteAllCart } from '../../actions/action';
import { updateCart } from '../../actions/action';
import { useDispatch } from 'react-redux';
import style from './Cart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function Table({ product }) {
    const handleDeleteCart = (product) => {
        const action = deleteAllCart(product);
        dispatch(action);
    };
    const dispatch = useDispatch();
    const handleUp = (product) => {
        const newQuantity = product.quantity + 1;
        const newProduct = { ...product, quantity: newQuantity };
        const action = updateCart(newProduct);
        dispatch(action);
    };
    const handleDown = (product) => {
        if (product.quantity === 1) {
            return true;
        } else {
            const newQuantity = product.quantity - 1;
            const newProduct = { ...product, quantity: newQuantity };
            const action = updateCart(newProduct);
            dispatch(action);
        }
    };
    return (
        <>
            <tr>
                <td className={cx('product')}>
                    <FontAwesomeIcon
                        onClick={() => handleDeleteCart(product)}
                        icon={faCircleXmark}
                    />
                </td>
                <td className={cx('product')}>
                    <img
                        style={{
                            width: '50px',
                            height: '50px',
                        }}
                        src={`${product.image}`}
                        alt=""
                    />
                </td>
                <td className={cx('name')}>{product.name}</td>
                <td className={cx('price')}>{product.price}&nbsp;USD</td>
                <td className={cx('quantities')}>
                    <button
                        className={cx('down')}
                        onClick={() => handleDown(product)}
                    >
                        -
                    </button>
                    <input
                        className={cx('quantity')}
                        type="text"
                        defaultValue={product.quantity}
                    />
                    <button
                        className={cx('up')}
                        onClick={() => handleUp(product)}
                    >
                        +
                    </button>
                </td>
                <td className={cx('sum')}>
                    {product.price * product.quantity}
                    &nbsp;USD
                </td>
            </tr>
        </>
    );
}

export default Table;
