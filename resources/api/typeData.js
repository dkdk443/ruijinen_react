const database = [
    {
      id: 1,
      type:'チンパンジー',
      detail:'勝ち負け重視のリーダー',
      text:'考えるよりも即行動。やるからには何がなんでも勝ちにかかる競争・闘争タイプ。誰もやったことのないことに取り組むチャレンジ精神も旺盛ですが、仲間から評価されないとやる気をなくしてしまいます。',
      point: 0,
      keyword: '勝利',
      keywords:['積極的', '高い行動力', '競争心', '合理的', 'すばやい決断', 'リーダーシップ'],
      keywordComment: `勝たなければ意味なし`,
      typeColor: '#E34242',
      good:['スピードがある', '決断力がある', '競争心が強い', '高いコミュニケーション能力'],
      bad:['嫉妬心が強い', '勝つためなら手段を選ばない', '起こりっぽい'],
      goodAts:['リーダー役', '新規開拓', '対人交渉'],
      notGoodAts:['地味なルーティンワーク', '成果の見えにくい仕事', '単純作業'],
      likes:['勝つこと', '他人からの評判や称賛', '目に見える成果'],
      dislikes: ['負けること', '結果に結びつかない', '理屈やルール', '否定的な評価'],
      x: 'tsuikyu',
      y: 'feel',
       comments:{
        a: '負けず嫌いな'
      }
    },
    {
      id: 2,
      type:'ボノボ',
      detail:'感情豊かな寂しがりや',
      text: '相手の感情に同調し、気持ちを察することが得意な共感タイプ。チーム内の人間関係のトラブル解決や、ムードメーカー的な役割を担います。また消費者の空気を敏感に感じ取り、サービス向上のアイディア立案などでも力を発揮します。',
      point: 0,
      keyword: '共感',
      keywords: ['感情が豊か', '他人に共感できる', '論理より気持ち','依存心'],
      keywordComment: `共感してもらえなきゃ寂しい`,
      typeColor: '#F497A9',
      good:['相手の気持ちに寄り添えること', '高いコミュニケーション力', '場の空気を明るくできる'],
      bad:['依存心が強い','言動に一貫性がない'],
      goodAts:['接客','職場のムードづくり','販促物作成', '新人のフォローアップ'],
      notGoodAts:['責任の多い仕事', '裁量の多い仕事', '論理的思考力が求められる仕事'],
      likes:['雑談', '気持ちに寄り添った言葉'],
      dislikes: ['競争', '理屈', 'ひとりぼっち'],
      x: 'antei',
      y: 'feel',
       comments:{
        a: '共感力の高い'
      }
    },
    {
      id: 3,
      type:'ゴリラ',
      detail:'平和主義でちょっと小心者',
      point: 0,
      keyword: '調和',
      keywordComment: `争いごとは嫌です`,
      keywords: ['生真面目', '仲間思い', '臆病', 'ルーティン', '物静か', '敬意', '年功序列'],
      text: '地味で目立たないけれど、コツコツと物事をこなしていく堅実な調和タイプ。自分のことよりも家族や会社の秩序が大事で、秩序やルールを守るためには、見かけによらないパワーを発揮します。',
      typeColor: '#82B761',
      tweetUrl: '',
      good:['真面目', '仲間思い', '優しい'],
      bad:['杓子定規で融通が利かない', '急な予定変更に弱い', '競争心が少ない'],
      goodAts: ['ルーティンワーク', 'ルールの遵守・伝達', '管理業務', '会議の司会や記録係'],
      notGoodAts:['クリエイティブな仕事', '裁量の多い仕事', 'インパクトの必要な仕事'],
      likes:['安定', 'ルール', '役割分担'],
      dislikes: ['争いごと', '競争', 'アクシデント'],
      x: 'antei',
      y: 'cool',
      comments:{
        a: '平和主義の'
      }
    },
    {
      id: 4,
      type:'オランウータン',
      detail:'職人気質のこだわりや',
      text:'ひとりで黙々と自分の世界に入り込む、職人気質のこだわり屋。自分の世界を邪魔されたくないので、あまり感情表現が豊かではありませんが、実は内側に熱い思いを秘めています。とにかく納得いくまで自分の世界を突き詰めます。',
      keyword: '納得',
      keywords:['一匹狼', '他人との距離感（余地）', '感情を表に出さない', 'マイペース', '自分の世界が大事', '内に秘めた情熱'],
      keywordComment: `納得できないと動きません`,
      typeColor: '#6587AF',
      good:['高い集中力', '本質を追求する姿勢', '好きなことなら頑張れる'],
      bad:['頑固', '執着心が強すぎる', 'コミュニケーション力がない'],
      goodAts:['企画', '戦略分析', '商品開発'],
      notGoodAts:['チーム運営', 'ルーティンワーク', '接客'],
      likes:['達成', '満足感', 'ひとりの時間'],
      dislikes: ['マニュアル', '決まり', '会議'],
      x:'tsuikyu',
      y: 'cool',
       comments:{
        a: 'こだわり重視の'
      }
    },
]

export default {
  // fetch(id) {
  //   return database
  // },
  find(id) {
    return database.find(el => el.id === id)
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 1000)
  }
}