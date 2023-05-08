const MajangArr = [
  {
    parents: false, reach: true, omodora: "pe", uradora: "ps3", agari: "tsumo", agarihai: "ms7",score:"2000,4000",pos:"南場",me:"西家",
    haipai: [
      "psr5",
      "ps6",
      "ps7",
      "ss1",
      "ss2",
      "ss3",
      "ss9",
      "ss9",
      "msr5",
      "ms6",
      "ms7",
      "ms8",
      "ms9",
    ],
    yakuList: ["立直","ツモ","平和","赤2"],
    naki:[],
  },
  {
    parents: false, reach: true, omodora: "nan", uradora: "ton", agari: "tsumo", agarihai: "ss2",score:"1300,2600",pos:"南場",me:"北家",
    haipai: [
      "ms2",
      "ms3",
      "ms4",
      "ms5",
      "ms6",
      "ms7",
      "ps4",
      "ps4",
      "ps6",
      "ps7",
      "ps8",
      "ss3",
      "ss4",
    ],
    yakuList: ["立直","ツモ","平和"],
    naki:[],
  },
  {
    parents: true, reach: false, omodora: "ss8", uradora: "", agari: "ron", agarihai: "ss3",score:"7700",pos:"東場",me:"東家",
    haipai: [
      "ms6",
      "ms7",
      "ms8",
      "ps3",
      "ps3",
      "ps4",
      "ps4",
      "psr5",
      "ps5",
      "ps7",
      "ps7",
      "ss3",
      "ss3",
    ],
    yakuList: ["一盃口","断么九","赤1"],
    naki:[],
  },
  {
    parents: false, reach: true, omodora: "nan", uradora: "ps5", agari: "tsumo", agarihai: "msr5",score:"3000,6000", pos:"東場",me:"西家",
    haipai: [
      "ms3",
      "ms4",
      "ps3",
      "ps4",
      "psr5",
      "ps7",
      "ps7",
      "ps7",
      "ss3",
      "ss4",
      "ss5",
      "ss9",
      "ss9",
    ],
    yakuList: ["立直","ツモ","三色同順","赤2"],
    naki:[]
  },
];
const OyaTsumo = ["500オール", "700オール", "800オール", "1000オール", "1200オール", "1300オール", "1500オール", "1800オール", "2000オール", "2,300オール", "2600オール", "2900オール", "3200オール", "3600オール", "4000オール", "6000オール", "8000オール", "12000オール", "16000オール"];
const OyaRon = ["1500", "2000", "2400", "2900", "3400", "3900", "4400", "4800", "5300", "5800", "6800", "7700", "8700", "9600", "10600", "12000", "18000", "24000", "32000", "48000"]
const KoTsumo = ["300,500", "400,700", "400,800", "500,1000", "600,1200", "700,1300", "800,1500", "800,1600", "900,1800", "1000,2000", "1200,2300", "1300,2600", "1500,2900", "1600,3200", "1800,3600", "2000,4000", "3000,6000", "4000,8000", "6000,12000", "8000,16000"];
const KoRon = ["1000", "1300", "1600", "2000", "2300", "2600", "2900", "3200", "3600", "3900", "4500", "5200", "5800", "6400", "7100", "8000", "12000", "16000", "24000", "32000"];

