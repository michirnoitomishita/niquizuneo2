// 全体（シャッフル）


//設問① //正解特選カルビ 
$(function () {
  $('#01_02').on('click', function() {


const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
$("#com_hand").text("大正解！特選カルビ");
$("#result").text("「バラ（かたばら）と言われる部分」");
  $("#com_hand").css('color', 'Red');

  


  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
  
} else if (1 <= randomNumber) {
$("#com_hand").text("大正解！特選カルビ");
$("#result").text("「三角バラと言われ旨味ある脂身の部位です」");
  $("#com_hand").css('color', 'Red');


  
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する

}
  
else if (randomNumber <= 1) {
$("#com_hand").text("大正解！特選カルビ");
$("#result").text("1500円（税込）");
  $("#com_hand").css('color', 'Red');

  


  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
  
}
    else {
      // 勝っていない場合、画像を非表示にする
      $("#win-image-container").css("display", "none");

}
    
// 結果をidで指定した場所に表示
  gameCount++;
      updateWinRate();
      updateMatchInfo(); });
  
     
});


    
//設問① // 不正解ロース
$(function () {
  $('#01_01').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
$("#com_hand").text("不正解：ロース");
$("#result").text("きめ細かく肉の風味が楽しめます");
  $("#result").css('color', 'Blue');
   
} else if (1 <= randomNumber) {
$("#com_hand").text("不正解のロース");
$("#result").text("脂身は少なくてとても美味しい");
  $("#result").css('color', 'Blue');
    
}
else if (randomNumber <= 1) {
$("#com_hand").text("不正解のロース");
$("#result").text("ローストビーフが由来となっている");
$("#result").css('color', 'Blue');    
}

// 結果をidで指定した場所に表示
gameCount++;
      updateWinRate();
      updateMatchInfo(); });
    
  
  });

//設問① // 不正解シャトーブリアン
$(function () {
  $('#01_03').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 3) {
  $("#com_hand").text("不正解:シャトーブリアン");
$("#result").text("「ヒレに当たる部位」");
  $("#result").css('color', 'Blue');
     
} else if (1 <= randomNumber) {
$("#com_hand").text("不正解：シャトーブリアン");
$("#result").text("「一頭から3%しかとれない希少部位」");
  $("#result").css('color', 'Blue');
    
}
else if (randomNumber <= 1) {
$("#com_hand").text("不正解：シャトーブリアン");
$("#result").text("「ヒレの中央の肉厚の部分のことをいいます」");
  $("#result").css('color', 'Blue');
 
}
// 結果をidで指定した場所に表示
gameCount++;
      updateWinRate();
      updateMatchInfo();  });
   
  });

  // 質問②
  // プレミアムロース
  // 02-01正解プレミアムロース
$(function () {
  $('#02_01').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
$("#com_hand").text("大正解！プレミアムロース");
$("#result").text("サーロインと呼ばれる部分を贅沢に使用");
  $("#com_hand").css('color', 'Red');
  $("#com_hand").css('color', 'Red');
  // 勝ったときの画像を表示
      $("#win-image-container").css("display", "block");
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
} else if (1 <= randomNumber) {
$("#com_hand").text("大正解！プレミアムロース");
$("#result").text("ロースでは最高の味と言われている");
  $("#com_hand").css('color', 'Red');
  
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
}
else if (randomNumber <= 1) {
$("#com_hand").text("大正解！プレミアムロース");
$("#result").text("価格〇〇円（税込）");
  $("#com_hand").css('color', 'Red');
  $("#com_hand").css('color', 'Red');
  
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
}
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
  });

//設問2 // 0202不正解カイノミ
$(function () {
  $('#02_02').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
$("#com_hand").text("不正解：カイノミ");
$("#result").text("「肩バラという希少部位」");
  $("#result").css('color', 'Blue');
 
} else if (1 <= randomNumber) {
$("#com_hand").text("不正解：カイノミ");
$("#result").text("「ロインにつづく上級部位」");
  $("#result").css('color', 'Blue');
 
}
else if (randomNumber <= 1) {
$("#com_hand").text("不正解：カイノミ");
$("#result").text("1200円（税込）");
  $("#result").css('color', 'Blue');

}
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
  });

//設問① // 不正解ホルモン
$(function () {
  $('#02_03').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 3) {
  $("#com_hand").text("不正解:ホルモン");
$("#result").text("「ヒレに当たる部位」");
  $("#result").css('color', 'Blue');

} else if (1 <= randomNumber) {
$("#com_hand").text("不正解：ホルモン");
$("#result").text("「これもこれで一頭から3%しかとれません」");
  $("#result").css('color', 'Blue');

}
else if (randomNumber <= 1) {
$("#com_hand").text("不正解：ホルモン");
$("#result").text("950円（税込）");
  $("#result").css('color', 'Blue');

}
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
});
  


  // 質問③
  // ハラミ
  // 02-01ハラミ

   // 03-01ハラミ
