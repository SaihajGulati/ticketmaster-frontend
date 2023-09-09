// Simulate search results from an API
  const searchResults = [
    {
      date: "2023-06-03",
      icon: "https://images.unsplash.com/photo-1541190990694-4a612732721c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      event: "Livingston Taylor",
      venue: "Iridium",
      minPrice: 49,
      time: "18:00:00",
    	maxPrice: 60,
    	ticketmasterURL: "https://www.ticketweb.com/event/livingston-taylor-iridium-tickets/12977535"
    },
    {
      date: "2023-04-15",
      icon: "https://images.unsplash.com/photo-1541190990694-4a612732721c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      event: "The Taylor Party: Taylor Swift Night",
      venue: "Webster Hall",
      minPrice: 37,
      time: "20:00:00",
    maxPrice: 68,
    ticketmasterURL: "https://www.ticketmaster.com/event/Z7r9jZ1AdqP_Z?tmrid=TMR-3765640&routing=y"
    },
    {
      date: "2023-04-05",
      icon: "https://images.unsplash.com/photo-1541190990694-4a612732721c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      event: "Emily Whitlow with Claire Frances Sullivan & Taylor Chilton",
      venue: "Heavan Can Wait",
      minPrice: 45,
      time: "19:00:00",
    maxPrice: 120,
    ticketmasterURL: "https://www.ticketmaster.com/Emily-Whitlow"
    },
    {
      date: "2023-04-27",
      icon: "https://images.unsplash.com/photo-1541190990694-4a612732721c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      event: "Ship It Off! A Taylor Swift Party Cruise!",
      venue: "The Cosmo - Rocks Off Concert Cruise",
      time: "20:30:00",
    ticketmasterURL: "https://www.ticketweb.com/event/ship-it-off-a-taylor-the-cosmo-rocks-tickets/12779195"
    },
    {
      date: "2023-05-25",
      icon: "https://images.unsplash.com/photo-1541190990694-4a612732721c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      event: "Ship It Off! A Taylor Swift Party Cruise!",
      venue: "The Cosmo - Rocks Off Concert Cruise",
      minPrice: 42,
      time: "17:00:00",
    maxPrice: 43,
    ticketmasterURL: "https://www.ticketweb.com/event/ship-it-off-a-taylor-the-cosmo-rocks-tickets/12779205"
    }
  ];

function searchEvents() {
  
	const eventDetailsContainer = document.getElementById("event-details");
  eventDetailsContainer.style.display = "none"; //for now
  // Create the table element
  const resultsTable = document.createElement("table");
  resultsTable.style.width = "100%";
  resultsTable.style.marginTop = "1rem";

  // Create the table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Date", "Icon", "Event", "Venue"];
  for (const headerText of headers) {
    const th = document.createElement("th");
    th.innerText = headerText;
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow);
  resultsTable.appendChild(thead);

  // Create the table body
  const tbody = document.createElement("tbody");

  searchResults.forEach((result) => {
    const row = resultsTable.insertRow(-1);
    row.addEventListener("click", () => showEventDetails(row.rowIndex-1)); // Add event listener to the row
    /*row.onclick = showEventDetails(result);*/

    const dateCell = row.insertCell(0);
    dateCell.className = 'date-cell';
    dateCell.innerText = result.date;

    const iconCell = row.insertCell(1);
    iconCell.className = 'icon-cell';
    const iconImage = document.createElement("img");
    iconImage.src = result.icon;
    iconImage.width = 75;
    iconImage.height = 50;
    iconCell.appendChild(iconImage);

    const eventCell = row.insertCell(2);
    eventCell.className = 'event-cell';
    eventCell.innerText = result.event;

    const venueCell = row.insertCell(3);
    venueCell.className = 'venue-cell';
    venueCell.innerText = result.venue;
  });

  resultsTable.appendChild(tbody);

  // Add the table to the results container
  const resultsContainer = document.getElementById("results-container");
  // Clear any previous results
  resultsContainer.innerHTML = "";
  resultsContainer.appendChild(resultsTable);
}

function showEventDetails(index) {
	var result = searchResults[index];
	var thing = null;
  if (result.minPrice == undefined && result.maxPrice == undefined)
  {
  	thing = 'N/A';
  }
  else
  {
  	thing = '$' + result.minPrice + ' - $' + result.maxPrice;
  }
  const eventDetailsContainer = document.getElementById("event-details");
  eventDetailsContainer.style.display = "block";
  eventDetailsContainer.innerHTML = `
    <h2>${result.event} <i class="fa fa-star-o" id="fav-star-${index}" onclick="toggleFavorite(${index})"></i></h2>
    <div class="details-section">
    <div class = "left-section">
      <div class="details-item">
        <h3>Date</h3>
        <p>${result.date} ${result.time}</p>
      </div><br></br>
      <div class="details-item">
      	<h3>Venue</h3>
        <p>${result.venue}</p>
      </div><br></br>
      <div class="details-item">
        <h3>Price Range</h3>
        <p>${thing}</p>
      </div><br></br>
      <div class="details-ticketmaster">
        <h3>More Info</h3>
        <p><a id="ticketmaster-link" href="${result.ticketmasterURL}" target="_blank">Ticketmaster</a></p>
      </div>
      </div>
      <div class = "right-section">
      <div class="details-item quantity">
        <h3>Quantity of Tickets to Purchase</h3>
        <input type="number" id="quantity" value="">
      </div>
    <button class="buy-button" id="purchase-button" onclick = purchaseTickets()>PURCHASE</button>
    <div class = "right-section">
    </div>
  `;
  if (result.minPrice == undefined && result.maxPrice == undefined)
  {
  	document.getElementById('purchase-button').disabled = true; 
  }
}

function purchaseTickets() {
  const quantityInput = document.getElementById('quantity');
  const linkElement = document.getElementById('ticketmaster-link');
  const link = linkElement.href;
  const result = searchResults.find(i => i.ticketmasterURL == link);
  var balance = localStorage.getItem('balance');
  const quantity = parseInt(quantityInput.value);
  if (isNaN(quantity) || quantity < 1 || quantity > 10 || (quantity * result.minPrice) > balance) {
    alert('FAILED: Purchase not possible');
  } else {
    const eventName = result.event;
    const totalCost = (quantity * result.minPrice).toFixed(2); 
    balance -= totalCost;
    localStorage.setItem('balance', balance);
    alert(`SUCCESS: Executed purchase of ${quantity} tickets of ${eventName} for $${totalCost}`);
  }
}

function toggleFavorite(index) {
  const star = document.getElementById(`fav-star-${index}`);
  star.classList.toggle('fa-star');
  star.classList.toggle('fa-star-o');
  const isFavorited = star.classList.toggle('yellow-star');
  
  // Check if the event is added or removed from favorites
  if (isFavorited) {
    addToFavorites(index);
    alert('Added ' + searchResults[index].event + ' to favorites');
  } else {
    removeFromFavorites(index);
    alert('Removed ' + searchResults[index].event + ' from favorites');
  }
}

function addToFavorites(eventId) {
  let favorites = localStorage.getItem('favorites');
  favorites = favorites ? JSON.parse(favorites) : [];

  if (!favorites.includes(eventId)) {
    favorites.push(eventId);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function removeFromFavorites(eventId) {
  let favorites = localStorage.getItem('favorites');
  favorites = favorites ? JSON.parse(favorites) : [];

  const index = favorites.indexOf(eventId);
  if (index > -1) {
    favorites.splice(index, 1);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}