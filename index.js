// Search bar functionality
function searchCourses() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("coursesList");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h2")[0]; // Get the course name from h2 element
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ""; // Show the course if it matches the search query
    } else {
      li[i].style.display = "none"; // Hide the course if it does not match the search query
    }
  }
}
// Filter by level functionality
function filterCoursesByLevel(level) {
  var courses = document.getElementsByClassName("course-container");
  for (var i = 0; i < courses.length; i++) {
    var courseLevel = courses[i].getAttribute("data-level");
    if (courseLevel === level || level === "all") {
      courses[i].style.display = "";
    } else {
      courses[i].style.display = "none";
    }
  }
}

// Sorting functionality
function sortCoursesByLevel() {
  var coursesList = document.getElementById("coursesList");
  var courses = coursesList.getElementsByClassName("course-container");
  var coursesArray = Array.from(courses);
  coursesArray.sort(function (a, b) {
    return a.getAttribute("data-level") - b.getAttribute("data-level");
  });
  coursesArray.forEach(function (course) {
    coursesList.appendChild(course);
  });
}

// Hide and show the contents of the active links
var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
