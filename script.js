$(document).ready(function() {
    let openingText = $(".opening-text");

    // 最初のテキスト要素をフェードイン
    fadeInText(0);

    function fadeInText(index) {
        if (index < openingText.length) {
            // テキストをフェードインさせる
            $(openingText[index]).addClass("fade-in");

            // 5秒後にテキストをフェードアウトさせる
            setTimeout(function() {
                $(openingText[index]).removeClass("fade-in");
                $(openingText[index]).addClass("fade-out");

                // 次のテキスト要素をフェードインさせる
                fadeInText(index + 1);
            }, 5000);
        } else {
            // オープニング画面のアニメーションが終了したらスタート画面に遷移
            $(".opening-screen").hide();
            $(".start-screen").show();
        }
    }

    // スタートボタンがクリックされたときの処理
    $("#start-btn").on("click", function() {
        // スタートボタンに点滅アニメーションを追加
        $(this).addClass("blinking");

        // ここでゲームを開始する処理を書く
        console.log("Game started!");
    });
});
