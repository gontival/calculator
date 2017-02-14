/// <reference path="_references.js" />

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    ns.initialize = function() {

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
        calculator.clear();
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
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.minusClick = function() {
            $('#txtResult').val(Number($('#txtResult').val()) - Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.clear = function () {
            $('#txtResult').val('0');
            $('#txtInput').val('0');
            bubbleMessage = '';
        }

        Calculator.prototype.clearEntry= function() {
            $('#txtInput').val('0');
        }

        Calculator.prototype.multiplyClick = function() {
            $('#txtResult').val(Number($('#txtResult').val()) * Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.divisionClick = function() {
            $('#txtResult').val(Number($('#txtResult').val()) / Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        };

        Calculator.prototype.click = function () {
            bubbleMessage = 'A button has been clicked.';
        }

        return Calculator;        
    }());
}());

