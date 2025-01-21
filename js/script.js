document.addEventListener("DOMContentLoaded", () => {
  // HTML & CSS Progress Circular Bar
  const htmlProgress = document.querySelector(".html-css");
  const htmlValue = document.querySelector(".html-progress");

  let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlSpeed = 30;

  if (htmlProgress && htmlValue) {
    const progressHtml = setInterval(() => {
      htmlStartValue++;
      htmlValue.textContent = `${htmlStartValue}%`;
      htmlProgress.style.background = `conic-gradient(#fca61f ${
        htmlStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (htmlStartValue === htmlEndValue) {
        clearInterval(progressHtml);
      }
    }, htmlSpeed);
  } else {
    console.warn("HTML progress elements not found.");
  }

  // JavaScript Progress Circular Bar
  const javascriptProgress = document.querySelector(".javascript");
  const javascriptValue = document.querySelector(".javascript-progress");

  let javascriptStartValue = 0,
    javascriptEndValue = 75,
    jsSpeed = 30;

  if (javascriptProgress && javascriptValue) {
    const progressJs = setInterval(() => {
      javascriptStartValue++;
      javascriptValue.textContent = `${javascriptStartValue}%`;
      javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
        javascriptStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (javascriptStartValue === javascriptEndValue) {
        clearInterval(progressJs);
      }
    }, jsSpeed);
  } else {
    console.warn("JavaScript progress elements not found.");
  }

  // PHP Progress Circular Bar
  const phpProgress = document.querySelector(".php");
  const phpValue = document.querySelector(".php-progress");

  let phpStartValue = 0,
    phpEndValue = 80,
    phpSpeed = 30;

  if (phpProgress && phpValue) {
    const progressPhp = setInterval(() => {
      phpStartValue++;
      phpValue.textContent = `${phpStartValue}%`;
      phpProgress.style.background = `conic-gradient(#20c997 ${
        phpStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (phpStartValue === phpEndValue) {
        clearInterval(progressPhp);
      }
    }, phpSpeed);
  } else {
    console.warn("PHP progress elements not found.");
  }

  // ReactJS Progress Circular Bar
  const reactProgress = document.querySelector(".reactjs");
  const reactValue = document.querySelector(".reactjs-progress");

  let reactStartValue = 0,
    reactEndValue = 30,
    reactSpeed = 30;

  if (reactProgress && reactValue) {
    const progressReact = setInterval(() => {
      reactStartValue++;
      reactValue.textContent = `${reactStartValue}%`;
      reactProgress.style.background = `conic-gradient(#3f396d ${
        reactStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (reactStartValue === reactEndValue) {
        clearInterval(progressReact);
      }
    }, reactSpeed);
  } else {
    console.warn("ReactJS progress elements not found.");
  }

  // Filter using JavaScript with jQuery
  if (typeof $ !== "undefined") {
    $(document).ready(function () {
      $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value === "all") {
          $(".post").show("1000");
        } else {
          $(".post")
            .not("." + value)
            .hide("1000");
          $(".post")
            .filter("." + value)
            .show("1000");
        }
      });
    });
  } else {
    console.warn("jQuery is not loaded.");
  }

  // Sticky Navbar
  const navbar = document.getElementById("navbar-top");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("fixed-top");
        const navbarHeight = navbar.offsetHeight;
        document.body.style.paddingTop = navbarHeight + "px";
      } else {
        navbar.classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
      }
    });
  } else {
    console.warn("Navbar element not found.");
  }

  // Back to Top Button
  const mybutton = document.getElementById("btn-back-to-top");

  if (mybutton) {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    mybutton.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  } else {
    console.warn("Back to Top button not found.");
  }
});
