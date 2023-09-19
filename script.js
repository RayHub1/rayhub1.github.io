$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) $(".scroll-up-btn").addClass("show");
    else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  //slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  //typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "Petroleum Engineer",
      "Web Developer",
      "Data Analyst",
      "Data Visualizer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Freelancer", "Petroleum Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

function downloadCV() {
  // Replace the 'path/to/your/cv.pdf' with the actual path to your CV file
  const cvFileUrl = "photos/Mkpouto.pdf";

  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = cvFileUrl;

  // Set the download attribute with the desired file name
  link.download = "Mkpouto_Obot_cv.pdf";

  // Programmatically trigger the click event on the anchor element
  link.click();
}
