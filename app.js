const countdown = () => {
  const countDate = new Date("October 1, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

const submitButton = () => {
  console.log("Submit button was pressed");
};

const fn1 = (event) => {
  var key_board_keycode = event.which || event.keyCode;
  if (key_board_keycode == 13) {
    var str = document.getElementById("text1").value;
    console.log("Email: " + str);
    document.getElementById("text1").value = null;
    alertPopup(str);
  }
};

const alertPopup = (str) => {
  alert("We will be in touch soon " + str + "!");
};

setInterval(countdown, 1000);
