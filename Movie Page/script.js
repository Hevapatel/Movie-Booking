document.addEventListener('DOMContentLoaded', () => {
    // --- Existing DOM Elements ---
    const seatGrid = document.querySelector('.seat-grid');
    const slotButtons = document.querySelectorAll('.slot-button');
    const totalSeatsSpan = document.getElementById('totalSeats');
    const totalPriceSpan = document.getElementById('totalPrice');

    // --- NEW Modal DOM Elements ---
    const proceedButton = document.getElementById('proceedToPayment');
    const modal = document.getElementById('paymentModal');
    const closeButton = document.querySelector('.close-button');
    const dateInput = document.getElementById('date');
    const theatreSelect = document.getElementById('theatre');
    
    // Modal Display Elements
    const modalDate = document.getElementById('modalDate');
    const modalTheatre = document.getElementById('modalTheatre');
    const modalSlot = document.getElementById('modalSlot');
    const modalSeatsList = document.getElementById('modalSeatsList');
    const modalTicketCount = document.getElementById('modalTicketCount');
    const modalFinalPrice = document.getElementById('modalFinalPrice');

    const seatPrice = 150; // Example price per seat
    let selectedSeats = [];

    // --- Helper Functions ---
    
    function updateBookingSummary() {
        const count = selectedSeats.length;
        const total = count * seatPrice;
        totalSeatsSpan.textContent = count;
        totalPriceSpan.textContent = `₹${total}`;

        // Disable button if no seats selected
        proceedButton.disabled = count === 0;
        proceedButton.style.opacity = count === 0 ? 0.6 : 1;
    }

    function resetSeatSelection() {
        selectedSeats = [];
        document.querySelectorAll('.seat.selected').forEach(seat => {
            seat.classList.remove('selected');
        });
        updateBookingSummary();
    }

    // --- Slot Selection ---
    slotButtons.forEach(button => {
        button.addEventListener('click', () => {
            slotButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Reset seat selection when slot changes
            resetSeatSelection(); 
        });
    });

    // --- Seat Selection ---
    seatGrid.addEventListener('click', (e) => {
        const clickedSeat = e.target;
        
        if (clickedSeat.classList.contains('seat') && !clickedSeat.classList.contains('booked')) {
            const seatId = clickedSeat.dataset.seat;

            if (clickedSeat.classList.contains('selected')) {
                clickedSeat.classList.remove('selected');
                selectedSeats = selectedSeats.filter(seat => seat !== seatId);
            } else {
                clickedSeat.classList.add('selected');
                selectedSeats.push(seatId);
            }
            // Sort seats for clean display in the modal
            selectedSeats.sort(); 
            updateBookingSummary();
        }
    });

    // --- Modal Logic ---

    function populateModal() {
        // Get currently active slot
        const activeSlotButton = document.querySelector('.slot-button.active');
        const selectedSlot = activeSlotButton ? activeSlotButton.textContent : 'N/A';

        // Get selected theatre text
        const selectedTheatreText = theatreSelect.options[theatreSelect.selectedIndex].text;

        // Populate the modal fields
        modalDate.textContent = dateInput.value;
        modalTheatre.textContent = selectedTheatreText;
        modalSlot.textContent = selectedSlot;
        
        modalSeatsList.textContent = selectedSeats.join(', ');
        modalTicketCount.textContent = selectedSeats.length;
        modalFinalPrice.textContent = totalPriceSpan.textContent; // Use the already calculated total
    }

    // Event listener to open modal
    proceedButton.addEventListener('click', () => {
        if (selectedSeats.length > 0) {
            populateModal();
            modal.style.display = 'block';
        } else {
            alert('Please select at least one seat before proceeding.');
        }
    });

    // Event listener to close modal (X button)
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Event listener to close modal (click outside)
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Initial run to ensure button is disabled and summary is correct
    updateBookingSummary();
});