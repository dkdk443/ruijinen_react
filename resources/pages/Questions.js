import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Questions = () => {
    const questions = [
        {
        question: 'あなたは…',
          answers: [
            {answer:'状況を正確に把握し、分析すること', type_id: 4},
            {answer: '誰よりも早く、成果を上げること', type_id: 1 },
            {answer: '自己主張を抑えて、周囲の調和を保つこと', type_id: 3},
            {answer: '誰とでも仲良くなること', type_id: 2 },
          ]
        },
        {
        question: 'あなたは…',
          answers: [
            {answer:'状況を正確に把握し、分析すること', type_id: 4},
            {answer: '誰よりも早く、成果を上げること', type_id: 1 },
            {answer: '自己主張を抑えて、周囲の調和を保つこと', type_id: 3},
            {answer: '誰とでも仲良くなること', type_id: 2 },
          ]
        },
        {
          question: 'あなたが得意なのは？',
          answers: [
            {answer:'状況を正確に把握し、分析すること', type_id: 4},
            {answer: '誰よりも早く、成果を上げること', type_id: 1 },
            {answer: '自己主張を抑えて、周囲の調和を保つこと', type_id: 3},
            {answer: '誰とでも仲良くなること', type_id: 2 },
          ]
        },
        {
          question: '自分のよくないところは？',
          answers: [
            {answer: '理屈っぽくて人の気持ちがわからないこと', type_id: 4},
            {answer:  '他人の悪いところを攻撃してしまいがちなこと', type_id: 1 },
            {answer:  '融通が利かないこと', type_id: 3},
            {answer:  '感情に流されやすいこと', type_id: 2 },
          ]
        },
         {
          question: 'あなたが桃太郎の劇をするとしたらやりたい役は？',
          answers: [
            {answer: 'やっぱり主役の桃太郎', type_id: 1},
            {answer:  '友達と一緒に犬・猿・キジ', type_id: 2 },
            {answer:  '監督になって理想の作品を作る', type_id: 4},
            {answer:  '目立ちたくないので大道具', type_id: 3 },
          ]
        },
        {
          question: '自分では成功すると思っているにもかかわらず、７割が反対しているプロジェクト。あなたならどうする？',
          answers: [
            {answer:'多数派にしたがって諦める', type_id: 3},
            {answer: 'とりあえず味方の３割だけで進める', type_id: 4 },
            {answer: '７割に対してプレゼンで説得する', type_id: 1},
            {answer: '７割と仲良くなって味方に付けちゃう', type_id: 2 },
          ]
        },
        {
          question: 'あなたが得意なのは？',
          answers: [
            {answer:'誰かの相談にのったりアドバイスをすること', type_id: 2},
            {answer: 'ひとりで黙々と職人的に仕事をすること', type_id: 4 },
            {answer: '誰かを率いてリーダーシップを取ること', type_id: 1},
            {answer: '正確にルーティンワークをこなすこと', type_id: 3 },
          ]
        },
        {
          question: '次の4つのうち、あなたが一番好きなものは？',
          answers: [
            {answer: 'ひとりの時間', type_id: 4},
            {answer:  'ルール', type_id: 3 },
            {answer:  '評価や称賛', type_id: 1},
            {answer:  'おしゃべり', type_id: 2 }
          ]
        },
        {
          question: '次の4つのうち、あなたが一番大事にしているものは？',
          answers: [
            {answer: '勝利', type_id: 1},
            {answer:  '調和', type_id: 3 },
            {answer:  '納得', type_id: 4},
            {answer:  '共感', type_id: 2 }
          ]
        }
    ]

    const questionLength = questions.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [bonoboPoint, setBonoboPoint] = useState(0);
    const [chimpPoint, setChimpPoint] = useState(0);
    const [goriraPoint, setGoriraPoint] = useState(0);
    const [oraPoint, setOraPoint] = useState(0);
    const history = useHistory();

    const nextQuetion = (type_id) => {
      if (currentIndex < questionLength - 1) {
          console.log(type_id);
            switch (type_id) {
                case 1:
                    setChimpPoint(chimpPoint+1);
                    break;
                case 2:
                    setBonoboPoint(bonoboPoint+1);
                    break
                case 3:
                    setGoriraPoint(goriraPoint+1);
                    break;
                case 4:
                    setOraPoint(oraPoint+1);
                    break;
            }
          setCurrentIndex(currentIndex + 1);

      } else {
          switch (type_id) {
                case 1:
                    setChimpPoint(chimpPoint+1);
                    break;
                case 2:
                    setBonoboPoint(bonoboPoint+1);
                    break
                case 3:
                    setGoriraPoint(goriraPoint+1);
                    break;
                case 4:
                    setOraPoint(oraPoint+1);
                    break;
            }
          const resultData = [
              { type: 'chimp', point: chimpPoint, type_id: 1 },
              { type: 'bonobo', point: bonoboPoint, type_id: 2},
              { type: 'gorira', point: goriraPoint, type_id: 3 },
              { type: 'ora', point: oraPoint, type_id: 4 },
          ];

          history.push({
            pathname: '/result',
            query: { modal: true },
              state: { data: resultData }
        })


        }
    }



    return (
        <>
        <div className="questions">

        <div className="question">
            <div className="question__index">Q. { currentIndex + 1}</div>
            <div className="question__content">
                { questions[currentIndex].question }
            </div>
        </div>
        <div className="answers">
            {
                questions[currentIndex].answers.map((answer, index) => {
                    return (
                        <div
                            className="answer"
                            key={index}
                            onClick={() => nextQuetion(answer.type_id)}>{index + 1}. {answer.answer}</div>
                    )
                })
            }
        </div>
           1 / 10
        <div className="gage">
          <span></span>
        </div>
      </div>
        </>
    )
}

export default Questions;
