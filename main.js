const before_text = document.getElementById("before_text");
const after_text = document.getElementById("after_text");
//テキスト変換関数   
function text_replace() {
    
//入力されたテキストを取得（letで宣言しよう）。 ..①
let text_value = before_text.value;
    
//テキストを変換 ..②
text_value = text_value.replace(/にゃ/g,"な");
text_value = text_value.replace(/ニャ/g,"ナ");
text_value = text_value.replace(/ﾆｬ/g,"ﾅ");
text_value = text_value.replace(/nya/g,"na");
text_value = text_value.replace(/Nya/g,"Nya");
text_value = text_value.replace(/NYA/g,"NA");
text_value = text_value.replace(/にぇ/g,"ね");
text_value = text_value.replace(/ニェ/g,"ネ");
text_value = text_value.replace(/ﾆｪ/g,"ﾈ");
text_value = text_value.replace(/nye/g,"ne");
text_value = text_value.replace(/Nye/g,"Ne");
text_value = text_value.replace(/NYE/g,"NE");
  
//変換後のテキストエリアに表示 ..③
after_text.value = text_value;
}
