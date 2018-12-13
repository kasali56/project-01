{/* <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script> */ }

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAsBSMWdIEzARseH2Ar2_L3B-z3pxUeSJs",
  authDomain: "trademark-c83fc.firebaseapp.com",
  databaseURL: "https://trademark-c83fc.firebaseio.com",
  projectId: "trademark-c83fc",
  storageBucket: "trademark-c83fc.appspot.com",
  messagingSenderId: "18387554473"
};
firebase.initializeApp(config);
var database = firebase.database();
var apiKey = "6ee03502d73e4ad2afb51c8061f7ae16";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;
// Resources Page by Tola
function apistuff(searchTerm) {
  url += "&q=";
  url += searchTerm;
  q = "User-input";
  $.ajax({
    url: url,
    method: 'GET',
  }).then(function (result) {
    console.log(result,url);

  });
}
$(document).ready(function () {
  // $.ajax({
  //   url: url,
  //   method: 'GET',
  // }).this(function (result) {
  //   console.log(result);
  // }).fail(function (err) {
  //   throw err;
  // });


  $("#searchButton").on("click", function (search) {
    search.preventDefault();
    // Pick up search terms written in form 
    var searchTerm = $("#searchTerm").val().trim();
    console.log(searchTerm);
    apistuff(searchTerm);

    // Pick up number of results selected by user
    nResults = $("#recordsRetrieve").val();
  });
  // The above is shorthand for the following operations:
  // var rootRef = firebase.database().ref();
  // var adaRef = rootRef.child("users/ada");
  // url.("load", function () {
  //   if (this.responseText === '{"Response":"False","Error":"No article found!"}') {
  //     alert("No result.");
  //   } else {
  //     var result = JSON.parse(this.responseText);
  //     console.log(result);
  //     result = JSON.stringify(result);
  //     document.getElementById("present_result").innerHTML = result;
  //   }
  // });


});

