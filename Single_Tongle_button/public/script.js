/*var firebaseConfig = {
    apiKey: "AIzaSyD4r9IZ4nDeFWVTv4W52nB_13l1YC6d7fc",
    authDomain: "toggle-button-3d8fe.firebaseapp.com",
    databaseURL: "test-666a1-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "toggle-button-3d8fe",
    storageBucket: "toggle-button-3d8fe.appspot.com",
    messagingSenderId: "807063547069",
    appId: "1:807063547069:web:0ca44bccf198b408de1bd4",
    measurementId: "G-7Q81S5145B"
  };*/
  const firebaseConfig = {
	apiKey: "AIzaSyDfGwuA2y07kYXTRm7O-hqCRB32R8lcang",
	authDomain: "esp32-car-74da4.firebaseapp.com",
	databaseURL: "https://esp32-car-74da4-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "esp32-car-74da4",
	storageBucket: "esp32-car-74da4.appspot.com",
	appId: "1:961492586834:web:4c7c4ea73b4a39ef5b2a8b",
	messagingSenderId: "961492586834"
  };
  


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Moter1Status;

	database.ref().on("value", function(snap){
		Moter1Status = snap.val().Moter1Status;
		/*if(Moter1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}*/
	});

    /*$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Moter1Status");

		if(Moter1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Moter1Status = "0";
		} else {
			firebaseRef.set("1");
			Moter1Status = "1";
		}
	});*/

	$(".front-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Moter1Status");

		firebaseRef.set("1");
		Moter1Status = "1";
	});
	
	$(".back-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Moter1Status");

		firebaseRef.set("2");
		Moter1Status = "2";
	});

	$(".beak-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Moter1Status");

		firebaseRef.set("0");
		Moter1Status = "0";
	});

	$(".left-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Moter1Status");

		firebaseRef.set("3");
		Moter1Status = "3";
	});
	$(".right-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Moter1Status");

		firebaseRef.set("4");
		Moter1Status = "4";
	});



});
