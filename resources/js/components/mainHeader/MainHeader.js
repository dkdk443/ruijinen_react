import './mainHeader.scss'
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <>
            <div className="mainHeader">
                <div className="logo">logo</div>
                <div className="header_buttons">ログイン</div>
                <Link to="friends">tomodati</Link>
            </div>
        </>
    )
}

export default MainHeader;
