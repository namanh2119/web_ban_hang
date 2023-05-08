import classNames from "classnames/bind";
import styles from './Admin.module.scss'
import Sidebar from "./Sidebar";
import HeaderAd from "./HeaderAd";

const cx = classNames.bind(styles)

function Admin({children}) {
    return (<div>
        <HeaderAd />
        <main className={cx('container', 'row', 'col')}>
            <Sidebar className={cx('sidebar-wrapper', 'l-2')}/>
            <div className={cx('pages-ad', 'l-10')}>{children}</div>
        </main>
     </div> );
}

export default Admin;
