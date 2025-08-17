function toggleDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Optional: Hide when clicking outside
window.onclick = function(e) {
  if (!e.target.closest(".profile")) {
    document.getElementById("profileDropdown").style.display = "none";
  }
}
function toggleMenu() {
  const menu = document.getElementById("menuDropdown");
  menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
}
function addWatchlist() {
      const anime = {
        title: "One Piece",
        genre: "Action, Drama",
        rating: "9.1/10",
        image: "onepiece.jpg",
      };

      let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
    }
function addTWatchlist() {
      const anime = {
        title: "AOT",
        genre: "Action, Drama",
        rating: "9.1/10",
        image: "AOT.jpg",
      }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
    }
function ddToWatchlist() {
      const anime = {
        title: "Naruto",
        genre: "Action, Martial Arts",
        rating: "7.9/10",
        image: "Naruto.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
    }
function ToWatchlist() {
      const anime = {
        title: "Demon Slayer",
        genre: "Action, Martial Arts",
        rating: "7.9/10",
        image: "Demon slayer.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function adToWatchlist() {
      const anime = {
        title: "Beraerk",
        genre: "Action, Demons",
        rating: "6.45/10",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f4/Berserk_%281997_anime%29%2C_DVD_cover_1.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist() {
      const anime = {
        title: "Dragon Ball",
        genre: "Action, Demons",
        rating: "6.45/10",
        image: "https://m.media-amazon.com/images/M/MV5BMGQ0ZWE4NDYtYWY0Mi00MjE0LWI1MzctZDA1NGExYzE3N2FiXkEyXkFqcGc@._V1_.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function adoWatchlist() {
      const anime = {
        title: "Bleach",
        genre: "Mystery, Shounen",
        rating: "8.63/10",
        image: "https://static.wikia.nocookie.net/dubbing9585/images/e/ea/Bleach.png/revision/latest/thumbnail/width/360/height/450?cb=20220921205910",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist1() {
      const anime = {
        title: "Death Note",
        genre: "A.ction, Fantasy",
        rating: "8.63/10",
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12981153_b_v8_aa.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist2() {
      const anime = {
        title: "Tokyo Revengers",
        genre: "Action, Timetravel",
        rating: "8.27/10",
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20081301_b_v8_aa.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist3() {
      const anime = {
        title: "Classroom Of The Elite",
        genre: "School, Drama",
        rating: "7.86/10",
        image: "https://images.justwatch.com/poster/298573879/s718/classroom-of-the-elite.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
 function addToWatchlist4() {
      const anime = {
        title: "Haikyu!!",
        genre: "School, Sports",
        rating: "8.46/10",
        image: "https://m.media-amazon.com/images/M/MV5BMGQ0ZWE4NDYtYWY0Mi00MjE0LWI1MzctZDA1NGExYzE3N2FiXkEyXkFqcGc@._V1_.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist5() {
      const anime = {
        title: "SpyXFamily",
        genre: "School, Drama",
        rating: "8.3/10",
        image: "https://m.media-amazon.com/images/I/81HgZ64VEIL._UF1000,1000_QL80_.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist6() {
      const anime = {
        title: "Chainsaw Man",
        genre: "Action, Drama",
        rating: "8.57/10",
        image: "https://www.postershoppe.com/cdn/shop/files/chainsaw-man_black_framed_300x300.jpg?v=1736032756",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist7() {
      const anime = {
        title: "Black Clover",
        genre: "Action,Magic",
        rating: "9.0/10",
        image: "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist8() {
      const anime = {
        title: "My Hero Acadamie",
        genre: "Adventure, Comedy",
        rating: "8.2/10",
        image: "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist9() {
      const anime = {
        title: "BORUTO: NARUTO NEXT GENERATIONS ",
        genre: "Action, Adventure, Superpower",
        rating: "6.6/10",
        image: "https://m.media-amazon.com/images/M/MV5BNDgzYzNhOGUtMWI1Mi00YjJkLWI2NGItOWFlNDE4ZjE0NGExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist10() {
      const anime = {
        title: "One Punch Man",
        genre: "Action, Adventure",
        rating: "8.52/10",
        image: "https://images.justwatch.com/poster/312763447/s718/one-punch-man.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist11() {
      const anime = {
        title: "Frieren:Beyound Journey's End",
        genre: "Drama, Shounen",
        rating: "9.36/10",
        image: "https://upload.wikimedia.org/wikipedia/en/6/60/Frieren_Beyond_Journey%27s_End.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist12() {
      const anime = {
        title: "Vinland Saga",
        genre: " Action, Drama",
        rating: "8.73/10",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist13() {
      const anime = {
        title: "Hunter X Hunter",
        genre: "Adventure, Comedy",
        rating: "9.05/10",
        image: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
function addToWatchlist14() {
      const anime = {
        title: "Solo Leveling",
        genre: "Action,Demons",
        rating: "8.39/10",
        image: "https://m.media-amazon.com/images/M/MV5BM2M4YzdkMTEtMjUyYy00ZWY0LWI5ODQtNGRkZWQ1MzU5MWM2XkEyXkFqcGc@._V1_.jpg",
       }
       let list = JSON.parse(localStorage.getItem("watchlist")) || [];
      list.push(anime);
      localStorage.setItem("watchlist", JSON.stringify(list));
      alert("Added to Watchlist!");
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}