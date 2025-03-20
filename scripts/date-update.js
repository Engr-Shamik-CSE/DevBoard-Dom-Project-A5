function formatDate(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const dayName = days[date.getDay()]; 
    const monthName = months[date.getMonth()]; 
    const day = date.getDate(); 
    const year = date.getFullYear(); 
  
      return `${dayName} ,<br><span class="font-bold">${monthName} ${day} ${year}</span>`;
  }
  
  function updateDate() {
    const dateElement = document.getElementById("todays-day-date");
    if (dateElement) {
      const today = new Date(); 
      const formattedDate = formatDate(today); 
      dateElement.innerHTML = formattedDate; 
    }
  }
  
  updateDate();