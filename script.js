function showEvents() {
    var eventsDiv = document.getElementById('events');
    eventsDiv.classList.toggle('hidden');
  }
  
  function filterEvents() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('eventList');
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
  
  function toggleRegistrationLinks() {
    var registrationLinks = document.getElementById("registration-links");
    if (registrationLinks.style.display === "block") {
        registrationLinks.style.display = "none";
    } else {
        registrationLinks.style.display = "block";
    }
  }
  
  function loadGallery() {
    var imageContainer = document.getElementById("image-container");
  
    // Array of image URLs
    var imageUrls = [
      "BGMI.png",
      "CodeTroopers Contest.png",
      "download.png",
      "download.png",
      "download.png",
      "download.png",
      "download.png",
      "download.png",
      "download.png",
      "download.png"
    ];
  
    // Clear previous images
    imageContainer.innerHTML = "";
  
    // Load and display images
    for (var i = 0; i < imageUrls.length; i++) {
      var image = document.createElement("img");
      image.src = imageUrls[i];
      image.alt = "Image " + (i + 1);
      image.className = "gallery-image";
      imageContainer.appendChild(image);
    }
  }
  
  function showHomePage() {
    var homeContent = document.getElementById("home-content");
  
    // Toggle display of home content
    if (homeContent.style.display === "block") {
      homeContent.style.display = "none";
    } else {
      homeContent.style.display = "block";
    }
  }
  
  function showContactDetails() {
    var contactDetails = document.getElementById("contact-details");
  
    // Toggle display of contact details
    if (contactDetails.style.display === "block") {
      contactDetails.style.display = "none";
    } else {
      contactDetails.style.display = "block";
    }
  }