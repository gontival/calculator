/// <reference path="_references.js" />
module('Calculator Test Suite', { setup: function () { calculatorNamespace.initialize(); } });
    
test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + '  Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + '  Actual value: ' + $('#txtResult').val());
});

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);

    for (var i = 0; i < buttonQuantity; i++) {
        $('#btnNumber' + i).triggerHandler('click');
        var result = $('#txtInput').val()[$('#txtInput').val().length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected + '  Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal($('#txtInput').val().length, expectedLength, 'Expected string length: ' + expectedLength + 'Actual length: ' + $('#txtInput').val().length);
    }

});

test("Add Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnPlus').triggerHandler('click');
    var result = $('#txtResult').val();
    var expected = '30';
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
    expected = 0;
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

test("Substract Test", function () {
    expect(2);
    $('#txtInput').val('5');
    $('#txtResult').val('26');
    var btnMinus = document.getElementById('btnMinus');
    QUnit.triggerEvent(btnMinus, 'click');
    $('#btnMinus').triggerHandler('click');

    var result = $('#txtResult').val();
    var expected = '21';
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
    expected = 0;
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

test("Clear Entry Test", function () {
    expect(1);
    $('#txtInput').val('10');
    $('#btnClearEntry').triggerHandler('click');
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());

});

test("Clear Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnClear').triggerHandler('click');
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
});

test("Multiply Test", function () {
    expect(1);
    $('#txtInput').val('2');
    $('#txtResult').val('512');
    $('#btnMultiply').triggerHandler('click');
    var expected = 1024;
    var result = $('#txtResult').val();
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
});

test("Division Test", function () {
    expect(1);
    $('#txtInput').val('2');
    $('#txtResult').val('1024');
    $('#btnDivision').triggerHandler('click');
    var expected = 512;
    var result = $('#txtResult').val();
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
});

test("Division by 0 Test", function () {
    expect(1);
    $('#txtInput').val('0');
    $('#txtResult').val('65536');
    $('#btnDivision').triggerHandler('click');
    var expected = 'Infinity';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
});

test("Bubbling event Test", function () {

    var buttonQuantity = 10;
    expect(buttonQuantity);

    for (var i = 0; i < buttonQuantity; i++) {
        $('#btnNumber'+i).triggerHandler('click')

        var result = bubbleMessage;
        var expected = 'A button has been clicked.';
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
    }
});

//Essential JS 
test("Object Literal Test", function () {
    expect(2);

    var car1 = {
        year: 2000,
        make: 'Ford',
        model: 'Fusion',
        repairs: ['repair1', 'repair2', 'repair3'],
        getInfo: function () {
            return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
        }
    };

    var car2 = {
        year: 2010,
        make: 'BMW',
        model: 'Z4',
        getInfo: function () {
            return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
        }
    };

    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

test("Create Instances Test Using Factory Pattern", function () {
    expect(2);

    // Creating dynamic objects by using the factory pattern
    function getVehicle(theYear, theMake, theModel) {
        var car = new Object();
        car.TheYear = theYear;
        car.TheMake = theMake;
        car.TheModel = theModel;
        car.getInfo = function () {
            return 'Vehicle: ' + this.TheYear + ' ' + this.TheMake + ' ' + this.TheModel;
        };
        return car;
    }

    var car3 = getVehicle('2007', 'Peugeot', '207');
    var car4 = getVehicle('2016', 'Tesla', 'S3');
    var expected = 'Vehicle: 2007 Peugeot 207';
    var actual = car3.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var expected = 'Vehicle: 2016 Tesla S3';
    var actual = car4.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});

function Vehicle(theYear, theMake, theModel) {
    var year = theYear;
    var make = theMake;
    var model = theModel;
    this.getInfo = function () {
        return 'Vehicle: ' + year + ' ' + make + ' ' + model;
    };
}

//Bad example with variables in global scope
test("Function Test", function () {
    expect(2);
    Vehicle(2000, 'Ford', 'Fusion');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    expected = 2000;
    actual = year;
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

test("Failing Function Test", function () {
    expect(1);
    Vehicle(2000, 'Ford', 'Fusion');
    Vehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    expected = 2000; actual = year;
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

test("Encapsulation Test", function () {
    expect(2);
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
    var car2 = new Vehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    expected = 2000;
    actual = year;
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

test("Function Replacement Test", function () {
    expect(2);
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
    var car2 = new Vehicle(2010, 'BMW', 'Z4');
    car1.getInfo = function () { return 'This is a Car'; };
    var expected = 'This is a Car';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var expected = 'This is a Car';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

function Vehicle(theYear, theMake, theModel) {
    this.year = theYear;
    this.make = theMake;
    this.model = theModel;
}
Vehicle.prototype.getInfo = function () { return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model; }

test("Instance Test Using Prototype", function () {
    expect(2);
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
    var car2 = new Vehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

test("Instance Test Using Prototype Replace Function", function () {     
    expect(2);     
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');     
    var car2 = new Vehicle(2010, 'BMW', 'Z4');     
    Vehicle.prototype.getInfo = function () {         
        return 'Car: ' + this.year + ' ' + this.make + ' ' + this.model;     
    }
    var expected = 'Car: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var expected = 'Car: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

function Vehicle(theYear, theMake, theModel) {
    var year = theYear;
    var make = theMake;
    var model = theModel;
    this.getYear = function () {
        return year;
    };
    this.getMake = function () {
        return make;
    };
    this.getModel = function () {
        return model;
    };
}
Vehicle.prototype.getInfo = function () {
    return 'Vehicle: ' + this.getYear() + ' ' + this.getMake() + ' ' + this.getModel();
}

test("Instance Test Using Prototype and getters", function () {
    expect(2);
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
    var car2 = new Vehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

test("Instance Test Using Prototype and getters more", function () {
    expect(4);
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
    var car2 = new Vehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    Vehicle.prototype.getInfo = function () {
        return 'Car Year: ' + this.getYear() + ' Make: ' + this.getMake() + ' Model: ' + this.getModel();
    };
    var expected = 'Car Year: 2000 Make: Ford Model: Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var expected = 'Car Year: 2010 Make: BMW Model: Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

//Implementing inheritance
test('Vehicle Inheritance Test', function () {

    var Vehicle = (function () {
        function Vehicle(year, make, model) {
            this.year = year;
            this.make = make;
            this.model = model;
        }
        Vehicle.prototype.getInfo = function () {
            return this.year + ' ' + this.make + ' ' + this.model;
        };

        Vehicle.prototype.startEngine = function () {
            return 'Vroom';
        };
        return Vehicle;
    })();

    expect(2);

    var v = new Vehicle(2012, 'Toyota', 'Rav4');
    var actual = v.getInfo();
    var expected = '2012 Toyota Rav4';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = v.startEngine();
    var expected = 'Vroom';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});

test('Car Inheritance Test', function () {

    var Vehicle = (function () {
        function Vehicle(year, make, model) {
            this.year = year;
            this.make = make;
            this.model = model;
        }
        Vehicle.prototype.getInfo = function () {
            return this.year + ' ' + this.make + ' ' + this.model;
        };

        Vehicle.prototype.startEngine = function () {
            return 'Vroom';
        };
        return Vehicle;
    })();

    var Car = (function (parent) {
        Car.prototype = new Vehicle();
        Car.prototype.constructor = Car;
        function Car(year, make, model) {
            parent.call(this, year, make, model);
            this.wheelQuantity = 4;
        }
        Car.prototype.getInfo = function () {
            return 'Vehicle Type: Car ' + parent.prototype.getInfo.call(this);
        }
        return Car;
    })(Vehicle);

    expect(6);
    var c = new Car(2012, 'Toyota', 'Rav4');
    var actual = c.year;
    var expected = 2012;
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = c.make;
    var expected = 'Toyota';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = c.model;
    var expected = 'Rav4';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = c.wheelQuantity;
    var expected = 4;
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = c.getInfo();
    var expected = 'Vehicle Type: Car 2012 Toyota Rav4';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = c.startEngine();
    var expected = 'Vroom';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});
 
test('Boat Inheritance Test', function () {

    var Vehicle = (function () {
        function Vehicle(year, make, model) {
            this.year = year;
            this.make = make;
            this.model = model;
        }
        Vehicle.prototype.getInfo = function () {
            return this.year + ' ' + this.make + ' ' + this.model;
        };

        Vehicle.prototype.startEngine = function () {
            return 'Vroom';
        };
        return Vehicle;
    })();

    var Boat = (function (parent) {
        Boat.prototype = new Vehicle();
        Boat.prototype.constructor = Boat;
        function Boat(year, make, model) {
            parent.call(this, year, make, model);
            this.propellerBladeQuantity = 3;
        }
        Boat.prototype.getInfo = function () {
            return 'Vehicle Type: Boat ' + parent.prototype.getInfo.call(this);
        }
        return Boat;
    })(Vehicle);

    expect(6);
    var b = new Boat(1994, 'Sea Ray', 'Signature 200');
    var actual = b.year;
    var expected = 1994;
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = b.make;
    var expected = 'Sea Ray';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = b.model;
    var expected = 'Signature 200'; equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = b.propellerBladeQuantity;
    var expected = 3;
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = b.getInfo(); var expected = 'Vehicle Type: Boat 1994 Sea Ray Signature 200';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
    var actual = b.startEngine();
    var expected = 'Vroom';
    equal(actual, expected, 'Expected value: ' + expected + '  Actual value: ' + actual);
});