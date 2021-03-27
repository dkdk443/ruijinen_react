import { useState, useEffect } from 'react';
const TypeResult = (props) => {
    useEffect(() => {
        // calcResult(props);


    }, [])

    // const calcResult = (props) => {
    //     console.log(props);
    //     const data = props.location.state;
    //     console.log(data);
    //     const maxData = data.reduce((a, b) => {
    //         a.point > b.point ? a : b
    //     });
    //     console.log(maxData);
    // }



    return (
        <div className="result">
            <h1>診断結果</h1>
            <div className="box box--column">
                <p>あなたは…</p>
                <div className="detail">感情豊かな寂しがりや</div>
                <div className="typeName">ボノボタイプです！</div>

            </div>
            <div className="box box--center">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" viewBox="0 0 741 693">
                    <g id="typeGraph" data-name="typeGraph" transform="translate(-647 -1013)">
                        <g id="chimpBox" data-name="chimpBox" transform="translate(742 1096)" fill="none">
                        <path d="M32,0H212a32,32,0,0,1,32,32V212a32,32,0,0,1-32,32H32A32,32,0,0,1,0,212V32A32,32,0,0,1,32,0Z" stroke="none"/>
                        <path d="M 32 3 C 28.08369445800781 3 24.2861328125 3.766326904296875 20.71282958984375 5.277740478515625 C 17.25987243652344 6.738204956054688 14.158203125 8.829635620117188 11.493896484375 11.493896484375 C 8.829635620117188 14.158203125 6.738204956054688 17.25987243652344 5.277740478515625 20.71282958984375 C 3.766326904296875 24.2861328125 3 28.08369445800781 3 32 L 3 212 C 3 215.9163055419922 3.766326904296875 219.7138671875 5.277740478515625 223.2871704101562 C 6.738204956054688 226.7401275634766 8.829635620117188 229.841796875 11.493896484375 232.506103515625 C 14.158203125 235.1703643798828 17.25987243652344 237.2617950439453 20.71282958984375 238.7222595214844 C 24.2861328125 240.2336730957031 28.08369445800781 241 32 241 L 212 241 C 215.9163055419922 241 219.7138671875 240.2336730957031 223.2871704101562 238.7222595214844 C 226.7401275634766 237.2617950439453 229.841796875 235.1703643798828 232.506103515625 232.506103515625 C 235.1703643798828 229.841796875 237.2617950439453 226.7401275634766 238.7222595214844 223.2871704101562 C 240.2336730957031 219.7138671875 241 215.9163055419922 241 212 L 241 32 C 241 28.08369445800781 240.2336730957031 24.2861328125 238.7222595214844 20.71282958984375 C 237.2617950439453 17.25987243652344 235.1703643798828 14.158203125 232.506103515625 11.493896484375 C 229.841796875 8.829635620117188 226.7401275634766 6.738204956054688 223.2871704101562 5.277740478515625 C 219.7138671875 3.766326904296875 215.9163055419922 3 212 3 L 32 3 M 32 0 L 212 0 C 229.673095703125 0 244 14.326904296875 244 32 L 244 212 C 244 229.673095703125 229.673095703125 244 212 244 L 32 244 C 14.326904296875 244 0 229.673095703125 0 212 L 0 32 C 0 14.326904296875 14.326904296875 0 32 0 Z" stroke="none" fill="#db5e5e"/>
                        </g>
                        <g id="bonoboBox" data-name="bonoboBox" transform="translate(1052 1094)" fill="none" stroke="#e6869d" strokeWidth="3">
                        <rect width="244" height="244" rx="32" stroke="none"/>
                        <rect x="1.5" y="1.5" width="241" height="241" rx="30.5" fill="none"/>
                        </g>
                        <g id="oraBox" data-name="oraBox" transform="translate(742 1381)" fill="none" stroke="#618c99" strokeWidth="3">
                        <rect width="244" height="244" rx="32" stroke="none"/>
                        <rect x="1.5" y="1.5" width="241" height="241" rx="30.5" fill="none"/>
                        </g>
                        <g id="goriraBox" data-name="goriraBox" transform="translate(1052 1381)" fill="none" stroke="#81b97a" strokeWidth="3">
                        <rect width="244" height="244" rx="32" stroke="none"/>
                        <rect x="1.5" y="1.5" width="241" height="241" rx="30.5" fill="none"/>
                        </g>
                        <line id="yokoline" data-name="yokoline" x2="510" transform="translate(765 1359)" fill="none" stroke="#707070" strokeLinecap="square" strokeWidth="3"/>
                        <path id="tateline" data-name="tateline" d="M0,0V512.662" transform="translate(1019 1112.338)" fill="none" stroke="#707070" strokeWidth="3"/>
                        <text id="feel" transform="translate(960 1048)" fill="#4a4a4a" fontSize="40" fontFamily="HiraginoSans-W6, Hiragino Sans"><tspan x="0" y="0">感情的</tspan></text>
                        <text id="logic" transform="translate(964 1701)" fill="#4a4a4a" fontSize="40" fontFamily="HiraginoSans-W6, Hiragino Sans"><tspan x="0" y="0">論理的</tspan></text>
                        <text id="安_定_志_向" data-name="安
                    定
                    志
                    向" transform="translate(1348 1308)" fill="#4a4a4a" fontSize="40" fontFamily="HiraginoSans-W6, Hiragino Sans"><tspan x="0" y="0">安</tspan><tspan y="0" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700"></tspan><tspan x="0" y="44">定</tspan><tspan y="44" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700"></tspan><tspan x="0" y="88">志</tspan><tspan y="88" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700"></tspan><tspan x="0" y="132">向</tspan></text>
                        <text id="追_求_達_成_志_向" data-name="追
                    求
                    達
                    成
                    志
                    向" transform="translate(647 1278)" fill="#4a4a4a" fontSize="40" fontFamily="HiraginoSans-W6, Hiragino Sans"><tspan x="0" y="0">追</tspan><tspan y="0" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700"></tspan><tspan x="0" y="44">求</tspan><tspan y="44" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700"></tspan><tspan x="0" y="88">達</tspan><tspan y="88" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700"></tspan><tspan x="0" y="132">成</tspan><tspan y="132" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700"></tspan><tspan x="0" y="176">志</tspan><tspan y="176" fontFamily="DINCondensed-Bold, DIN Condensed" fontWeight="700"></tspan><tspan x="0" y="220">向</tspan></text>
                    </g>
                    </svg>

            </div>
            <div className="box">キーワード</div>
            <div className="box">強み</div>
             <div className="box">弱み</div>
        </div>
    )
}

export default TypeResult;
