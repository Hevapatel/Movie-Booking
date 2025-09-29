const movies = [
      { title: "Avengers", language: "English", genre: "Action", price: 300, rating: 8.5, likes: 1200000, age: "U/A 13+", description: "Earth's mightiest heroes team up to fight against Loki and his alien army.", cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"], reviews: ["Action-packed and entertaining!", "One of the best superhero team-up movies."], trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8" },
      { title: "3 Idiots", language: "Hindi", genre: "Comedy", price: 200, rating: 8.4, likes: 1500000, age: "U/A", description: "Three friends navigate college life while challenging the education system.", cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"], reviews: ["Inspirational and hilarious at the same time.", "A must-watch for students."], trailer: "https://www.youtube.com/watch?v=xvszmNXdM4w" },
      { title: "KGF", language: "Hindi", genre: "Action", price: 250, rating: 8.2, likes: 1100000, age: "U/A 16+", description: "A young man rises from poverty to become a fearsome gangster in the Kolar Gold Fields.", cast: ["Yash", "Srinidhi Shetty"], reviews: ["High-voltage action and mass entertainment!", "Yash's performance is powerful."], trailer: "https://www.youtube.com/watch?v=GpMoLL_80Jk" },
      { title: "Chhello Divas", language: "Gujarati", genre: "Comedy", price: 150, rating: 7.8, likes: 500000, age: "U/A", description: "A coming-of-age comedy about college students and their fun-filled lives.", cast: ["Malhar Thakar", "Yash Soni", "Mitil Jain"], reviews: ["Relatable and funny Gujarati film.", "Perfect slice of college life comedy."], trailer: "https://www.youtube.com/watch?v=yeU2xb7EJwY" },
      { title: "Enthiran", language: "Tamil", genre: "Sci-Fi", price: 350, rating: 7.9, likes: 950000, age: "U/A 13+", description: "A scientist creates a humanoid robot that develops emotions and turns rogue.", cast: ["Rajinikanth", "Aishwarya Rai Bachchan"], reviews: ["Rajinikanth at his best with stunning VFX.", "Sci-fi blockbuster of Indian cinema."], trailer: "https://www.youtube.com/watch?v=sY_F6issHsU" },
      { title: "Swades", language: "Hindi", genre: "Drama", price: 180, rating: 8.2, likes: 700000, age: "U/A", description: "An NRI scientist returns to his homeland and rediscovers his roots.", cast: ["Shah Rukh Khan", "Gayatri Joshi"], reviews: ["Heart-touching and socially relevant.", "SRK's most underrated performance."], trailer: "https://www.youtube.com/watch?v=vc7AZNWvs0M" },
      { title: "Inception", language: "English", genre: "Sci-Fi", price: 120, rating: 8.8, likes: 1600000, age: "U/A 16+", description: "A skilled thief enters people's dreams to steal secrets and plant ideas.", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"], reviews: ["Mind-bending and visually stunning.", "Christopher Nolan’s masterpiece."], trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
      { title: "Parasite", language: "Korean", genre: "Thriller", price: 100, rating: 8.6, likes: 900000, age: "U/A 16+", description: "A poor family infiltrates a wealthy household with unexpected consequences.", cast: ["Song Kang-ho", "Choi Woo-shik", "Park So-dam"], reviews: ["Dark, brilliant, and thought-provoking.", "Oscar-winning cinematic gem."], trailer: "https://www.youtube.com/watch?v=isOGD_7hNIY" },
      { title: "The Dark Knight", language: "English", genre: "Action", price: 320, rating: 9.0, likes: 2000000, age: "U/A 16+", description: "Batman faces his greatest challenge in the form of the Joker.", cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], reviews: ["Heath Ledger’s Joker is legendary.", "Best superhero movie ever made."], trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY" },
      { title: "Munna Bhai M.B.B.S.", language: "Hindi", genre: "Comedy", price: 220, rating: 8.1, likes: 1300000, age: "U/A", description: "A goon enrolls in medical college to fulfill his father’s dream.", cast: ["Sanjay Dutt", "Arshad Warsi", "Boman Irani"], reviews: ["Funny and emotional in equal measure.", "Circuit and Munna’s friendship is iconic."], trailer: "https://www.youtube.com/watch?v=4v-gf3DxJrs" },
      { title: "Baahubali", language: "Telugu", genre: "Action", price: 280, rating: 8.1, likes: 1400000, age: "U/A 13+", description: "A young man learns about his royal heritage and rises to reclaim his kingdom.", cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"], reviews: ["Visually grand and epic storytelling.", "Indian cinema at global standards."], trailer: "https://www.youtube.com/watch?v=sOEg_YZQsTI" },
      { title: "Hellaro", language: "Gujarati", genre: "Drama", price: 160, rating: 8.3, likes: 400000, age: "U/A 13+", description: "Set in 1975, women in a village find liberation through Garba dance.", cast: ["Shraddha Dangar", "Jayesh More"], reviews: ["National Award-winning masterpiece.", "Powerful story of women empowerment."], trailer: "https://www.youtube.com/watch?v=bltwI5d3U9E" },
      { title: "Interstellar", language: "English", genre: "Sci-Fi", price: 360, rating: 8.7, likes: 1700000, age: "U/A 13+", description: "Astronauts travel through a wormhole to save humanity from extinction.", cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], reviews: ["Visually stunning and emotionally deep.", "Nolan delivers another sci-fi classic."], trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E" },
      { title: "Dangal", language: "Hindi", genre: "Drama", price: 200, rating: 8.4, likes: 1500000, age: "U/A", description: "Based on the real story of wrestler Mahavir Singh Phogat training his daughters.", cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"], reviews: ["Inspiring and brilliantly acted.", "One of the best sports dramas."], trailer: "https://www.youtube.com/watch?v=x_7YlGv9u1g" },
      { title: "Train to Busan", language: "Korean", genre: "Thriller", price: 130, rating: 8.0, likes: 800000, age: "U/A 16+", description: "Passengers struggle to survive on a train during a zombie outbreak.", cast: ["Gong Yoo", "Ma Dong-seok", "Kim Su-an"], reviews: ["Thrilling and emotional zombie movie.", "Best Korean action-horror film."], trailer: "https://www.youtube.com/watch?v=pyWuHv2-Abk" },
      { title: "Robot 2.0", language: "Tamil", genre: "Sci-Fi", price: 370, rating: 7.2, likes: 750000, age: "U/A 13+", description: "Dr. Vaseegaran and Chitti battle an evil force threatening mobile networks.", cast: ["Rajinikanth", "Akshay Kumar", "Amy Jackson"], reviews: ["Amazing VFX and grand scale.", "Unique concept but a bit lengthy."], trailer: "https://www.youtube.com/watch?v=MVbeoSPqRs4" }
    ];

    // ======= HELPERS =======
    const el = id => document.getElementById(id);
    const trailerToThumb = url => {
      // Convert YT watch URL to a poster thumbnail
      try {
        const v = new URL(url).searchParams.get('v');
        return `https://img.youtube.com/vi/${v}/hqdefault.jpg`;
      } catch { return ""; }
    };

    const unique = arr => [...new Set(arr)];

    // ======= INIT SELECTS =======
    const movieSelect = el('movieSelect');
    movies.forEach((m, i) => {
      const opt = document.createElement('option');
      opt.value = i; opt.textContent = m.title; movieSelect.appendChild(opt);
    });

    // Filters
    const filterLanguage = el('filterLanguage');
    const filterGenre = el('filterGenre');
    unique(movies.map(m => m.language)).forEach(v => filterLanguage.appendChild(new Option(v, v)));
    unique(movies.map(m => m.genre)).forEach(v => filterGenre.appendChild(new Option(v, v)));

    // Theatres by language (mock)
    const THEATRES = {
      English: ["PVR Central Mall", "INOX City Center", "CineMax Downtown"],
      Hindi: ["PVR Andheri", "Carnival Cinemas", "INOX Vashi"],
      Gujarati: ["City Gold Ashram Road", "Cinepolis Ahmedabad"],
      Tamil: ["AGS Cinemas", "PVR Grand Mall"],
      Telugu: ["AMB Cinemas", "PVR Hyderabad"],
      Korean: ["PVR Icon", "INOX Nexus"]
    };

    // Slots (mock)
    const SLOTS = ["10:00 AM", "01:30 PM", "05:15 PM", "08:45 PM", "11:30 PM"];

    // ======= RENDER MOVIE DETAILS =======
    let currentIndex = 0; // default selection

    function renderMovie(i){
      const m = movies[i];
      currentIndex = i;

      // Trailer iframe
      const v = new URL(m.trailer).searchParams.get('v');
      el('trailerFrame').src = v ? `https://www.youtube.com/embed/${v}` : m.trailer;

      // Headings & badges
      el('movieTitle').textContent = m.title;
      el('movieDescription').textContent = m.description;
      el('ageBadge').textContent = m.age;
      el('langBadge').textContent = m.language;
      el('genreBadge').textContent = m.genre;
      el('ratingValue').textContent = m.rating;
      el('priceValue').textContent = m.price;
      el('likesValue').textContent = Intl.NumberFormat('en', {notation:'compact'}).format(m.likes) + ' likes';

      // Poster & quick facts
      el('posterImg').src = trailerToThumb(m.trailer);
      el('quickRating').textContent = m.rating;
      el('quickPrice').textContent = `₹${m.price}`;
      el('quickGenre').textContent = `${m.genre} • ${m.language}`;

      // Cast chips
      const castRow = el('castRow');
      castRow.innerHTML = '';
      m.cast.forEach(name => {
        const chip = document.createElement('div');
        chip.className = 'flex items-center gap-2 glass rounded-2xl px-3 py-2 text-sm';
        const circle = document.createElement('div');
        circle.className = 'w-8 h-8 rounded-full bg-white/10 grid place-items-center text-xs';
        circle.textContent = name.split(' ').map(s=>s[0]).slice(0,2).join('');
        const label = document.createElement('span');
        label.textContent = name;
        chip.append(circle, label); castRow.appendChild(chip);
      });

      // Reviews
      const reviewsCol = el('reviewsCol');
      reviewsCol.innerHTML = '';
      m.reviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'glass rounded-2xl p-3 text-sm text-white/80';
        card.innerHTML = `❝ ${r} ❞`;
        reviewsCol.appendChild(card);
      });

      // YouTube link
      const watchOnYT = el('watchOnYT');
      watchOnYT.href = m.trailer;

      // Preload booking controls
      populateTheatres(m.language);
      renderSlots();
      generateSeats();

      // Ensure dropdown reflects selection
      movieSelect.value = i;
    }

    // ======= BOOKING CONTROLS =======
    const theatreSelect = el('theatreSelect');
    const slotRow = el('slotRow');

    function populateTheatres(lang){
      const list = THEATRES[lang] || ["PVR Cinemas", "INOX"];
      theatreSelect.innerHTML = '';
      list.forEach(t => theatreSelect.appendChild(new Option(t, t)));
    }

    function renderSlots(){
      slotRow.innerHTML = '';
      SLOTS.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm';
        btn.textContent = s; btn.dataset.slot = s;
        btn.addEventListener('click', () => {
          [...slotRow.children].forEach(c => c.classList.remove('tag'));
          btn.classList.add('tag');
          slotRow.dataset.selected = s;
        });
        slotRow.appendChild(btn);
      });
      // Default select first
      slotRow.children[0]?.click();
    }

    // Seats grid
    const seatsGrid = el('seatsGrid');
    const selected = new Set();

    function generateSeats(){
      seatsGrid.innerHTML = '';
      selected.clear();
      const rows = 8, cols = 12;
      const bookedIndices = new Set();
      // Randomly mark ~20% booked for demo
      while (bookedIndices.size < Math.floor(rows*cols*0.2)) {
        bookedIndices.add(Math.floor(Math.random()*rows*cols));
      }
      for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
          const i = r*cols+c;
          const div = document.createElement('div');
          div.className = 'seat available';
          if(bookedIndices.has(i)) { div.classList.remove('available'); div.classList.add('booked'); }
          div.textContent = String.fromCharCode(65+r)+(c+1);
          div.dataset.id = i;
          div.addEventListener('click', () => {
            if(div.classList.contains('booked')) return;
            div.classList.toggle('selected');
            if(div.classList.contains('selected')) selected.add(i); else selected.delete(i);
            updateTotals();
          });
          seatsGrid.appendChild(div);
        }
      }
      updateTotals();
    }

    function updateTotals(){
      el('selectedCount').textContent = selected.size;
      const price = movies[currentIndex].price * selected.size;
      el('totalPrice').textContent = `₹${price}`;
    }

    // ======= EVENTS =======
    movieSelect.addEventListener('change', e => renderMovie(Number(e.target.value)));
    el('bookNowTop').addEventListener('click', () => document.getElementById('bookingSection').scrollIntoView({behavior:'smooth'}));
    el('scrollToBooking').addEventListener('click', () => document.getElementById('bookingSection').scrollIntoView({behavior:'smooth'}));

    // Filters: when applied, auto-jump to first matching movie
    function applyFilters(){
      const L = filterLanguage.value; const G = filterGenre.value;
      const idx = movies.findIndex(m => (!L || m.language===L) && (!G || m.genre===G));
      if(idx>=0) renderMovie(idx);
    }
    filterLanguage.addEventListener('change', applyFilters);
    filterGenre.addEventListener('change', applyFilters);
    el('clearFilters').addEventListener('click', () => { filterLanguage.value=''; filterGenre.value=''; renderMovie(0); });

    // Proceed to Payment (Modal)
    const modal = document.getElementById('modal');
    function openModal(){
      const m = movies[currentIndex];
      el('sumMovie').textContent = m.title;
      el('sumDate').textContent = el('dateInput').value || new Date().toISOString().slice(0,10);
      el('sumTheatre').textContent = theatreSelect.value;
      el('sumSlot').textContent = slotRow.dataset.selected || SLOTS[0];
      const seats = [...selected].sort((a,b)=>a-b).map(i=>{
        const cols = 12; const r = Math.floor(i/cols), c = i%cols; return String.fromCharCode(65+r)+(c+1);
      });
      el('sumSeats').textContent = seats.join(', ') || '—';
      el('sumTotal').textContent = `₹${m.price * selected.size}`;
      modal.classList.remove('hidden');
    }

    document.getElementById('proceedBtn').addEventListener('click', openModal);
    document.getElementById('closeModal').addEventListener('click', ()=> modal.classList.add('hidden'));
    document.getElementById('closeModal2').addEventListener('click', ()=> modal.classList.add('hidden'));
    document.getElementById('confirmPay').addEventListener('click', ()=>{
      alert('This is a demo – integrate your payment gateway here.');
      modal.classList.add('hidden');
    });

    // Default render first movie
    renderMovie(0);

    // Default date today
    el('dateInput').value = new Date().toISOString().slice(0,10);