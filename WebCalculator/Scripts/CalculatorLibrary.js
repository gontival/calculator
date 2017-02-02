var txtInput;
var txtResult;
var bubbleMessage;

function initialize() {
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');
    bubbleMessage = '';

    //subscribe to all number buttons click event
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click', numberClick);
    }

    //subscribe to operators button's click event
    document.getElementById('btnPlus').addEventListener('click', plusClick);
    document.getElementById('btnMinus').addEventListener('click', minusClick);
    document.getElementById('btnClear').addEventListener('click', clear);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry);
    document.getElementById('btnMultiply').addEventListener('click', multiplyClick);
    document.getElementById('btnDivision').addEventListener('click', divisionClick);

    //bubbling for the container 
    var calculatorContainer = document.getElementsByClassName('calculatorContainer');
    calculatorContainer[0].addEventListener('click', click);

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
    bubbleMessage = '';
}

function clearEntry() {
    txtInput.value = '0';
}

function multiplyClick() {
    txtResult.value = Number(txtInput.value) * Number(txtResult.value);
    clearEntry();
};

function divisionClick() {
    txtResult.value = Number(txtResult.value) / Number(txtInput.value);
    clearEntry();
};

function click() {
    bubbleMessage = 'A button has been clicked.';
}