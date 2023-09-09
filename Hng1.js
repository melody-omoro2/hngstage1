/* my javascript */
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay();
        const currentDayOfWeek = daysOfWeek[currentDayIndex];

        // Update the content of the 'currentDayOfTheWeek' element
        document.getElementById("dayOfWeek").textContent = currentDayOfWeek;

            // Update the current time
            function updateCurrentTime() {
            const currentHourElement = document.getElementById("currentHour");
            const currentMinuteElement = document.getElementById("currentMin");
            const currentSecondsElement = document.getElementById("currentSecs");
            const currentDate = new Date();
            const currentUTCHour = currentDate.getHours(); // Get current hour
            const currentUTCMin = currentDate.getMinutes(); // Get current minutes
            const currentUTCSecs = currentDate.getSeconds(); // Get current seconds

            // Update the content of the 'currentUTCTime' element
            currentHourElement.textContent = currentUTCHour;
            currentMinuteElement.textContent = currentUTCMin;
            currentSecondsElement.textContent = currentUTCSecs;
        }

        function updateTime() {
            const clockElement = document.getElementById('timeOfTheDay');
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;
            clockElement.textContent = currentTime;
        }

        // Update the time every second
        setInterval(updateTime, 1000);

        // Initial call to display the time immediately
        updateTime();