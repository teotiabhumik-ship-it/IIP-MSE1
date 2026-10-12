function modifyCard() {
            var firstCard = document.getElementById("card1");
            firstCard.style.backgroundColor = "yellow";
            firstCard.style.border = "2px solid red";
            
            var cardTitle = firstCard.getElementsByTagName("h3")[0];
            cardTitle.textContent = "Tech Fest 2026 (UPDATED)";
        }

        function addEventName() {
            var inputVal = document.getElementById("eventNameInput").value;
            var displayArea = document.getElementById("displayArea");
            var confirmationMsg = document.getElementById("confirmationMessage");

            if (inputVal === "") {
                confirmationMsg.style.color = "red";
                confirmationMsg.innerHTML = "Please enter a valid event name!";
                displayArea.innerHTML = "No event added yet.";
            } else {
                confirmationMsg.style.color = "green";
                confirmationMsg.innerHTML = "Success! Event submitted.";
                displayArea.innerHTML = "New Event: " + inputVal;
            }
        }
        document.getElementById("hide-events-btn").addEventListener("click", function() {
            var eventsContainer = document.getElementById("events-container");
            if (eventsContainer.style.display === "none") {
                eventsContainer.style.display = "block";
                this.value = "hide events";
            } else {
                eventsContainer.style.display = "none";
                this.value = "show events";
            }
        });
       
        document.getElementById("change-heading-btn").addEventListener("click", function() {
            var heading = document.getElementById("heading");
            heading.textContent = "here is the new heading";
        });

        document.getElementById("change-color-btn").addEventListener("click", function() {
            var eventsContainer = document.getElementById("card");
            eventsContainer.style.backgroundColor = "red";
        });
        function registerStudent() {
      var name = document.getElementById("studentName").value;
      var roll = document.getElementById("rollNumber").value;
      var email = document.getElementById("studentEmail").value;
      var eventName = document.getElementById("eventSelect").value;
      var messageBox = document.getElementById("message");

      
      if (name === "" || roll === "" || email === "" || eventName === "") {
        messageBox.textContent = "Error: Please fill in all the required fields.";
        messageBox.style.color = "red";
      } else {
        messageBox.textContent = "Success! Thank you, " + name + " (Roll No: " + roll + "). You are registered for " + eventName + ".";
        messageBox.style.color = "green";
      }
    }

    var isLarge = false;
    function changeHeadingSize() {
      var heading = document.getElementById("mainHeading");
      if (isLarge) {
        heading.style.fontSize = "24px";
        isLarge = false;
      } else {
        heading.style.fontSize = "36px";
        isLarge = true;
      }
    }

    function toggleForm() {
      var form = document.getElementById("formSection");
      if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
    }