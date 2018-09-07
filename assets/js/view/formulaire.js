

function AdjustForm(buildingType)
{

  if(buildingType===1)
  {
    console.log("residential = 1");
    document.getElementById("residential").style.visibility = "visible";
    document.getElementById("commercial").style.visibility = "hidden";
    document.getElementById("corporate").style.visibility = "hidden";
    document.getElementById("hybrid").style.visibility = "hidden";

  }
   else if(buildingType===2)
  {
  console.log("commercial = 2");
  document.getElementById("residential").style.visibility = "hidden";
  document.getElementById("commercial").style.visibility = "visible";
  document.getElementById("corporate").style.visibility = "hidden";
  document.getElementById("hybrid").style.visibility = "hidden";


  }
  else if(buildingType===3)
  {
    console.log("corporate = 3")
    document.getElementById("residential").style.visibility = "hidden";
    document.getElementById("commercial").style.visibility = "hidden";
    document.getElementById("corporate").style.visibility = "visible";
    document.getElementById("hybrid").style.visibility = "hidden";


  }

  else if(buildingType===4)
  {
    console.log("hybrid = 4")
    document.getElementById("residential").style.visibility = "hidden";
    document.getElementById("commercial").style.visibility = "hidden";
    document.getElementById("corporate").style.visibility = "hidden";
    document.getElementById("hybrid").style.visibility = "visible";
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
    var occup = parseInt(document.getElementById("corpMaxPerFloors").value);
    var floor = parseInt(document.getElementById("corpNbFloors").value);
    var bsmt = parseInt(document.getElementById("corpNbBsmtFloors").value);
    var building = floor + bsmt;
    var totalOccup = occup * building;
    var elvtrs = Math.ceil(totalOccup / 1000);
    var column = Math.ceil(building / 20);
    var elevReq = Math.ceil(elvtrs / column);
    document.getElementById("corpElev").value = elevReq;

  }

  function corpprice() {
    var corps = document.getElementById("corpStandard").checked;
    var corpp = document.getElementById("corpPremium").checked;
    var corpe = document.getElementById("corpExcelium").checked;
    var shaftp = document.getElementById("corpElev").value;

    var cors_price = shaftp * 7565 * 1.1;
    var corp_price = shaftp * 12345 * 1.13;
    var core_price = shaftp * 15400 * 1.16;

    if(corps)
      document.getElementById("corPrice").value = cors_price;
    else if (corpp)
      document.getElementById("corPrice").value = corp_price;
    else if (corpe)
      document.getElementById("corPrice").value = core_price;
  }

  function comQuote(){
    var numbelev = parseInt(document.getElementById("comElevt").value);
    var totalelev = numbelev
    document.getElementById("comElev").value = Math.ceil(totalelev);
  }
   function comprice(){
    var coms = document.getElementById("comStandard").checked;
    var comp = document.getElementById("comPremium").checked;
    var come = document.getElementById("comExcelium").checked;
    var shaftc = document.getElementById("comElev").value;

    var comss_price = shaftc * 7565 * 1.1;
    var compp_price = shaftc * 12345 * 1.13;
    var comee_price = shaftc * 15400 * 1.16;

    if(coms)
      document.getElementById("comPrice").value = Math.ceil(comss_price);
    else if (comp)
      document.getElementById("comPrice").value = Math.ceil(compp_price);
    else if (come)
      document.getElementById("comPrice").value = Math.ceil(comee_price);
  }

  function hybQuote(){
    
  }
