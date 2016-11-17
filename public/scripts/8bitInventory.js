// properties by which searches can be done
var sizes = [ 'small', 'medium', 'large' ];
var colors = [ 'red', 'orange', 'yellow', 'green', 'mermaid treasure', 'blue', 'purple' ];

////// global array of items in inventory //////
var items = [];

$( document ).ready( function(){
  var findObject = function( colorCheck, sizeCheck ){
    console.log( 'in findObject. Looking for:', colorCheck, sizeCheck );
    // array of matches
    var matches = [];
    for ( var i = 0; i < items.length; i++ ) {
      if( items[i].color == colorCheck && items[i].size == sizeCheck ){
        // match, add to array
        matches.push( items[i] );
      } // end if
    } // end for
    // return array of matches
    return matches;
  }; // end findObject

  var getObjects = function(){
    console.log( 'in getObjects');
    // populate the items array
    ////// replace the stuff in this function with getting items from the database ////////
    ////// example object //////
    var testObject = {
      color: 'blue',
      name: 'blueberry',
      size: 'small'
    }; // end testObject
    items.push( testObject );
  }; // end getObjects

  // get objects when doc is ready
  getObjects();
  // the below are tests to show what is returned when running findObject
  console.log( findObject( 'blue', 'small' ) );
  console.log( findObject( 'blue', 'large' ) );

}); // end doc ready
