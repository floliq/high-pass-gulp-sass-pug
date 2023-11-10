new JustValidate(".studio__form", {
  rules: {
    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    email: "Недопустимый формат",
  },
});

new JustValidate(".contacts__form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    mail: {
      required: true,
      email: true,
    },
    comment: {
      required: true,
      minLength: 5,
    }
  },
  messages: {
    name: "Недопустимый формат",
    email: "Недопустимый формат",
    comment: "Недопустимый формат",
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.7568346691,37.6098549999998],
    zoom: 13,
    controls: [],
  });
  var myPlacemark = new ymaps.Placemark(
    [55.76953456898229,37.63998549999998],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-point.svg",
      iconImageSize: [12, 12],
      iconImageOffset: [-6, -6],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}

var menuSearch = document.querySelector(".menu__search")
menuSearch.addEventListener("click", () => {
  document.querySelector(".menu__finder").classList.add("menu__finder-active");
  menuSearch.style.pointerEvents = "none";
  menuSearch.style.opacity = "0";
  document.querySelector(".menu__finder").setAttribute("aria-hidden", "false")
})

document.querySelector(".menu__findbtn").addEventListener("click", () => {
  document.querySelector(".menu__finder").classList.remove("menu__finder-active");
  menuSearch.style.pointerEvents = "auto";
  menuSearch.style.opacity = "1";
  document.querySelector(".menu__finder").setAttribute("aria-hidden", "true")
})

var menuBurger = document.querySelector(".menu__burger");
menuBurger.addEventListener("click", () => {
  let links = document.querySelector(".menu__links")
  let picture = document.querySelector(".menu__burgerbtn")
  links.classList.toggle("menu__links-active");
  links.classList.contains("menu__links-active") ? picture.setAttribute("xlink:href", "img/sprite.svg#close") : picture.setAttribute("xlink:href", "img/sprite.svg#burger")
})
