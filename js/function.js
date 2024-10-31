
//確率の設定値を足し合わせる関数---------
function sum(arrays) { 
  let a = 0;
  let b = 0;

  for (const j in arrays) {
    a += arrays[j]
  }
  return a;
}

//乱数を生成し、設定した確率に合わせて数値をセットする関数---------
function lot(tx1,tx2,tx3,tx4,tx5,tx6,tx7) {
  const data = {
    7: tx7, // 初期値：5%
    6: tx6, // 初期値：8%
    5: tx5, // 初期値：11%
    4: tx4, // 初期値：14%
    3: tx3, // 初期値：17%
    2: tx2, // 初期値：20%
    1: tx1, // 初期値：25%
  }

  //乱数生成
  const rand = Math.floor(Math.random() * 100)

  //変数定義
  let result = 0
  let rate = 0

  for (const prop in data) {
    rate += data[prop]
    if (rand <= rate) {
      result = prop
      break
    }
  }
  return result
}

//あたり判定-------------------------------------------------
function judge(lot_array) {

  var filter1 = lot_array.filter(element => element === "1");
  var filter2 = lot_array.filter(element => element === "2");
  var filter3 = lot_array.filter(element => element === "3");
  var filter4 = lot_array.filter(element => element === "4");
  var filter5 = lot_array.filter(element => element === "5");
  var filter6 = lot_array.filter(element => element === "6");
  var filter7 = lot_array.filter(element => element === "7");

  var str = "";

  if (filter1.length >= 5) {
    str = "7等当選"
    return str;
    
  } else if (filter2.length >= 5) { 
    str = "6等当選"
    return str;

  } else if (filter3.length >= 5) {
    str = "5等当選"
    return str;

  } else if (filter4.length >= 5) {
    str = "4等当選"
    return str;

  } else if (filter5.length >= 5) {
    str = "3等当選"
    return str;

  } else if (filter6.length >= 5) {
    str = "2等当選"
    return str;

  } else if (filter7.length >= 5) {
    str = "1等当選"
    return str;

  } else {
    str = "ハズレ"
    return str;
  }

}


//ボタン押下------------------------------------------------
$("#button").on("click", function () {

  var tx_arr = new Array(
    Number(document.getElementById('textbox1').value),
    Number(document.getElementById('textbox2').value),
    Number(document.getElementById('textbox3').value),
    Number(document.getElementById('textbox4').value),
    Number(document.getElementById('textbox5').value),
    Number(document.getElementById('textbox6').value),
    Number(document.getElementById('textbox7').value),
  )

  if (sum(tx_arr) === 100) {
    
    //配列の初期化
    var lot_array = new Array();

    //乱数から1〜7までの数字を生成して配列にセット
    for (let i = 1; i < 10; i++) {
      lot_array.push(lot(tx_arr[0], tx_arr[1], tx_arr[2], tx_arr[3], tx_arr[4], tx_arr[5], tx_arr[6],));
    }
    console.log(lot_array);
    console.log(judge(lot_array));

    //UIに数字を表示
    $("#num1").html(lot_array[0]);
    $("#num2").html(lot_array[1]);
    $("#num3").html(lot_array[2]);
    $("#num4").html(lot_array[3]);
    $("#num5").html(lot_array[4]);
    $("#num6").html(lot_array[5]);
    $("#num7").html(lot_array[6]);
    $("#num8").html(lot_array[7]);
    $("#num9").html(lot_array[8]);

    //
    $("#result_value").html(judge(lot_array));

  } else { 
    alert("確率は足し合わせて100 % になるように設定してください");
  }

});