const textConfig = {
  text1: "Gửi đến cô gái đáng iu nhất vũ trụ!",
  text2: "Anh có điều muốn nói với em này, sẵn sàng nhéee",
  text3: "KH iu T beo khum",
  text4: "Trả lời thật lòng đó nha",
  text5: "Hết iu roài",
  text6: "Yêu T beo nhất",
  text7: "lí do cậu thích tớ đi :vvvv",
  text8: "Gửi cho tớ <3",
  text9: "Vì cậu đẹp try vlllll",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11:
    "Tối nay tớ qua đón cậu đi chơi nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/hoicham.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n % 3 == 0) switchButton();
    else if (n % 3 != 0) moveButton();
    
    if (n % 3 == 0) $("#text4").html("Nhầm nút rồi nàng ơi");
    else if (n % 3 == 1) $("#text4").html("Ủa gì dzậy trời");
    else if (n % 3 == 2) $("#text4").html("Ấn nút bên kia cơ mà");
    n++;
  });
  var m = 0;
  $("#no").click(() => {
    if (m == 8) {
      confirmNo();
    }
    m++
  });

  function confirmYes() {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: "T beo cũng iu KH nhất",
      text: "Anh có chiếc video này muốn gửi đến em này...",
      imageUrl: "img/tom-jerry.png",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
      confirmButtonText: "Xem luôn",
    }).then(function () {
      window.location = "./img/tiktok.mp4"
    });
  }

  var p = 0;
  function confirmNo() {
    if(p == 8){
      Swal.fire({
        title: "Hết iu thật rồi á :(",
        text: "Bấm mười lần vào hết iu anh xem nào :(",
        imageUrl: "img/hoicham.jpg",
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: "Custom image",
        type: "input",
        showCancelButton: true,
        confirmButtonColor: "#EA4C89",
        cancelButtonColor: "#66ea4c",
        confirmButtonText: "Đùa thôi vẫn còn iu nhắm",
        cancelButtonText: "Hết iu thật rồi",
        closeOnConfirm: false,
        closeOncancel: false,
        closeOnClickOutside: false,
        allowOutsideClick: false
      }).then(function (result) {
        if(result.isConfirmed === true) {
          setTimeout(function () {
            confirmYes();
          }, 1000);
        }
        else {
          p++;
          confirmNo();
        }
      });
    }
    else if (p == 10) {
      alert("Anh chưa code trường hợp này đâu. Nên là mình yêu nhau tiếp ikk")
    }
    else {
      Swal.fire({
        title: "Hết iu thật rồi á :(",
        text: "Bấm mười lần vào hết iu anh xem nào :(",
        imageUrl: "img/hoicham.jpg",
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: "Custom image",
        type: "input",
        showCancelButton: true,
        confirmButtonColor: "#66ea4c",
        cancelButtonColor: "#EA4C89",
        confirmButtonText: "Hết iu thật rồi",
        cancelButtonText: "Đùa thôi vẫn còn iu nhắm",
        closeOnClickOutside: false,
        allowOutsideClick: false
      }).then(function (result) {
        if(result.isConfirmed === true) {
          p++;
          confirmNo();
        }
        else{
          confirmYes();
        }
      });
    }
  }

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: "T beo cũng iu KH nhất",
      text: "Anh có chiếc video này muốn gửi đến em này...",
      imageUrl: "img/tom-jerry.png",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
      confirmButtonText: "Xem luôn",
    }).then(function () {
      window.location = "./img/tiktok.mp4"
    });
  });
});
