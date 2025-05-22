// Get the modal elements.
var modal = document.getElementById('img_modal');
var img = document.getElementById("img");
var captionText = document.getElementById("caption");
//Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0];

function show_image(event)
{
	modal.style.display = "block";

	var overlay = event.currentTarget; // The clicked overlay.
	var thumbnail = overlay.previousElementSibling; // Image element of the overlay.

	img.src = thumbnail.src; // Sets the modals image as the thumbnails src.
	captionText.innerHTML = thumbnail.alt;
}

// get all overlays
var overlays = document.querySelectorAll(".overlay");

// Loop through each overlay and attach the function.
overlays.forEach(function(overlay) 
{
	overlay.addEventListener("click", show_image); 
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

