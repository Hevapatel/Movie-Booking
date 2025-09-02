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
    { title: "Avengers", language: "English", genre: "Action", price: 300 },
    { title: "3 Idiots", language: "Hindi", genre: "Comedy", price: 200 },
    { title: "KGF", language: "Hindi", genre: "Action", price: 250 },
    { title: "Chhello Divas", language: "Gujarati", genre: "Comedy", price: 150 },
    { title: "Enthiran", language: "Tamil", genre: "Sci-Fi", price: 350 },
    { title: "Swades", language: "Hindi", genre: "Drama", price: 180 },
    { title: "Inception", language: "English", genre: "Sci-Fi", price: 120 },
    { title: "Parasite", language: "Korean", genre: "Thriller", price: 100 }
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
        <h3>${m.title}</h3>
        <div>Language: ${m.language}</div>
        <div>Genre: ${m.genre}</div>
        <div>Price: ₹${m.price}</div>
      `;
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

  // initial render
  render(movies);


