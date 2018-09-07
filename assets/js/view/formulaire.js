

function AdjustForm(buildingType)
{

  if(buildingType===1)
  {
    console.log("residential = 1");
    document.getElementById("resNbApartments").style.visibility = "visible";
    document.getElementById("resNbFloors").style.visibility = "visible";
    document.getElementById("resNbBsmtFloors").style.visibility = "visible";

  }
   else if(buildingType===2)
  {
  console.log("commercial = 2");
  document.getElementById("comNbtenant").style.visibility = "visible";
  document.getElementById("comNbFloors").style.visibility = "visible";
  document.getElementById("comNbBsmtFloors").style.visibility = "visible";
  document.getElementById("comNbparking").style.visibility = "visible";


  }
  else if(buildingType===3)
  {
    console.log("corporate = 3")
    document.getElementById("activity hours").style.display = "none";
    document.getElementById("appartment").style.display = "none";


  }

  else if(buildingType===4)
  {
console.log("hybrid = 4")
document.getElementById("appartment").style.display = "none"
  }
}

function resQuote(){
  var app = parseInt(document.getElementById("resNbApartments").value);
  var floors = parseInt(document.getElementById("resNbFloors").value);
  var bsmt = parseInt(document.getElementById("resNbBsmtFloors").value);
  var totalFloor = floors+bsmt
  document.getElementById("resElev").value = Math.ceil((app / floors) / 6);
  if(totalFloor >=21) {document.getElementById("resElev").value= Math.ceil(((app / floors) / 6)*2);}

}

function price() {
  var res = document.getElementById("resStandard").checked;
  var resp = document.getElementById("resPremium").checked;
  var rese = document.getElementById("resExcelium").checked;
  var shafts = document.getElementById("resElev").value;

  var res_price = shafts * 7565 * 1.1;
  var resp_price = shafts * 12345 * 1.13;
  var rese_price = shafts * 15400 * 1.16;

  if(res)
    document.getElementById("resPrice").value = res_price;
  else if (resp)
    document.getElementById("resPrice").value = resp_price;
  else if (rese)
    document.getElementById("resPrice").value = rese_price;
}


  function corpQuote(){
    var occup = document.getElementById("corpMaxPerFloors").value;
    var floor = document.getElementById("corpNbFloors").value;
    var bsmt = document.getElementById("corpNbBsmtFloors").value;
    var building = floor + bsmt;
    var totalOccup = occup * building;
    var elvtrs = Math.ceil(totalOccup / 1000);
    var column = Math.ceil(building / 20);
    var elevReq = Math.ceil(elvtrs / column);
    document.getElementById("corpElev").value = elevReq;

  }
