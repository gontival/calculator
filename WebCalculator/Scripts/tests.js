module('Calculator Test Suite', { setup: function () { initialize(); } });

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);

    for (var i = 0; i < buttonQuantity; i++)
    {
        var btn = document.getElementById('btn'+i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length-1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected + '  Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength, 'Expected string length: ' + expectedLength + 'Actual length: ' + txtInput.value.length);
    }
    
});

test("Add Test", function () {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var result = txtResult.value;
    var expected = '30';
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
    expected = 0;
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Substract Test", function () {
    expect(2);
    txtInput.value = '5';
    txtResult.value = '26';
    var btnMinus = document.getElementById('btnMinus');
    QUnit.triggerEvent(btnMinus, 'click');
    var result = txtResult.value;
    var expected = '21';
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
    expected = 0;
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Clear Entry Test", function () {
    expect(1);
    txtInput.value = '10';
    var btnClearEntry = document.getElementById('btnClearEntry');
    QUnit.triggerEvent(btnClearEntry, 'click');
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);

});

test("Clear Test", function () {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnClear = document.getElementById('btnClear');
    QUnit.triggerEvent(btnClear, 'click');
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
});

test("Initialize Test", function () {
    expect(2);
    txtInput.value = '';
    txtResult.value = '';
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
});

test("Multiply Test", function () {
    expect(1);
    txtInput.value = 2;
    txtResult.value = 512;
    var btnMultiply = document.getElementById('btnMultiply');
    QUnit.triggerEvent(btnMultiply, 'click');
    var expected = 1024;
    var result = txtResult.value;
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
});

test("Division Test", function () {
    expect(1);
    txtInput.value = 2;
    txtResult.value = 1024;
    var btnMultiply = document.getElementById('btnDivision');
    QUnit.triggerEvent(btnDivision, 'click');
    var expected = 512;
    var result = txtResult.value;
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
});