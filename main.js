import './style.css'
import expData from "./db/data.json" assert {type: "json"};

document.getElementById("bar-mon").style.height = `${expData[0].amount}vh`;
document.getElementById("bar-tue").style.height = `${expData[1].amount}vh`;
document.getElementById("bar-wed").style.height = `${expData[2].amount}vh`;
document.getElementById("bar-thu").style.height = `${expData[3].amount}vh`;
document.getElementById("bar-fri").style.height = `${expData[4].amount}vh`;
document.getElementById("bar-sat").style.height = `${expData[5].amount}vh`;
document.getElementById("bar-sun").style.height = `${expData[6].amount}vh`;

const showMonAmt = () => {
  document.getElementById("amt-mon").style.display = "block";
  document.getElementById("amt-mon").innerText = `$` + expData[0].amount;

  const hideMonAmt = () => {
    document.getElementById("amt-mon").style.display = "none";
  }

  document.getElementById("day-mon").addEventListener("mouseleave", hideMonAmt);
}

const showTueAmt = () => {
  document.getElementById("amt-tue").style.display = "block";
  document.getElementById("amt-tue").innerText = `$` + expData[1].amount;

  const hideTueAmt = () => {
    document.getElementById("amt-tue").style.display = "none";
  }

  document.getElementById("day-tue").addEventListener("mouseleave", hideTueAmt);
}

const showWedAmt = () => {
  document.getElementById("amt-wed").style.display = "block";
  document.getElementById("amt-wed").innerText = `$` + expData[2].amount;

  const hideWedAmt = () => {
    document.getElementById("amt-wed").style.display = "none";
  }

  document.getElementById("day-wed").addEventListener("mouseleave", hideWedAmt);
}

const showThuAmt = () => {
  document.getElementById("amt-thu").style.display = "block";
  document.getElementById("amt-thu").innerText = `$` + expData[3].amount;

  const hideThuAmt = () => {
    document.getElementById("amt-thu").style.display = "none";
  }

  document.getElementById("day-thu").addEventListener("mouseleave", hideThuAmt);
}

const showFriAmt = () => {
  document.getElementById("amt-fri").style.display = "block";
  document.getElementById("amt-fri").innerText = `$` + expData[4].amount;

  const hideFriAmt = () => {
    document.getElementById("amt-fri").style.display = "none";
  }

  document.getElementById("day-fri").addEventListener("mouseleave", hideFriAmt);
}

const showSatAmt = () => {
  document.getElementById("amt-sat").style.display = "block";
  document.getElementById("amt-sat").innerText = `$` + expData[5].amount;

  const hideSatAmt = () => {
    document.getElementById("amt-sat").style.display = "none";
  }

  document.getElementById("day-sat").addEventListener("mouseleave", hideSatAmt);
}

const showSunAmt = () => {
  document.getElementById("amt-sun").style.display = "block";
  document.getElementById("amt-sun").innerText = `$` + expData[6].amount;

  const hideSunAmt = () => {
    document.getElementById("amt-sun").style.display = "none";
  }

  document.getElementById("day-sun").addEventListener("mouseleave", hideSunAmt);
}

document.getElementById("day-mon").addEventListener("mouseover", showMonAmt);
document.getElementById("day-tue").addEventListener("mouseover", showTueAmt);
document.getElementById("day-wed").addEventListener("mouseover", showWedAmt);
document.getElementById("day-thu").addEventListener("mouseover", showThuAmt);
document.getElementById("day-fri").addEventListener("mouseover", showFriAmt);
document.getElementById("day-sat").addEventListener("mouseover", showSatAmt);
document.getElementById("day-sun").addEventListener("mouseover", showSunAmt);

switch (new Date().getDay()) {
  case 0:
    document.getElementById("bar-sun").style.backgroundColor = "Cyan";
    break;
  case 1:
    document.getElementById("bar-mon").style.backgroundColor = "Cyan";
    break;
  case 2:
    document.getElementById("bar-tue").style.backgroundColor = "Cyan";
    break;
  case 3:
    document.getElementById("bar-wed").style.backgroundColor = "Cyan";
    break;
  case 4:
    document.getElementById("bar-thu").style.backgroundColor = "Cyan";
    break;
  case 5:
    document.getElementById("bar-fri").style.backgroundColor = "Cyan";
    break;
  case 6:
    document.getElementById("bar-sat").style.backgroundColor = "Cyan";
}


