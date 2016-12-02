$( document ).ready( function(){
  $( '#searchButton' ).on( 'click', function(){
    // get user input from text input field with id 'searchIn'
    var searchText = $( '#searchIn' ).val();
    console.log( 'in searchButton on click:', searchText );
    // assemble search url
    var searchUrl = 'https://archive.org/advancedsearch.php?q=' + searchText + '&output=json';
    // ajax call to archive.org
    $.ajax({
      url: searchUrl,
      dataType: 'JSON',
      success: function( data ){
        // console log out returned data
        console.log( 'in ajax success, data:' , data );
        // ID info needed within the returned info
        // after looking at the data returned we can see our info is in data.response.docs
        // display data from search to DOM
        showResults( data.response.docs );
      }
    }); // end ajax
  }); //end searchButton on click
  var showResults = function( searchResults ){
    console.log( 'in showResults:', searchResults );
    // loop through results and display on DOM
    var outputText = '';
    for (var i = 0; i < searchResults.length; i++) {
      // this is the link URL to the detail page for the object using the identifier// see the included image for more
      outputText += '<p><strong><a href="https://archive.org/details/' + searchResults[i].identifier + '">' + searchResults[i].identifier + '</a>:</strong> ' + searchResults[i].description + '</p>';
    } // end for
    $( '#outputDiv' ).html( outputText );
  }; //end showResults
}); // end doc ready