$(function () {
  $('#03_01').on('click', function() {
  
const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
$("#com_hand").text("不正解！バラロース");
$("#result").text("脂身あるバラの部分を贅沢に使用");
  $("#com_hand").css('color', 'Red');

} else if (1 <= randomNumber) {
$("#com_hand").text("不正解！バラロース");
  $("#result").text("バラでは最高の味と言われている");
  $("#com_hand").css('color', 'Red');

}
else if (randomNumber <= 1) {
$("#com_hand").text("不正解！バラロース");
$("#result").text("価格1450円（税込）");
  $("#com_hand").css('color', 'Red');

}
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
  });

//設問2 // 0202不正解カイノミ
$(function () {
  $('#03_02').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
$("#com_hand").text("不正解：骨付きカルビ");
$("#result").text("「肉味が抜群に強くておすすめ」");
  $("#result").css('color', 'Blue');

} else if (1 <= randomNumber) {
$("#com_hand").text("不正解：骨付きカルビ");
$("#result").text("「脂身も少なくバランスの良い部位」");
  $("#result").css('color', 'Blue');

}
else if (randomNumber <= 1) {
$("#com_hand").text("不正解：骨付きカルビ");
$("#result").text("1250円");
  $("#result").css('color', 'Blue');

}
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
  });

//設問① // 正解ハラミ
$(function () {
  $('#03_03').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 3) {
  $("#com_hand").text("正解：ハラミ");
$("#result").text("「ヒレに当たる部位」");
  $("#result").css('color', 'Red');
  $("#com_hand").css('color', 'Red');
  
  
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
} else if (1 <= randomNumber) {
$("#com_hand").text("正解：ハラミ");
$("#result").text("「一頭から3%しかとれない希少部位」");
  $("#result").css('color', 'Red');
  $("#com_hand").css('color', 'Red');
  
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
}
else if (randomNumber <= 1) {
$("#com_hand").text("正解：ハラミ");
$("#result").text("1550円（税込）");
  $("#result").css('color');
   $("#com_hand").css('color');
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
}
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
});
  


  // 質問④
  //とんちゃん
  // 

  $(function () {
  $('#04_01').on('click', function() {
  
const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
$("#com_hand").text("不正解！博多モツ鍋");
$("#result").text("博多が生み出した大名物");
  $("#com_hand").css('color', '');
  
} else if (1 <= randomNumber) {
$("#com_hand").text("不正解！博多モツ鍋");
$("#result").text("最高の牛モツを使用");
  $("#com_hand").css('color', '');

}
else if (randomNumber <= 1) {
$("#com_hand").text("不正解！博多モツ鍋");
$("#result").text("価格1000円（税込）");
  $("#com_hand").css('color', '');

}
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
  });

//設問2 // 0202不正解ナッチ
$(function () {
  $('#04_02').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
$("#com_hand").text("不正解：ナッチポックン");
$("#result").text("「韓国の激辛蛸鍋」");
  $("#result").css('color', '');

} else if (1 <= randomNumber) {
$("#com_hand").text("不正解：ナッチポックン");
$("#result").text("「テナガダコに加えにんにくコチジャンをふんだんに使ったスタミナ料理」");
  $("#result").css('color', '');
    
}
else if (randomNumber <= 1) {
$("#com_hand").text("不正解：ナッチポックン");
$("#result").text("950円（税込）");
  $("#result").css('color', '');
     
}
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
  });

//設問① // 正解とんちゃん鍋
$(function () {
  $('#04_03').on('click', function() {
  

const min = 1;
const max = 3;

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

if (randomNumber === 1) {
  $("#com_hand").text("大正解：元祖とんちゃん鍋");
$("#result").text("「山口県下関発祥の」");
  $("#com_hand").css('color', 'Red');

  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
} else if (1 <= randomNumber) {
$("#com_hand").text("大正解：元祖とんちゃん鍋");
$("#result").text("「これもこれで一頭から3%しかとれません」");
  $("#com_hand").css('color', 'Red');
  
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
}
else if (randomNumber <= 1) {
$("#com_hand").text("大正解：元祖とんちゃん鍋");
$("#result").text("〇〇円");
  $("#com_hand").css('color', 'Red');
  $("#com_hand").css('color', 'Red');
  
  winCount++; // 勝利カウンタを増やす
  $("#win-counter").text(`正解の回数: ${winCount}`); // 正解の回数を更新する
}
    

    
    
// 結果をidで指定した場所に表示
    gameCount++;
      updateWinRate();
      updateMatchInfo();
});
});

function reset() {
  winCount = 0;
  gameCount = 0;
  updateWinRate();
  updateMatchInfo();
  location.reload();
}


