const Register = () => {
    return (
        <div className="login">
            <div className="content">
                <h1>新規登録</h1>
                <div className="sns">
                    <h2>SNSで登録</h2>
                    <div className="snsButtons">
                        <div className="snsButton snsButton--google">Googleで新規登録</div>
                        <div className="snsButton snsButton--twitter">Twitterで新規登録</div>
                        <div className="snsButton snsButton--line">LINEで新規登録</div>
                </div>
            </div>
                <h2>メールアドレスで登録</h2>
                <div className="mail">
                    <form action="" method="post">
                        <input type="text" name="" id="" placeholder="ニックネーム"/>
                        <input type="email" name="" id="" placeholder="メールアドレス"/>
                        <input type="password" name="" id="" placeholder="パスワード"/>
                        <button type="submit">新規登録</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;
