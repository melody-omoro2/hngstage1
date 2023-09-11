/* my javascript */
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay();
        const currentDayOfWeek = daysOfWeek[currentDayIndex];

        // Update the content of the 'currentDayOfTheWeek' element
        document.getElementById("dayOfWeek").textContent = currentDayOfWeek;

        function getCurrentUtcTimestamp() {
            return Date.now();
        }

        function updateTimestamp() {
            const currentUtcTimestamp = getCurrentUtcTimestamp();
            const time = document.querySelector(`[data-testid="currentUTCTime"]`);
            time.textContent = currentUtcTimestamp;
        }

        // Update the timestamp every second (1000 milliseconds)
        setInterval(updateTimestamp, 1000);