var txtInput;
var txtResult;

function initialize() {
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');

    //subscribe to all number buttons click event
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click', numberClick);
    }

    //subscribe to operators button's click event
    document.getElementById('btnPlus').addEventListener('click', plusClick);
    document.getElementById('btnMinus').addEventListener('click', minusClick);
    document.getElementById('btnClear').addEventListener('click', clear);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry);

    clear();
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ?
    this.innerText : txtInput.value + this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    clearEntry();
}

function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    clearEntry();
}

function clear() {
    txtResult.value = '0';
    txtInput.value = '0';
}

function clearEntry() {
    txtInput.value = '0';
}