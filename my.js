function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  const data = ws.getRange("A1").getDataRegion().getValues();
  const headers = data.shift();

  const jsonArray = data.map(r => {
    let obj = {};
    headers.forEach((h, i) => {
      obj[h] = r[i];
    });
    return obj;
  });

  const response = [{status: 200, data: jsonArray}];


  return sendJSON_(response);
}

function doPost(e) {
  // {"name": "Joe", "last":"Hoop","phone":"620-000-0001"}
  let jsonResponse;

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  const headers = ws.getRange(1,1,1,ws.getLastColumn()).getValues()[0];
  const headersOriginalOrder = headers.slice();
  headersOriginalOrder.shift();
  //remode id column header
  headers.shift();
  headers.sort();

  const body = e.postData.contents;
  const bodyJSON = JSON.parse(body);
  const headersPassed = Object.keys(bodyJSON).sort();

  if(!compareTwoArray_(headers, headersPassed)){
    jsonResponse = {status: 500, message:"Invalid Arguments Passed"};
    return sendJSON_(jsonResponse);
  }

  const arrayOfData = headersOriginalOrder.map(h => bodyJSON[h]);

  const aoaIds = ws.getRange(2,1,ws.getLastRow()-1,1).getValues();
  const newIdNumber = getMaxFromArrayOfArray_(aoaIds) + 1;
  arrayOfData.unshift(newIdNumber);
  ws.appendRow(arrayOfData);

  return sendJSON_(jsonResponse)
}

//return tru if all items are the same
function compareTwoArray_(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  for(let i=0; i< arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function sendJSON_(jsonResponse){
  return ContentService
    .createTextOutput(JSON.stringify(jsonResponse))
    .setMimeType(ContentService.MimeType.JSON);
} 

function getMaxFromArrayOfArray_(aoa){
  let maxID = 0;
  aoa.forEach(r=> {
    if(r[0] > maxID) maxID = r[0]
  });
  return maxID;
}
