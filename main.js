document.addEventListener('DOMContentLoaded', function() {
    const topics = document.querySelectorAll(".topic");
    topics.forEach((topic) => {
        topic.addEventListener("click", () => {
            topic.classList.toggle("active");
            
     
        });
    });

    
    });

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }


      
    