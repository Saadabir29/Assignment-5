document.addEventListener("DOMContentLoaded", () => {
  const services = [
    {
      name: "National Emergency Number",
      nameEn: "National Emergency",
      number: "999",
      category: "All",
      iconUrl: "./assets/emergency.png",
    },
    {
      name: "Police Helpline Number",
      nameEn: "Police",
      number: "999",
      category: "Police",
      iconUrl: "./assets/police.png",
    },
    {
      name: "Fire Service Number",
      nameEn: "Fire Service",
      number: "999",
      category: "Fire",
      iconUrl: "./assets/fire-service.png",
    },
    {
      name: "Ambulance Service",
      nameEn: "Ambulance",
      number: "1994-999999",
      category: "Health",
      iconUrl: "./assets/ambulance.png",
    },
    {
      name: "Women & Child Helpline",
      nameEn: "Women & Child Helpline",
      number: "109",
      category: "Help",
      iconUrl: "./assets/logo.png",
    },
    {
      name: "Anti-Corruption Helpline",
      nameEn: "Anti-Corruption",
      number: "106",
      category: "Govt.",
      iconUrl: "./assets/logo.png",
    },
    {
      name: "Electricity Helpline",
      nameEn: "Electricity",
      number: "16216",
      category: "Electricity",
      iconUrl: "./assets/logo.png",
    },
    {
      name: "Brac Helpline",
      nameEn: "Brac",
      number: "16445",
      category: "NGO",
      iconUrl: "./assets/brac.png",
    },
    {
      name: "Bangladesh Railway Helpline",
      nameEn: "Bangladesh Railway",
      number: "163",
      category: "Travel",
      iconUrl: "./assets/Bangladesh-Railway.png",
    },
  ];

  // DOM Elements
  const cardContainer = document.getElementById("card-container");
  const coinCountEl = document.getElementById("coin-count");
  const heartCountEl = document.getElementById("heart-count");
  const copyCountEl = document.getElementById("copy-count");
  const historyList = document.getElementById("history-list");
  const clearHistoryBtn = document.getElementById("clear-history-btn");

  let coins = 100;
  let hearts = 0;
  let copies = 0;

  const updateCoinCount = () => {
    coinCountEl.textContent = coins;
  };

  const updateHeartCount = () => {
    heartCountEl.textContent = hearts;
  };

  const updateCopyCount = () => {
    copyCountEl.textContent = copies;
  };

  const renderCards = () => {
    cardContainer.innerHTML = "";
    services.forEach((service) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardHtml = `
                <div class="card-header">
                    <img src="${service.iconUrl}" alt="${service.nameEn} icon" class="card-icon">
                    <button class="heart-icon-btn" data-service-name="${service.nameEn}">
                        <i data-feather="heart"></i>
                    </button>
                </div>
                <div class="card-details">
                    <h3 class="card-name-bd">${service.name}</h3>
                    <p class="card-name-en">${service.nameEn}</p>
                    <p class="card-number">${service.number}</p>
                    <span class="category-badge">${service.category}</span>
                </div>
                <div class="card-footer">
                    <button class="card-button copy-btn" data-number="${service.number}" data-service-name="${service.nameEn}">
                        <i data-feather="copy"></i> Copy
                    </button>
                    <button class="card-button call-btn" data-number="${service.number}" data-service-name="${service.nameEn}">
                        <i data-feather="phone-call"></i> Call
                    </button>
                </div>
            `;
      card.innerHTML = cardHtml;
      cardContainer.appendChild(card);
    });
    feather.replace();
  };

  //Heart button clicks
  cardContainer.addEventListener("click", (event) => {
    const heartBtn = event.target.closest(".heart-icon-btn");
    if (heartBtn) {
      heartBtn.classList.toggle("liked");
      if (heartBtn.classList.contains("liked")) {
        hearts++;
      } else {
        hearts--;
      }
      updateHeartCount();
      feather.replace();
    }
  });

  //Call button clicks
  cardContainer.addEventListener("click", (event) => {
    const callBtn = event.target.closest(".call-btn");
    if (callBtn) {
      const serviceName = callBtn.dataset.serviceName;
      const number = callBtn.dataset.number;

      if (coins < 20) {
        alert("❌Sorry, you don't have enough coins to make a call.");
        return;
      }

      coins -= 20;
      updateCoinCount();

      //Log call for user
      alert(`📞Calling ${serviceName} at ${number}`);

      //Add to call history
      addHistoryItem(serviceName, number);
    }
  });

  //Copy button clicks
  cardContainer.addEventListener("click", (event) => {
    const copyBtn = event.target.closest(".copy-btn");
    if (copyBtn) {
      const number = copyBtn.dataset.number;
      const serviceName = copyBtn.dataset.serviceName;

      navigator.clipboard
        .writeText(number)
        .then(() => {
          alert(
            `The number for ${serviceName} (${number}) has been copied to your clipboard!`
          );
          copies++;
          updateCopyCount();
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          console.log("Failed to copy the number. Please try again.");
        });
    }
  });

  const addHistoryItem = (name, number) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const historyItem = document.createElement("div");
    historyItem.classList.add("history-item");
    historyItem.innerHTML = `
            <span class="history-item-name">${name}</span>
            <span class="history-item-number">${number}</span>
            <span class="history-item-time">${timeString}</span>
        `;

    const noHistoryText = historyList.querySelector(".no-history");
    if (noHistoryText) {
      noHistoryText.remove();
    }

    historyList.prepend(historyItem);
  };

  clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = '<p class="no-history">No call history yet.</p>';
  });

  renderCards();
  updateCoinCount();
  updateHeartCount();
  updateCopyCount();
});
