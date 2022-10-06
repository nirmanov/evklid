document.addEventListener('DOMContentLoaded', function () {

  // burger
  const icons = document.querySelectorAll('.open-menu');
  icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
      document.querySelector(".burger").classList.toggle("open");
      document.querySelector(".menubox").classList.toggle("menubox__active");
    });
  });

  // header-search
  document.querySelector(".form-btn__open").addEventListener("click", function () {
    document.querySelector(".form").classList.add("form__active");
    this.classList.add("active");
  })
  document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".form-container")) {
      form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
    }
  });
  document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".form").classList.remove("form__active");
    document.querySelector(".form-btn__open").classList.remove("active")
  })
  // tabs
  document.querySelectorAll('.stages-list__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.stages-list__btn').forEach(function (btn) {
        btn.classList.remove('stages-list__btn--active')
      });
      e.currentTarget.classList.add('stages-list__btn--active');
      document.querySelectorAll('.stages-tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('stages-tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('stages-tabs-item--active');
    });
  })

  var first_link = document.querySelectorAll('.stages-tabs-item')[0];
  first_link.classList.add('stages-tabs-item--active');

  // accordion
  $(function () {
    $("#accordion").accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false
    });

  });

  //lazy load
  window.onload = () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          //console.log(entry.target.dataset.src)
          entry.target.src = entry.target.dataset.src
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img))
  }

  window.onload = () => {
    const observerBg = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(entry.target.dataset.bg)
          entry.target.style.backgroundImage = "url('"+entry.target.dataset.bg+"')"
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('[data-bg]').forEach(el => observerBg.observe(el))
  }
})