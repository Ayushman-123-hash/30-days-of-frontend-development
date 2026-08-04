const updateClock = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';
    const dates = currentTime.getDate();
    const month = currentTime.getMonth() + 1; // Months are zero-based
    const year = currentTime.getFullYear();

    let displayHours = hours;
    if (hours > 12) {
        displayHours = hours - 12;
    }
    else if (hours === 0) {
        displayHours = 12;
    }

    const hour = displayHours.toString().padStart(2, '0');
    const min = minutes.toString().padStart(2, '0');
    const sec = seconds.toString().padStart(2, '0');
    ampm.textContent = period;
    time.textContent = `${hour}:${min}:${sec}`;

    const dayIndex = currentTime.getDay();
    day.textContent = days[dayIndex];

    const monthName = months[month - 1]; // Adjust for zero-based index
    const formattedDate = `${dates} ${monthName}, ${year}`;
    date.textContent = formattedDate;
}
const ampm = document.getElementById("ampm");
const time = document.getElementById('time')
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const day = document.getElementById('day')
const date = document.getElementById('date')
updateClock();
setInterval(updateClock, 1000);



