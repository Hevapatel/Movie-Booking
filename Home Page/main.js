let username=localStorage.getItem('userfullname');
let unameblk=document.getElementById('uname');
unameblk.innerHTML=`<p>Hello ${username}!</p>`;

let p_icon=document.getElementById('profile-icon');
let p_block=document.getElementById('profile-block');
p_icon.addEventListener('click',()=>{
    p_block.style.display='block';
})
let p_close=document.getElementById('close');
p_close.addEventListener('click',()=>{
    p_block.style.display='none';
})
let l_btn=document.getElementById('lbtn');
l_btn.addEventListener('click',()=>{
    location.href='../Login Page/login.html';
})

  // Sample data
  const movies = [
    { title: "Avengers", language: "English", genre: "Action", price: 300, rating: 8.5, likes: 1200000, img:"../Movie Posters/Avengers.jpg"},
    { title: "3 Idiots", language: "Hindi", genre: "Comedy", price: 200, rating: 8.4, likes: 1500000, img:"../Movie Posters/3Idiots.jpg"},
    { title: "KGF", language: "Hindi", genre: "Action", price: 250, rating: 8.2, likes: 1100000, img:"../Movie Posters/KGF.jpg" },
    { title: "Chhello Divas", language: "Gujarati", genre: "Comedy", price: 150, rating: 7.8, likes: 500000, img:"../Movie Posters/ChelloDivas.jpg"},
    { title: "Enthiran", language: "Tamil", genre: "Sci-Fi", price: 350, rating: 7.9, likes: 950000, img:"../Movie Posters/Enthiran.png"},
    { title: "Swades", language: "Hindi", genre: "Drama", price: 180 , rating: 8.2, likes: 700000, img:"../Movie Posters/Swades.jpg"},
    { title: "Inception", language: "English", genre: "Sci-Fi", price: 120 , rating: 8.8, likes: 1600000, img:"../Movie Posters/Inception.jpg"},
    { title: "Parasite", language: "Korean", genre: "Thriller", price: 100, rating: 8.6, likes: 900000, img:"../Movie Posters/Parasite.jpg"},
    { title: "The Dark Knight", language: "English", genre: "Action", price: 320, rating: 9.0, likes: 2000000, img:"../Movie Posters/TheDarkKnight2.jpg"},
    { title: "Munna Bhai M.B.B.S.", language: "Hindi", genre: "Comedy", price: 220, rating: 8.1, likes: 1300000, img:"../Movie Posters/MunnabhaiMBBS.jpg"},
    { title: "Baahubali", language: "Telugu", genre: "Action", price: 280, rating: 8.1, likes: 1400000, img:"../Movie Posters/Bahubali.jpg"},
    { title: "Hellaro", language: "Gujarati", genre: "Drama", price: 160, rating: 8.3, likes: 400000, img:"../Movie Posters/Hellaro.jpg"},
    { title: "Interstellar", language: "English", genre: "Sci-Fi", price: 360, rating: 8.7, likes: 1700000, img:"../Movie Posters/Interstellar.jpg"},
    { title: "Dangal", language: "Hindi", genre: "Drama", price: 200, rating: 8.4, likes: 1500000, img:"../Movie Posters/Dangal.jpg"},
    { title: "Train to Busan", language: "Korean", genre: "Thriller", price: 130, rating: 8.0, likes: 800000, img:"../Movie Posters/TrainToBusan.jpg"},
    { title: "Robot 2.0", language: "Tamil", genre: "Sci-Fi", price: 370, rating: 7.2, likes: 750000, img:"../Movie Posters/Robot2.0.png"}
  ];

  const els = {
    searchInput: document.getElementById('searched_movie'),
    searchBtn: document.getElementById('search'),
    filtersBtn: document.getElementById('filters'),
    popup: document.getElementById('filterPopup'),
    overlay: document.getElementById('overlay'),
    applyBtn: document.getElementById('applyFiltersBtn'),
    clearBtn: document.getElementById('clearFiltersBtn'),
    closeBtn: document.getElementById('closeFiltersBtn'),
    lang: document.getElementById('languageFilter'),
    genre: document.getElementById('genreFilter'),
    price: document.getElementById('maxPriceFilter'),
    list: document.getElementById('movieList'),
  };

  // state = search + filters combined
  const state = { q: '', language: '', genre: '', maxPrice: '' };

  function render(list) {
    els.list.innerHTML = '';
    if (!list.length) {
      els.list.innerHTML = '<p style="padding:16px">No movies found.</p>';
      return;
    }
    list.forEach(m => {
      const card = document.createElement('div');
      card.className = 'movie';
      card.innerHTML = `
        <img src="${m.img}" alt="${m.title}" class="movie-poster" />
        <h3>${m.title}</h3>
        <p>Language: ${m.language}</p>
        <p>Genre: ${m.genre}</p>
        <p>Price: ₹${m.price}</p>
        <p>⭐ Rating: ${m.rating}</p>
        <p>❤️ Likes: ${m.likes.toLocaleString()}</p>
      `;
      card.addEventListener('click', () => {
      // Save clicked movie details in localStorage
      localStorage.setItem("selectedMovie", JSON.stringify(m));
      
      const pageName = m.title.replace(/\s+/g, '').replace(/[^a-zA-Z0-9\-]/g, '');
      window.location.href = `../Movie Page/Movies/${pageName}.html`;// change filename if different
    });
      els.list.appendChild(card);
    });
  }
  

  function applyAllFilters() {
    const q = state.q.trim().toLowerCase();
    const results = movies.filter(m =>
      (q === '' || m.title.toLowerCase().includes(q)) &&
      (state.language === '' || m.language === state.language) &&
      (state.genre === '' || m.genre === state.genre) &&
      (state.maxPrice === '' || m.price <= Number(state.maxPrice))
    );
    render(results);
  }

  // Popup controls
  function openFilters() {
    els.popup.classList.add('active');
    els.overlay.classList.add('show');
  }
  function closeFilters() {
    els.popup.classList.remove('active');
    els.overlay.classList.remove('show');
  }

  // Events
  els.searchBtn.addEventListener('click', () => {
    state.q = els.searchInput.value;
    applyAllFilters();
  });
  // (optional live search)
  els.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      state.q = els.searchInput.value;
      applyAllFilters();
    }
  });

  els.filtersBtn.addEventListener('click', openFilters);
  els.overlay.addEventListener('click', closeFilters);
  els.closeBtn.addEventListener('click', closeFilters);

  els.applyBtn.addEventListener('click', () => {
    state.language = els.lang.value;
    state.genre = els.genre.value;
    state.maxPrice = els.price.value;
    closeFilters();
    applyAllFilters();
  });

  els.clearBtn.addEventListener('click', () => {
    els.lang.value = '';
    els.genre.value = '';
    els.price.value = '';
    state.language = state.genre = state.maxPrice = '';
    applyAllFilters();
  });

  // 👇 This listens for changes in the search bar and updates results instantly
els.searchInput.addEventListener('input', () => {
  state.q = els.searchInput.value; // update state with current value
  applyAllFilters(); // re-render based on new query (even if empty)
});


  // initial render
  render(movies);


