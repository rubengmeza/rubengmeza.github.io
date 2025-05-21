// Get the modal elements.
var modal = document.getElementById('img_modal');
var img = document.getElementById("img");
var captionText = document.getElementById("caption");
//Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0];

function show_image(event)
{
	modal.style.display = "block";
	thumbnail = event.currentTarget;
	img.src = thumbnail.src;
	captionText.innerHTML = thumbnail.alt;
}

// get all thumbnails
var thumbnails = document.querySelectorAll(".thumbnail");

// Loop through each thumbnail and attach the function.
thumbnails.forEach(function(thumbnail) 
{
	thumbnail.addEventListener("click", show_image); 
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Close if you click outside the image.
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

