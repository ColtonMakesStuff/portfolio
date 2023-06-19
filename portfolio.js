window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("header").style.fontSize = "30px";
    } else {
      document.getElementById("header").style.fontSize = "90px";
    }
  }