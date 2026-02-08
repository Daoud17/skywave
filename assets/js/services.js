const servicesData = {
  satellite: {
    title: "Satellite",
    desc: "A full satellite coverage in the MENA region with access to major satellites worldwide.",
    img: "assets/img/satellite.jpeg",
    link: "our-services.html",
    alt: "Satellite"
  },

  broadcast: {
    title: "Broadcast",
    desc: "A full broadcasting and live broadcasting services with experienced reporting staff and fully equipped studios around the world.",
    img: "assets/img/broadcast.jpeg",
    link: "our-services.html",
    alt: "Broadcast"
  },

  production: {
    title: "Production",
    desc: "Skywave offers customized production plans across different stages of production with a variety of media genres including documentaries, TV series, films and more.",
    img: "assets/img/production.jpeg",
    link: "our-services.html",
    alt: "Production"
  },

  equipment: {
    title: "Equipment",
    desc: "Skywave provides high-quality equipment solutions for the media and broadcast domain, including selling and rental services.",
    img: "assets/img/equipment.jpeg",
    link: "our-services.html",
    alt: "Equipment"
  }
};

const list = document.getElementById("servicesList");
const imgEl = document.getElementById("serviceImg");
const titleEl = document.getElementById("serviceTitle");
const descEl = document.getElementById("serviceDesc");
const btnEl = document.getElementById("serviceBtn");

list.addEventListener("click", (e) => {
  const item = e.target.closest("li[data-service]");
  if (!item) return;

  // change active state
  list.querySelectorAll("li").forEach(li => li.classList.remove("active"));
  item.classList.add("active");

  // update content
  const key = item.dataset.service;
  const data = servicesData[key];

  titleEl.textContent = data.title;
  descEl.textContent = data.desc;
  imgEl.src = data.img;
  imgEl.alt = data.alt;
  btnEl.href = data.link;
});