let questionArr = [];
questionArr = questionArr.concat(MajangArr);
console.log(questionArr);
function arrayShuffle(array) {
  for(let i = (array.length - 1); 0 < i; i--){
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}
for(let i=0; i < 3; i++) {
  questionArr = arrayShuffle(questionArr);
}
// console.log(questionArr);
function createQuestion() {
  if(questionArr[0]) {
    //風・起家・親
  if (questionArr[0].pos) {
    $('.terms_list #terms1').text(questionArr[0].pos);
  }
  if (questionArr[0].me) {
    $('.terms_list #terms2').text(questionArr[0].me);
  }
if (questionArr[0].parents) {
  let optionHtml = "";
  $('#parentsM').show();
  $('#childM').hide();
  //親の点数
  switch(questionArr[0].agari) {
    case "tsumo":
      OyaTsumo.map((ele) => {
        optionHtml += `<option value="${ele}">${ele}</option>`
      });
    break;
    case "ron":
      OyaRon.map((ele) => {
        optionHtml += `<option value="${ele}">${ele}</option>`
      });
  }
  $('#score').html(optionHtml);
  $('.terms_list #terms3').text("親");
} else {
  let optionHtml = "";
  $('#childM').show();
  $('#parentsM').hide();
  //子の点数
  switch(questionArr[0].agari) {
    case "tsumo":
      KoTsumo.map((ele) => {
        optionHtml += `<option value="${ele}">${ele}</option>`
      });
    break;
    case "ron":
      KoRon.map((ele) => {
        optionHtml += `<option value="${ele}">${ele}</option>`
      });
    }
    $('#score').html(optionHtml);
  $('.terms_list #terms3').text("子");
}
//リーチ
if (questionArr[0].reach) {
  $('#reach').html(`<span>リーチ</span><div><img src="./img/another/reatch.gif" alt="" /></div>`)
} else {
  $('#reach').html(`<span>リーチなし</span>`)
}
//牌姿・和了り・ドラ表示
//表ドラ
if (questionArr[0].omodora) {
  $("#omoteDora div img").attr("src", `./img/majang_pai/${questionArr[0].omodora}.gif`);
}
//裏ドラ
if (questionArr[0].uradora) {
  $("#uraDora div img").attr("src", `./img/majang_pai/${questionArr[0].uradora}.gif`);
} else {
  $("#uraDora").hide();
}
//和了り
if (questionArr[0].agari === 'ron') {
  $("#Agari span").text("ロン");
} else {
  $("#Agari span").text("ツモ");
}
//和了り牌
if (questionArr[0].agarihai) {
  $("#Agari div img").attr("src", `./img/majang_pai/${questionArr[0].agarihai}.gif`);
} else {
  $("#Agari").hide();
}
//配牌
if (questionArr[0].haipai) {
  let html = '';
  questionArr[0].haipai.map((element) => {
    html += `<img src="./img/majang_pai/${element}.gif" alt="" />`
  });
  $('#haipai').html(html);
}
if(questionArr[0].naki) {
  
}else{
  $('#naki').hide();
}
$("#answerBtn").on("click", () => {
  if (questionArr[0].score) {
    if($('.selModalClose.selected').text() === questionArr[0].score) {
      const audio = new Audio("./sound/nice.m4a");
      audio.play();
      $('#correctArea,#correct_word,#correct').show();
      
    }else{
      $('#correctArea,#incorrect_word').show();
    }
  }
  if(questionArr[0].yakuList) {
    let listHtml = "";
    questionArr[0].yakuList.map((element) => {
      listHtml += `<li class="item">${element}</li>`;
    })
    $('#yaku .yakuList').html(listHtml);
    $('#yaku').show();
  }
  $("#answerBtn").hide();
  $('.selModalButton').attr('disabled',true);
  $("#nextBtn").show();
});
  }else{
    $('.ly_block2').empty();
    $('.ly_block2').text('終了')
  }
  
}

$("#nextBtn").on('click',() => {
  $("#nextBtn").hide();
  $("#answerBtn").show();
  $('#haipai,#reach,#score,#yaku .yakuList').empty();
  $('#omoteDora div,#uraDora div,#Agari div').attr('src','')
  $('#correctArea,#correct_word,#incorrect_word,#correct,#inrrect').hide()
  $('.selModalButton').attr({'disabled':false,style:'background:#777'});
  questionArr.shift();
  createQuestion();
  $("select").selModal();
})
// if (questionArr[0].score) {
//   if($('.selModalClose.selected').text() === MajangArr[0].score) {
//     const audio = new Audio("./sound/nice.m4a");
//     $("#answerBtn").on("click", function () {
//       audio.play();
//     });
//   }else{

//   }
// }

//
$(function () {
  createQuestion();
  $("select").selModal();
  $("#childM").on("click", () => {
    $("#child_table ,#modal_outer").addClass("is-show");
  });
  $("#modal_outer,#modal_close").on("click", () => {
    $("#child_table ,#modal_outer").removeClass("is-show");
  });
  $("#parentsM").on("click", () => {
    $("#parents_table ,#modal_outer").addClass("is-show");
  });
  $("#modal_outer,#modal_close").on("click", () => {
    $("#parents_table,#modal_outer").removeClass("is-show");
  });
});
  // });
  

