/// <reference path="_references.js" />

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    function initialize() {

        var calculator = new ns.Calculator();

        //subscribe to all number buttons click event
        $('button[id^=btnNumber]').on('click', calculator.numberClick);

        //subscribe to operators button's click event
        $('#btnPlus').on('click', calculator.plusClick);
        $('#btnMinus').on('click', calculator.minusClick);
        $('#btnClear').on('click', calculator.clear);
        $('#btnClearEntry').on('click', calculator.clearEntry);
        $('#btnMultiply').on('click', calculator.multiplyClick);
        $('#btnDivision').on('click', calculator.divisionClick);
        clear();
    }

    ns.Calculator = (function () {

        //Constructor
        function Calculator() {

        }

        Calculator.prototype.numberClick = function() {
            $('#txtInput').val( $('#txtInput').val() == '0' ?
            $(this).text() : $('#txtInput').val() + $(this).text() );
        }

        Calculator.prototype.plusClick = function () {
            $('#txtResult').val( Number($('#txtResult').val()) + Number($('#txtInput').val()) );
            clearEntry();
        }

        Calculator.prototype.minusClick = function() {
            txtResult.value = Number(txtResult.value) - Number(txtInput.value);
            clearEntry();
        }

        Calculator.prototype.clear = function () {
            txtResult.value = '0';
            txtInput.value = '0';
            bubbleMessage = '';
        }

        Calculator.prototype.clearEntry= function() {
            txtInput.value = '0';
        }

        Calculator.prototype.multiplyClick = function() {
            txtResult.value = Number(txtInput.value) * Number(txtResult.value);
            clearEntry();
        };

        calculator.prototype.divisionClick = function() {
            txtResult.value = Number(txtResult.value) / Number(txtInput.value);
            clearEntry();
        };

        Calculator.prototype.click = function () {
            bubbleMessage = 'A button has been clicked.';
        }

        
    }());
    

}());

