import { Link } from 'react-router-dom';
const Start = () => {
    return (
        <>
            <div className="startPage">
                <nav className="startPage__nav">
                    <div className="nav__right">
                        <div className="button--mypage">マイページ</div>
                        <button className="button--login">ログイン</button>
                    </div>
                </nav>
                <div className="startPage__content">
                    <h2>人間関係を円滑にする</h2>
                    <h1>類人猿分類</h1>
                    <div className="buttons">
                        <Link to="/questions"><button className="button button--start">診断スタート</button></Link>
                        <button className="button button--toFriends">友だちリスト</button>
                        <button className="button button--addFriends">友だち追加</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Start;
