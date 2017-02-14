/// <reference path="_references.js" /> 

$(document).ready(function () {
    $('#myButton').on('click', submitTheForm);
});

function submitTheForm() {
    $('#myForm').submit();

    //var formData = $('#myForm').serialize();
    //var data = decodeURIComponent(formData);

}

//$(document).ready(function () {
//    $('input[name="comment"]').focus();
//});