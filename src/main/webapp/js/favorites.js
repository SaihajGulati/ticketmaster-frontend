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
  
  


function displayFavorites() {
  const favoritesContainer = document.getElementById('favorites-container');
  favoritesContainer.innerHTML = ''; // Clear the container before displaying favorites
  const favorites = localStorage.getItem('favorites');
  if (favorites) {
    const favoriteEventIds = JSON.parse(favorites);
    if (favoriteEventIds.length === 0) {
      alert("You have no favorites!");
    } else {
      favoriteEventIds.forEach((index) => {
        // Fetch event data using the eventId and display it on the Favorites Page
        // Replace the following lines with the actual fetching logic
        const eventName = searchResults[index].event;
        const eventDate = searchResults[index].date + " " + searchResults[index].time;
        
        var priceRange = null;
	  if (searchResults[index].minPrice == undefined)
	  {
	  	priceRange = "N/A";
	  }
	  else
	  {
	  	priceRange = searchResults[index].minPrice + " - " + searchResults[index].maxPrice;
	  }

        // Create the favorite event element and populate it with data
        const favoriteEvent = document.createElement('div');
        favoriteEvent.classList.add('favorite-event');

        const eventInfo = document.createElement('div');
        eventInfo.classList.add('event-info');

        const eventNameElement = document.createElement('div');
        eventNameElement.classList.add('event-name');
        eventNameElement.textContent = eventName;
        eventInfo.appendChild(eventNameElement);

        const eventDateElement = document.createElement('div');
        eventDateElement.classList.add('event-date');
        eventDateElement.textContent = eventDate;
        eventInfo.appendChild(eventDateElement);

        const priceRangeElement = document.createElement('div');
        priceRangeElement.classList.add('price-range');
        priceRangeElement.textContent = priceRange;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.style.position = 'absolute';
        removeButton.style.top = '5px';
        removeButton.style.right = '5px';
        removeButton.onclick = () => {
          removeFromFavorites(favoriteEventIds.indexOf(index));
        };

        favoriteEvent.appendChild(eventInfo);
        favoriteEvent.appendChild(priceRangeElement);
        favoriteEvent.appendChild(removeButton);
        favoriteEvent.addEventListener("click", () => showEventDetails(index));

        // Add the favorite event element to the favorites container
        favoritesContainer.appendChild(favoriteEvent);
      });
    }
  } else {
    alert("You have no favorites!");
  }
}

function showEventDetails(index) {
console.log(index);
var result = searchResults[index];
  const eventDetailsContainer = document.getElementById("event-details");
  eventDetailsContainer.style.display = "block";
  var thing = null;
  if (result.minPrice == undefined && result.maxPrice == undefined)
  {
  	thing = 'N/A';
  }
  else
  {
  	thing = '$' + result.minPrice + ' - $' + result.maxPrice;
  }
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

function removeFromFavorites(index) {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  favorites.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  displayFavorites(); // Update the displayed list
}
