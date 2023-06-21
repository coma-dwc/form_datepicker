$(function(){
  //カレンダー
  $('#reservation').datepicker();

//エラーメッセージ
$('#button').on('click', function(){
    // エラーメッセージを表示するためのエリアを初期化
    $('#name-error').text("");
    $('#tell-error').text("");
    $('#reservation-error').text("");
    $('#seminar-error').text("");

    // 名前が未入力の場合
    if($('input[name="your-name"]').val() == "") {
      // エラーメッセージ（名前）
      $("#name-error").text("名前は必須項目です。");
    }

    // 電話番号の入力欄に1つでも未入力がある場合
    if(
      ($('input[name="your-tell-1"]').val() == "") ||
      ($('input[name="your-tell-2"]').val() == "") ||
      ($('input[name="your-tell-3"]').val() == "")
    ) {
      // エラーメッセージ(電話番号)
      $("#tell-error").text("電話番号は必須項目です。");
    }

    // 予約日が未入力の場合
    if($('input[name="your-reservation"]').val() == "") {
      // エラーメッセージ（予約日）
      $("#reservation-error").text("予約日は必須項目です。");
    }
  });
});