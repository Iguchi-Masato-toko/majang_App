/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("const MajangArr = [\r\n  {\r\n    parents: false, reach: true, omodora: \"pe\", uradora: \"ps3\", agari: \"tsumo\", agarihai: \"ms7\",score:\"2000,4000\",pos:\"南場\",me:\"西家\",\r\n    haipai: [\r\n      \"psr5\",\r\n      \"ps6\",\r\n      \"ps7\",\r\n      \"ss1\",\r\n      \"ss2\",\r\n      \"ss3\",\r\n      \"ss9\",\r\n      \"ss9\",\r\n      \"msr5\",\r\n      \"ms6\",\r\n      \"ms7\",\r\n      \"ms8\",\r\n      \"ms9\",\r\n    ],\r\n    yakuList: [\"立直\",\"ツモ\",\"平和\",\"赤2\"],\r\n    naki:[],\r\n  },\r\n  {\r\n    parents: true, reach: true, omodora: \"ms2\", uradora: \"ms3\", agari: \"ron\", agarihai: \"4m\",score:\"12000\",\r\n    haipai: [\r\n      \"chun\",\r\n      \"chun\",\r\n      \"chun\",\r\n      \"haku\",\r\n      \"haku\",\r\n      \"haku\",\r\n      \"hatsu\",\r\n      \"hatsu\",\r\n      \"hatsu\",\r\n      \"ms8\",\r\n      \"ms9\",\r\n      \"ms9\",\r\n    ],\r\n    yakuList: [\"立直\",\"断么九\",\"混一色\"],\r\n    naki:[]\r\n  },\r\n];\r\nconst OyaTsumo = [\"500オール\", \"700オール\", \"800オール\", \"1000オール\", \"1200オール\", \"1300オール\", \"1500オール\", \"1800オール\", \"2000オール\", \"2,300オール\", \"2600オール\", \"2900オール\", \"3200オール\", \"3600オール\", \"4000オール\", \"6000オール\", \"8000オール\", \"12000オール\", \"16000オール\"];\r\nconst OyaRon = [\"1500\", \"2000\", \"2400\", \"2900\", \"3400\", \"3900\", \"4400\", \"4800\", \"5300\", \"5800\", \"6800\", \"7700\", \"8700\", \"9600\", \"10600\", \"12000\", \"18000\", \"24000\", \"32000\", \"48000\"]\r\nconst KoTsumo = [\"300,500\", \"400,700\", \"400,800\", \"500,1000\", \"600,1200\", \"700,1300\", \"800,1500\", \"800,1600\", \"900,1800\", \"1000,2000\", \"1200,2300\", \"1300,2600\", \"1500,2900\", \"1600,3200\", \"1800,3600\", \"2000,4000\", \"3000,6000\", \"4000,8000\", \"6000,12000\", \"8000,16000\"];\r\nconst KoRon = [\"1000\", \"1300\", \"1600\", \"2000\", \"2300\", \"2600\", \"2900\", \"3200\", \"3600\", \"3900\", \"4500\", \"5200\", \"5800\", \"6400\", \"7100\", \"8000\", \"12000\", \"16000\", \"24000\", \"32000\"];\r\n\r\nlet questionArr = [];\r\nquestionArr = questionArr.concat(MajangArr);\r\nconsole.log(questionArr);\r\nfunction arrayShuffle(array) {\r\n  for(let i = (array.length - 1); 0 < i; i--){\r\n    let r = Math.floor(Math.random() * (i + 1));\r\n\r\n    // 要素の並び替えを実行\r\n    let tmp = array[i];\r\n    array[i] = array[r];\r\n    array[r] = tmp;\r\n  }\r\n  return array;\r\n}\r\nfor(let i=0; i < 3; i++) {\r\n  questionArr = arrayShuffle(questionArr);\r\n}\r\n// console.log(questionArr);\r\nfunction createQuestion() {\r\n  //風・起家・親\r\n  if (questionArr[0].pos) {\r\n    $('.terms_list #terms1').text(questionArr[0].pos);\r\n  }\r\n  if (questionArr[0].me) {\r\n    $('.terms_list #terms2').text(questionArr[0].me);\r\n  }\r\nif (questionArr[0].parents) {\r\n  let optionHtml = \"\";\r\n  //親の点数\r\n  switch(questionArr[0].agari) {\r\n    case \"tsumo\":\r\n      OyaTsumo.map((ele) => {\r\n        optionHtml += `<option value=\"${ele}\">${ele}</option>`\r\n      });\r\n    break;\r\n    case \"ron\":\r\n      OyaRon.map((ele) => {\r\n        optionHtml += `<option value=\"${ele}\">${ele}</option>`\r\n      });\r\n  }\r\n  $('#score').html(optionHtml);\r\n  $('.terms_list #terms3').text(\"親\");\r\n} else {\r\n  let optionHtml = \"\";\r\n  //子の点数\r\n  switch(questionArr[0].agari) {\r\n    case \"tsumo\":\r\n      KoTsumo.map((ele) => {\r\n        optionHtml += `<option value=\"${ele}\">${ele}</option>`\r\n      });\r\n    break;\r\n    case \"ron\":\r\n      KoRon.map((ele) => {\r\n        optionHtml += `<option value=\"${ele}\">${ele}</option>`\r\n      });\r\n    }\r\n    $('#score').html(optionHtml);\r\n  $('.terms_list #terms3').text(\"子\");\r\n}\r\n//リーチ\r\nif (questionArr[0].reach) {\r\n  $('#reach').html(`<span>リーチ</span><div><img src=\"./img/another/reatch.gif\" alt=\"\" /></div>`)\r\n} else {\r\n  $('#reach').html(`<span>リーチなし</span>`)\r\n}\r\n//牌姿・和了り・ドラ表示\r\n//表ドラ\r\nif (questionArr[0].omodora) {\r\n  $(\"#omoteDora div img\").attr(\"src\", `./img/majang_pai/${questionArr[0].omodora}.gif`);\r\n}\r\n//裏ドラ\r\nif (questionArr[0].uradora) {\r\n  $(\"#uraDora div img\").attr(\"src\", `./img/majang_pai/${questionArr[0].uradora}.gif`);\r\n} else {\r\n  $(\"#uraDora\").hide();\r\n}\r\n//和了り\r\nif (questionArr[0].agari === 'ron') {\r\n  $(\"#Agari span\").text(\"ロン\");\r\n} else {\r\n  $(\"#Agari span\").text(\"ツモ\");\r\n}\r\n//和了り牌\r\nif (questionArr[0].agarihai) {\r\n  $(\"#Agari div img\").attr(\"src\", `./img/majang_pai/${questionArr[0].agarihai}.gif`);\r\n} else {\r\n  $(\"#Agari\").hide();\r\n}\r\n//配牌\r\nif (questionArr[0].haipai) {\r\n  let html = '';\r\n  questionArr[0].haipai.map((element) => {\r\n    html += `<img src=\"./img/majang_pai/${element}.gif\" alt=\"\" />`\r\n  });\r\n  $('#haipai').html(html);\r\n}\r\nif(questionArr[0].naki) {\r\n  \r\n}else{\r\n  $('#naki').hide();\r\n}\r\n$(\"#answerBtn\").on(\"click\", () => {\r\n  if (questionArr[0].score) {\r\n    if($('.selModalClose.selected').text() === questionArr[0].score) {\r\n      const audio = new Audio(\"./sound/nice.m4a\");\r\n      audio.play();\r\n      $('#correct_word,#correct').show();\r\n      \r\n    }else{\r\n      $('#incorrect_word').show();\r\n    }\r\n  }\r\n  if(questionArr[0].yakuList) {\r\n    let listHtml = \"\";\r\n    questionArr[0].yakuList.map((element) => {\r\n      listHtml += `<li class=\"item\">${element}</li>`;\r\n    })\r\n    $('#yaku .yakuList').html(listHtml);\r\n    $('#yaku').show();\r\n  }\r\n  $(\"#answerBtn\").hide();\r\n  $(\"#nextBtn\").show();\r\n});\r\n}\r\n\r\n$(\"#nextBtn\").on('click',() => {\r\n  $(\"#nextBtn\").hide();\r\n  $(\"#answerBtn\").show();\r\n  $('#haipai,#reach,#omoteDora,#uraDora,#Agari,#score,#yaku').empty();\r\n  questionArr.shift();\r\n  createQuestion();\r\n})\r\n// if (questionArr[0].score) {\r\n//   if($('.selModalClose.selected').text() === MajangArr[0].score) {\r\n//     const audio = new Audio(\"./sound/nice.m4a\");\r\n//     $(\"#answerBtn\").on(\"click\", function () {\r\n//       audio.play();\r\n//     });\r\n//   }else{\r\n\r\n//   }\r\n// }\r\n\r\n//\r\n$(function () {\r\n  createQuestion()\r\n  $(\"select\").selModal();\r\n  var modalId = \"\";\r\n  $(\"#modal_open\").on(\"click\", () => {\r\n    var modalData = $(\"#modal_open\").data(\"modal\");\r\n    switch (modalData) {\r\n      case \"child-modal\":\r\n        modalId = \"#child_table\";\r\n        break;\r\n      case \"parents-modal\":\r\n        modalId = \"#parents_table\";\r\n        break;\r\n      case \"fu-modal\":\r\n        modalId = \"#fu_table\";\r\n      default:\r\n        break;\r\n    }\r\n    $(modalId + \",#modal_outer\").addClass(\"is-show\");\r\n  });\r\n  $(\"#modal_outer,#modal_close\").on(\"click\", () => {\r\n    $(modalId + \",#modal_outer\").removeClass(\"is-show\");\r\n    modalId = \"\";\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://git_majang_app/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;