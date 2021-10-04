// 要素を取得
const quizFloor = document.querySelector('.quiz-floor');
const answerStage = document.querySelector('.answer-stage');
const checkStage = document.querySelector('.check-stage');
const li = document.querySelectorAll('li');
const answerFloor1 = document.querySelector('.answer-floor1');
const answerFloor2 = document.querySelector('.answer-floor2');
const answerFloor3 = document.querySelector('.answer-floor3');
const start = document.querySelector('.start');


// 問題と解答選択肢を格納しています
const questions = [
    ['信号は何色で止まりますか?','赤色','青色','黄色','赤色'],
    ['フュージョンアーツのタイトルポケモンは誰?','レックウザ','ミュウツー','ミュウ','ミュウ'],
    ['もっとも古いプログラミング言語はどれ？','Java','C言語','Python','C言語'],
    ['世界でもっとも人口が多い国は?','中国','アメリカ','インド','中国']
];

// 問題数を格納
const k = [0,1,2,3];
// 乱数を格納する変数
let j ;
let l;
// 正解した問題数を格納
let count = 0;


// スタートボタンを押したら
start.addEventListener('click',function(){
    start.textContent = 'パス';
    question();
});

// 問題を出力するquestion関数
function question(){
    // 正解、不正解を示すcehckStage
    checkStage.textContent = '';
    // 乱数をjに代入
    j = Math.floor(Math.random() * k.length);
    l = k[j];
    // 解答選択肢にinviewを付与
    li.forEach(el =>{
        el.classList.add('inview');
    });
    // クイズの選択肢と問題を欄に記述
    quizFloor.textContent = questions[l][0];
    answerFloor1.textContent = questions[l][1];
    answerFloor2.textContent = questions[l][2];
    answerFloor3.textContent = questions[l][3];
}

// liの要素を一つ一つ取得
li.forEach(liChild =>{
    // 取得し、クリックされたら
    liChild.addEventListener('click',function(){
        checkResult(liChild);
    });
});

// 正誤判定をする関数
function checkResult(checkElement){
    if(checkElement.textContent === questions[l][4]){
        checkStage.textContent = '正解!!';
        // '正解'と示してる間に選択ができないように'inview'クラスを消去
        li.forEach(el =>{
            el.classList.remove('inview');
        });
        answerFloor1.textContent = '';
        answerFloor2.textContent = '';
        answerFloor3.textContent = '';
        // 正解数のカウントを1あげる
        count++;
        start.textContent = '次へ';
        // 問題数の配列kからj番目を削除
        k.splice(j,1);
        if(k.length === 0){
            // もし、k配列の中身が空ならfinish関数へ
            finish();
        }
    }else{
        // 不正解をクリックしたら
        checkStage.textContent = '不正解..';
        // '不正解'と示してる間に選択ができないように'inview'クラスを消去
        li.forEach(el =>{
            el.classList.remove('inview');
        });
        answerFloor1.textContent = '';
        answerFloor2.textContent = '';
        answerFloor3.textContent = '';
        start.textContent = '次へ';
        // 問題数の配列kからj番目を削除
        k.splice(j,1);
    }
}

// 最終画面のfinish関数
function finish(){
    start.addEventListener('click',function(){
        quizFloor.textContent = '正解数:' + count;
        answerStage.textContent = 'また挑戦してね!'
        start.textContent = '終了';
    })
}

