/* ==================== SLIDER ==================== */

try {
  /* маленький слайдер */
  const sliderThumbs = new Swiper(".slider-thumbs", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4,
  });

  /* центрируем маленький слайдер при клике */
  sliderThumbs.on("click", (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
  });

  /* основной слайдер */
  const sliderMain = new Swiper(".slider-main", {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 4,
  });
  /* связываем большой и маленький слайдеры */
  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;

  // находим все видео
  const videos = document.querySelectorAll("video");
  /* по клику на слайд ставим видео на паузу */
  sliderMain.on("slideChange", () => {
    for (let i = 0; i < videos.length; i += 1) {
      videos[i].pause();
    }
  });

  // получаем  пагинацию
  const pagination = document.querySelector(".pagination");
  // получаем стрелку пагинации
  const paginationButton = document.querySelector(".pagination__arrow");
  // по клику добавляем/убираем активный класс (пагинацию)
  paginationButton.addEventListener("click", () => {
    pagination.classList.toggle("pagination_active");
  });
} catch {
  console.log("На этой странице нет слайдера");
}
/* ==================== BURGER MENU ==================== */
// находим на странице кнопку бургер меню
const burger = document.querySelector(".burger");
// находим на странице  меню
const navigation = document.querySelector(".navigation");
// находим на странице кнопку закрытия
const navigationClose = document.querySelector(".navigation__close");

/* по нажатию на кнопку бургер появляется меню */
burger.addEventListener("click", () => {
  navigation.classList.add("navigation_active");
});
/* по нажатию на крестик меню закрывается */
navigationClose.addEventListener("click", () => {
  navigation.classList.remove("navigation_active");
});

/* ==================== MUTE ON|OFF MUSIC ==================== */
try {
  // находим  переключатель музыки
  const mute = document.querySelector(".mute__checkbox");
  // добавляем в переменную музыку
  const audio = new Audio("audio/waterTower.mp3");
  // проверяем нажат ли чекбокс, тогда включаем/выключаем музыку
  const checkMute = () => {
    if (mute.checked) {
      audio.play().catch(() => {
        mute.checked = false;
      });
    } else {
      audio.pause();
    }
  };
  // проверяем, есть ли переключатель музыки на странице, если есть то
  if (mute) {
    // музыка начинает играть через 2 секунды
    setTimeout(checkMute, 2000);
  }
  mute.addEventListener("change", checkMute);
} catch {
  console.log("На этой странице нет музыки");
}
