const Login = () => {
    return (
        <div className="login">
            <div className="content">
                <h1>ログイン</h1>
                <div className="sns">
                    <h2>SNSでログイン</h2>
                    <div className="snsButtons">
                        <div className="snsButton snsButton--google">Googleでログイン</div>
                        <div className="snsButton snsButton--twitter">Twitterでログイン</div>
                        <div className="snsButton snsButton--line">LINEでログイン</div>
                </div>
            </div>
                <h2>メールアドレスでログイン</h2>
                <div className="mail">
                    <form action="" method="post">
                        <input type="email" name="" id="" placeholder="メールアドレス"/>
                        <input type="password" name="" id="" placeholder="パスワード"/>
                        <button type="submit">ログイン</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;
