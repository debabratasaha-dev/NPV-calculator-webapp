// calculation and HTML display adding function 
function calculate (principle, cashflow, year, discount_rate, write_NPV, write_NPV_difference) {
    let discount_rate_decimal = 1 + discount_rate/100;
    let current_discount;
    let pv;
    let npv = 0;
    let i = 1;
    while (i <= year) {
        current_discount = discount_rate_decimal**i;
        pv = cashflow/current_discount;
        npv += pv;
        i++;
    }
    let NPV_difference = npv - principle;
    document.getElementById(write_NPV).innerHTML = npv;
    document.getElementById(write_NPV_difference).innerHTML = NPV_difference;
  }
  // function for fetching data and applying it in calculation function
  function getData() {
    var get_principle = parseFloat(document.getElementById('principle').value);
    var get_cashflow = parseFloat(document.getElementById('cashflow').value);
    var get_years = parseFloat(document.getElementById('year').value);
    var get_discount_rate = parseFloat(document.getElementById('discount_rate').value);
    calculate (get_principle, get_cashflow, get_years, get_discount_rate, 'net_NPV', 'NPV_differ');
}

let button = document.querySelector('button');
button.onclick = getData;