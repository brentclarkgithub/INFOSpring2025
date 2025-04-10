	PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "images/print5.png"
	PrintButton2.src = "images/print6.png"
	logo1.src = "images/logo1.png"
	logo2.src = "images/logo2.png"
}


		var imgArray = new Array(
			'Image1lg.jpg',
			'Image2lg.jpg',
			'Image3lg.jpg',
			'Image4lg.jpg'
			

		);


		var titleArray = new Array(
			'Robin',
			'Owl',
			'Hawk',
			'Swan'
			
		);
			
		var imgPath = "images/fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
