'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	//$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	//document.getElementsByClassName("project").addEventListener("click", e.preventDefault());
	$(".project").click(function(){
		e.preventDefault();
	});


	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	//console.log(idNumber);
	var url = "http://localhost:3000/project/" + idNumber;
	var response = ""
	$.get(url, response);
	
	var info = addProject(url);
	console.log($.get(url, response));
	//console.log("User clicked on project " + idNumber);
	$(this).closest(".project").click(function(){		
		console.log(this.id);
		$(".thumbnail .details").html("hi");
	});
	
}



function addProject(result) {
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="img">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>'; 
}
