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

  