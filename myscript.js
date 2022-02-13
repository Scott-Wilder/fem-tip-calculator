function getBill() {
  var bill = document.getElementById("bill").value;
  var people = document.getElementById("people").value;
  var total = bill / people;
  console.log(total);
  document.getElementById("totalSplit").innerHTML = "$" + total;
}
function getTip(x) {
  var bill = document.getElementById("bill").value;
  var x = x;
  var tipAmount = bill * x;
  var people = document.getElementById("people").value;
  var tipSplit = tipAmount / people;
  console.log(tipSplit);
  document.getElementById("tipSplit").innerHTML = "$" + tipSplit;
}
