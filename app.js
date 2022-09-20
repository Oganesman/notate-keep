var app = angular.module('app', ['ngRoute'])

app.controller('mainCtrl', function ($http, $scope) {
	// $http.get('http://localhost:3001/books')
	// 	.then(function (result) {
	// 		$scope.books = result.data
	// 		console.log('success', result.data);
	// 	}, function (error) {
	// 		console.log('error', error);
	// 	})


	// $scope.onSignIn = (googleUser) =>{
	// 	var profile = googleUser.getBasicProfile();
	// 	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	// 	console.log('Name: ' + profile.getName());
	// 	console.log('Image URL: ' + profile.getImageUrl());
	// 	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.


	//  }



	$scope.biba = 'qwer'
	$scope.addPost = function (book) {
		var body = {
			"name": book,
			"createTime": "createTime",
			"updateTime": "updateTime",
			"trashTime": "trashTime",
			"trashed": true,
			"attachments": [
				{
					name: 'hello'
				}
			],
			"permissions": [
				{
					biba: 'hello'
				}
			],
			"title": 'string',
			"body": {
				boba: 'hello'
			}
		}




		// $http.post('https://keep.googleapis.com/v1/notes', body)
		// 	.then(result => console.log(result))
		// 	.catch(error => console.log(error))
	}
})



//  function onSignIn(googleUser) {
// 	var profile = googleUser.getBasicProfile();
// 	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
// 	console.log('Name: ' + profile.getName());
// 	console.log('Image URL: ' + profile.getImageUrl());
// 	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//  }