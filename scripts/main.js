let $authorizeButton = document.querySelector('#authorize_button');
let $signoutButton = document.querySelector('#signout_button');

let $logTxt = document.querySelector("#log_txt");
let $logBtn = document.querySelector("#log_btn");
let $getDataBtn = document.querySelector("#get_data_btn");

let $dataPre = document.querySelector("#data_pre");

function init () {
  createSheetForToday();
}

$authorizeButton.addEventListener("click", () => {
  handleAuthClick();
});

$signoutButton.addEventListener("click", () => {
  handleSignoutClick();
});

$createSheetBnt.addEventListener("click", () => {
  createSheet($logTxt.value);
});

$logBtn.addEventListener("click", () => {
  let logTxt = $logTxt.value;
  $logTxt.value = "";

  let logTime = getTime();

  //TODO: exclude this logs and save informations in google sheets
  console.log(logTxt);
  console.log(logTime);
});

$getDataBtn.addEventListener("click", async () => {
  console.log("retrieving data");
  let data = await getData();
  console.log(formatData(data));
  $dataPre.innerHTML = formatData(data);
});