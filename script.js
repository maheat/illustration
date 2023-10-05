// JavaScript code
    catGroup = document.getElementById("cat");
    bgGroup = document.getElementById("bg");
    insideGroup = document.getElementById("inside");
  
    // Initially hide the "inside" group
    insideGroup.style.display = "none";
  
    // Add a click event listener to the "bg" group to show the "inside" group
    bgGroup.addEventListener("click", function () {
      insideGroup.style.display = "block";
    });
