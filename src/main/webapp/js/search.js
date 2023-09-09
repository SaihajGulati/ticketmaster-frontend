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
      minPrice: 42,
      time: "20:30:00",
    maxPrice: 43,
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