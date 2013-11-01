//signup.js 
// add your JavaScript code to this file

//onDocReady
//called when the document is ready for manipulation

//function that will be called when the 
//document is ready for manipulation
$(function(){
    //document is now ready for manipulation
    var select = $('.us-states');
    var option;
    var idx;
	var state;

	for (idx = 0; idx < usStates.length; ++idx) {
	    state = usStates[idx];
	    option = $(document.createElement('option'));
	    option.attr('value', state.abbreviation);
	    option.html(state.name);
	    select.append(option);
	    //code to create new option element, populate, and append
	}

	$('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    //this is the raw DOM form element
	    //wrap it in a jQuery object so we can use jQuery methods on it
	    var signupForm = $(this);
	    //select a descendant input element with the name "addr-1"
	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    var addr1Value = addr1Input.val();
	    var zipInput = signupForm.find('input[name="zip"]');
	   	var zipValue = zipInput.val();
	    if (addr1Value && addr1Value.trim().length > 0 && zipValue && zipValue.trim().length > 0) {
	    	return true;
	   	} else {
	   		alert("Only spaces is not allowed!");
	   		return false;
	   	}
	});

	$('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
    	$('.cancel-signup-modal').modal();
	}); //cancel-signup click

	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});

                
}); //on document ready 