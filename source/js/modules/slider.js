import Swiper from "swiper";

export default () => {
  let storySlider;
  let sliderContainer = document.getElementById(`story`);
  sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;

  const setSlider = function () {
    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
              document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
              document.body.classList.add(`darkTheme`);
            } else if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
              document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
              document.body.classList.add(`blueTheme`);
            } else if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
              document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
              document.body.classList.add(`lightTheme`);
            } else if (storySlider.activeIndex === 6 || storySlider.activeIndex === 7) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;
              document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
              document.body.classList.add(`defaultTheme`);
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg")`;
              document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
              document.body.classList.add(`darkTheme`);
            } else if (storySlider.activeIndex === 2) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg")`;
              document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
              document.body.classList.add(`blueTheme`);
            } else if (storySlider.activeIndex === 4) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg")`;
              document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
              document.body.classList.add(`lightTheme`);
            } else if (storySlider.activeIndex === 6) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg")`;
              document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
              document.body.classList.add(`defaultTheme`);
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  window.addEventListener(`popstate`, function () {
    let lastSlider=storySlider.activeIndex;
    document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
    let currPage=location.href.split('#')[1];
    if (currPage=="story" && storySlider) {
      storySlider.update();
      if (lastSlider === 0) {
        sliderContainer.style.backgroundImage = `url("img/slide1.jpg")`;
        document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
        document.body.classList.add(`darkTheme`);
      } else if (lastSlider === 2) {
        sliderContainer.style.backgroundImage = `url("img/slide2.jpg")`;
        document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
        document.body.classList.add(`blueTheme`);
      } else if (lastSlider === 4) {
        sliderContainer.style.backgroundImage = `url("img/slide3.jpg")`;
        document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
        document.body.classList.add(`lightTheme`);
      } else if (lastSlider === 6) {
        sliderContainer.style.backgroundImage = `url("img/slide4.jpg")`;
        document.body.classList.remove(`defaultTheme`, `blueTheme`, `lightTheme`, 'darkTheme');
        document.body.classList.add(`defaultTheme`);
      }
    }
  });

  setSlider();
};
