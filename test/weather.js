// selectの値を取得
const select = document.querySelector("select");
// pタグに文章を表示できるようにするために値を取得しておく
const Text = document.querySelector("p");

// 「ユーザーがselectの内容を変更した時」に実行する関数
select.addEventListener("change", setWeather);

// setWeatherの内容を設定。selectの中にあるvalueに設定する。
function setWeather(){
    const choice = select.value;
// もし晴れが選ばれたらの場合。文字列は""で囲う。
    if(choice === "sunny"){
        Text.textContent = 
        "よく晴れるでしょう。洗濯物も完璧に乾きそう！ついでにお布団の日干しもいかがですか？";
    }else if(choice === "rain"){
        Text.textContent =
        "今日は雨が降りそうです。傘やレインコートなどの備えが必要です。";
    }else if(choice === "cloud"){
        Text.textContent = 
        "今日は曇り空です。雨が降ることも予想されますので、念のため折り畳み傘を携帯した方がよいかもしれません。";
    }else if(choice === "snow"){
        Text.textContent = 
        "なんと雪が降ります！予想される降雪量や、夜間にも降り続くか等、今後の予報を確認しましょう。路面凍結にも注意が必要です！外出時はゆっくり気を付けて行きましょう。";
    }else{
        Text.textContent= "";
    }
    
}



