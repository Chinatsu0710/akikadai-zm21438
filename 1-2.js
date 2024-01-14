function hyoji(){
  //表示する文字
var str ="がんばれ！！城西ソフトボール部！";
  //テキストボックスの文字数
var cnt=document.timer.moji.value.length;
  //文字が全部表示されているか確認
if(cnt<11){
  //現在より１文字多く切り出して表示
  document.timer.moji.value=str.substr(0,cnt+1);}
  else{
  //すべて表示されたら、空文字の戻す
  document.timer.moji.value="";}}
function startfnc(){
  //関数hyoji()を1000ミリ秒間隔で呼び出す
setInterval("hyoji()",1000);}

const str='Mozilla';
console.log(str.substr(1,2));
//expected output:"oz"
console.log(str.substr(2));
//expected output:"zilla"
