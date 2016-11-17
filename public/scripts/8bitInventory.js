console.log( 'js' );
// properties by which searches can be done
var sizes = [ 'small', 'medium', 'large' ];
var colors = [ 'red', 'orange', 'yellow', 'green', 'mermaid treasure', 'blue', 'purple' ];

////// example object //////
var testObject = {
  color: 'blue',
  name: 'blueberry',
  size: 'small'
}; // end testObject

////// global array of items in inventory //////
var items = [];
items.push( testObject);

$( document ).ready( function(){
  console.log( 'JQ' );
}); // end doc ready
