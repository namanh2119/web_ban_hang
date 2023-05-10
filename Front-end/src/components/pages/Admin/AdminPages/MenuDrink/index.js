import classNames from "classnames/bind";
import styles from './MenuDrink.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);


function MenuDrink() {
    return ( <div className={cx('wapper')}>
    <div className={cx('header')}>
        <span>Danh sách Đồ Uống</span>
        <button><FontAwesomeIcon icon={faPlus}/> Thêm mới</button>
    </div>
    <div className={cx('container')}>
        <div className={cx('col-name' , 'row', 'col')}>
            <span className={cx('l-1')}>ID</span>
            <span className={cx('l-2')}>Ảnh</span>
            <span className={cx('l-3')}>Tên</span>
            <span className={cx('l-2')}>Giá</span>
            <span className={cx('l-2')}>Trạng thái</span>
        </div>
        <div className={cx('products-menu')}>
            <span className={cx('l-1')}>1</span>
            <div
                className={cx('product-image', 'l-2')}
                style={{
                    backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`,
                }}
            ></div>
            <span className={cx('l-3')}>Suất Cơm sườn nấu niêu</span>
            <span className={cx('l-2')}>120000</span>
            <span className={cx('l-2')}>Còn hàng</span>
            <span className={cx('l-1', 'action')}>Chi tiết</span>
            <span className={cx('l-1', 'action')}>Xóa</span>
        </div>
    </div>
</div> );
}

export default MenuDrink;