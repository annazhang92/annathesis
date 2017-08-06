
$( "#dialog" ).dialog({
  autoOpen: false,
  width: 400,
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
  $( "#dialog" ).dialog( "open" );
  event.preventDefault();
});

