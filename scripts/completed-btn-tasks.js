// Add event listeners to all "Completed" buttons using forEach loop
const buttons = document.querySelectorAll("#btn-completed");
const taskTitles = [
  "Fix Mobile Button Issue",
  "Add Dark Mode",
  "Optimize Home page",
  "Add New Emoji 🙌",
  "Integrate OpenAI API",
  "Improve Job Searching",
];

// Use forEach to ensure the correct index is captured
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    handleTaskCompletion(taskTitles[index], button);
  });
});

// Function to handle task completion
function handleTaskCompletion(taskTitle, completedButton) {
  // Incident 1: Disable the "Completed" button and change its background color
  completedButton.disabled = true;
  completedButton.textContent = "Completed";
  completedButton.classList.remove("bg-[#3752FD]"); 
  completedButton.classList.remove("hover:bg-[#2a3fcc]", "active:scale-80", "transition-transform"); 
  completedButton.classList.add("bg-[#cad2fd]");

  // Incident 2: Decrease the "Task Assigned" count by 1
  const taskAssignedElement = document.getElementById("task-assigned-number");
  let taskAssignedCount = parseInt(taskAssignedElement.textContent);
  taskAssignedCount -= 1;
  taskAssignedElement.textContent = taskAssignedCount; 

  // Check if all tasks are completed
  if (taskAssignedCount === 0) {
    alert("Congratulations! You have completed all the tasks.");
  }

  // Incident 3: Increase the "Total Tasks Completed" count by 1
  const totalTasksCompletedElement = document.getElementById("total-task-completed");
  let totalTasksCompleted = parseInt(totalTasksCompletedElement.textContent);
  totalTasksCompleted += 1; 
  totalTasksCompletedElement.textContent = totalTasksCompleted;

  
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; 

   
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  // Incident 4: Add an entry to the Activity Log
  const activityLog = document.getElementById("activity-log");
  if (activityLog) {
    const completionTime = formatTime(new Date()); 
    const logEntry = document.createElement("li");
    logEntry.className = "text-sm text-gray-600 p-3 my-4 shadow-sm font-bold bg-blue-100 rounded-xl";
    logEntry.textContent = `You have completed the task '${taskTitle}' at ${completionTime}`;
    activityLog.appendChild(logEntry); 
  } else {
    console.error("Activity Log container not found!");
  }
}

// Clear History Button Functionality
const clearHistoryButton = document.getElementById("btn-clear-history");
clearHistoryButton.addEventListener("click", () => {
  const activityLog = document.getElementById("activity-log");
  if (activityLog) {
    activityLog.innerHTML = ""; 
  } else {
    console.error("Activity Log container not found!");
  }
});