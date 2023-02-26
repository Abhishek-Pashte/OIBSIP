/* Function to clear screen */
function Clear() {
    document.getElementById( "screen" ).value = "";
}

/* Function to display inpunt on screen */
function Dis( data ) {
    document.getElementById( "screen" ).value += data;
}

/* Function to add operators in equation */
function Solve( data ) {
    document.getElementById( "screen" ).value += data;
}

/* Function to evaluate the equation */
function Result() {
    var num1 = document.getElementById( 'screen' ).value;
    var num2 = eval( num1 );
    document.getElementById( 'screen' ).value = num2;
}

/* Function to validate the input */
function validate_input( evt ) {

    // Only ASCII character in that range allowed
    var ASCIICode = ( evt.which ) ? evt.which : evt.keyCode
    if ( ASCIICode > 31 && ( ASCIICode < 48 || ASCIICode > 57 ) ) {
        return false;
    }
    return true;
}

/* Function to remove last input element */
function Back() {
    var data = document.getElementById( "screen" ).value;
    if ( data.length > 0 ) {
        document.getElementById( "screen" ).value = data.substring( 0, data.length - 1 );
    }
}