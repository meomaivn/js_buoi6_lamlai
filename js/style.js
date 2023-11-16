/***While*/
// function demoVongLapWhile() {
//   var n = 0;
//   while (n < 3) {
//     console.log("hello vn");
//   } //bước nhảy
//   n++;
// }
// demoVongLapWhile();
var output = "";
var input;

function demoVongLapWhile() {
  var n = 0;
  output = ""; // Đặt lại output để tránh tích lũy giá trị từ lần lặp trước

  while (n < input) {
    console.log("Hello VN");
    output += "Hello VN<br>"; // Thêm giá trị mới vào chuỗi output
    n++;
  }
}

// xử lý vòng lặp
document.getElementById("btnInTheDiv").onclick = function () {
  input = Number(document.getElementById("iSo").value);
  demoVongLapWhile();
  console.log("Output:", output); // Thêm log để kiểm tra giá trị output
  document.getElementById("ketQua1").innerHTML = output;
};
/**vd nhập số nguyên chắn , chia dần số đó cho 2 và lặp lại đến khi nào giá trị nhỏ hơn hoặc bằng 1. thì xuất ra màn hình**/
// function expWhile() {
//   var n = 20;
//   var content = "";
//   while (n > 1) {
//     n = Math.floor(n / 2);
//     // // bước nhảy
//     // n++;
//     content += n + " ";
//   }
//   console.log(n);
// }
// expWhile();

var content = "";

function ChiaHetCho2() {
  var n = input;
  content = "";
  while (n > 1) {
    n = Math.floor(n / 2);
    content += n + " ";
  }
  console.log("noi dung ", content);
}

// xử lý bằng nút
document.getElementById("btnChiahetCho2").onclick = function () {
  input = Number(document.getElementById("iSo1").value);
  ChiaHetCho2(input);
  document.getElementById("ketQua2").innerHTML = content;
};
/***Do while : làm trước rồi xét đk*/
// function demoDoWhile() {
//   var n = 0;
//   do {
//     // hành động
//     console.log("hello vn");
//     // Bước nhảy
//     n++;
//   } while (n < 3);
// }
// demoDoWhile();

// Demo Do While
var content = "";
var n = 0;

function btnDemoDoWhile(input) {
  // Thêm tham số input vào đây
  content = "";
  do {
    content += '<p class="btn btn-success" >Hello</p>';
    n++;
  } while (n < input);
}

document.getElementById("btnDoWhile").onclick = function () {
  var input = Number(document.getElementById("iSo3").value);
  btnDemoDoWhile(input);
  document.getElementById("ketQua3").innerHTML = content;
};

/**Exp While*/
// function expDoWhile() {
//   var n = 5;
//   var count = 1;
//   do {
//     console.log(count);
//     count++;
//   } while (count <= n);
// }
// expDoWhile();

var count;
var tong = 0;
function expDoWhile() {
  count = 1;

  var input = Number(document.getElementById("txtNum").value);
  do {
    // tong += count;
    count++;
  } while (count <= input);
  console.log(count);
}
function submit() {
  expDoWhile(input);
  document.getElementById("noti").style.display = "block";
  document.getElementById("noti").innerHTML = count;
}
/** vòng lặp For
 * giống cấu trúc while
 */
function demoFor() {
  for (var n = 0; n < 3; n++) {
    // hành động
    console.log("hello VN");
  }
}
demoFor();

// Gom số chẵn vào một khu, số lẻ vao một khu
// function expFor() {
//   var n = 10;
//   var soLe = "";
//   var soChan = "";

//   for (var i = 0; i < n; i++) {
//     console.log(i);
//     if (i % 2 === 0) {
//       soChan += i + " ";
//     } else {
//       soLe += i + " ";
//     }
//   }
//   console.log("So chan ", soChan);
//   console.log("So le ", soLe);
// }
// expFor();

// vòng lặp for (UI)
var i = 0;
var soLe = "";
var soChan = "";
var content = "";
function chanLeUI(n) {
  for (var i = 1; i < n; i++) {
    var n = Number(document.getElementById("iSo4").value);
    console.log(i);
    content = "";

    if (i % 2 === 0) {
      soChan += i + " ";
    } else {
      soLe += i + " ";
    }
    content = "Số chẵn: " + soChan + "<br> Số lẻ: " + soLe;
    // document.getElementById("ketQua4").innerHTML = content;
  }
}
document.getElementById("btnForChanLe").onclick = function () {
  chanLeUI();
  
};
