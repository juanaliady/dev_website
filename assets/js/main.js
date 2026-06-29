/**
* Template Name: Laura - v4.3.0
* Template URL: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
var loadTextFloat = false;
function initProfileStatsAndFloatingText() {

  // Calculate age dynamically based on birth date (25 January 2000)
  function calculateAge() {
    const birthDate = new Date(2000, 0, 25); // January 25, 2000
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    // Adjust for negative days
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    
    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }
    
    return { years, months, days };
  }

  // Update age element on page load
  const ageElement = document.getElementById('myAge');
  if (ageElement) {
    const { years, months, days } = calculateAge();
    ageElement.textContent = `${years} years , ${months} month , ${days} days`;
  }

  // Calculate experience dynamically based on professional start (2018)
  function calculateExperience() {
    const startYear = 2018;
    const today = new Date();
    const yearsOfExperience = today.getFullYear() - startYear;
    
    // Add + symbol if more than 1 year
    return yearsOfExperience > 1 ? `${yearsOfExperience}+ years` : `${yearsOfExperience} year`;
  }

  // Update experience element on page load
  const experienceElement = document.getElementById('myExperience');
  if (experienceElement) {
    experienceElement.textContent = calculateExperience();
  }

  if (!loadTextFloat) {
    const addFloatingClass = (id, className) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add(className);
      }
    };

    setTimeout(function (){ 
      addFloatingClass('sql-text', 'floating-3');
    }, 1800);

    setTimeout(function (){
      addFloatingClass('sass-text', 'floating-4');
    }, 100);

    setTimeout(function (){
      addFloatingClass('html-text', 'floating-2');
    }, 1100);

    setTimeout(function (){
      addFloatingClass('go-text', 'floating-3');
    }, 200);

    setTimeout(function (){
      addFloatingClass('c-sharp-text', 'floating-4');
    }, 1000);

    setTimeout(function (){
      addFloatingClass('js-text', 'floating-1');
    }, 1500);

    setTimeout(function (){
      addFloatingClass('php-text', 'floating-2');
    }, 2000);

    loadTextFloat = true;
    
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProfileStatsAndFloatingText);
} else {
  initProfileStatsAndFloatingText();
}
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent && typeof Waypoint !== 'undefined') {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  const typed = select('.typed')
  if (typed && typeof Typed !== 'undefined') {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split('||')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  if (select('#particles-js') && typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: { value: 9, density: { enable: true, value_area: 800 } },
        color: { value: "#1b1e34" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000" },
          polygon: { nb_sides: 4 },
          image: { src: "./assets/img/atom.png", width: 100, height: 100 }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 15.08530152163807,
          random: false,
          anim: { enable: true, speed: 10, size_min: 40, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 200,
          color: "#ffffff",
          opacity: 1,
          width: 2
        },
        move: {
          enable: true,
          speed: 8,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "grab" },
          onclick: { enable: false, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  }

  /**
   *  Platform chart 
   */
  const myChartData = {
      type: 'doughnut',
      data: {
          labels: [ "Web", "Mobile", "Desktop"],
          datasets: [{
              data: [60,30,10],
              backgroundColor: [
                  'rgba(23, 135, 186, 1)',
                  'rgba(43, 180, 212, 1)',
                  'rgba(79, 210, 224, 1)',
              ],
              // borderColor: [
              //     'rgba(23, 135, 186,1)',
              //     'rgba(43, 180, 212, 1)',
              //     'rgba(76, 174, 204, 1)',
              // ],
              borderWidth: 0
          }]
      },
      options: {
        
          // title: {
          //   display: false,
          //   text: "This is your 401(k) account's current asset mix"
          // },
        animation: {
            animateScale: true,
            animateRotate: true
          },
        responsive: true,
        maintainAspectRatio: false,
          
        legend: {
            position: 'right',
          labels:{
            boxWidth: 10,
            padding: 12,
            fontSize: 15
          }
        },
        tooltips: {
          enabled: false
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(0)+"%";
                    return percentage;
                },
                color: '#fff',
                font:{
                  size: 15
                }
            }
        }
      }
  };

  const ctx = select('#myChart');
  if (ctx && typeof Chart !== 'undefined') {
    new Chart(ctx, {
      type: myChartData.type,
      data: myChartData.data,
      options: myChartData.options,
    });
  }
  
  /**
   * Testimonials slider
   */
  if (select('.testimonials-slider') && typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 15000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.testimonials .swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer && typeof Isotope !== 'undefined') {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.portfolio-lightbox'
    });
  }

  /**
   * Portfolio details content
   */
  const renderPortfolioDetails = () => {
    const detailsSection = select('#portfolio-details[data-portfolio-details]');
    if (!detailsSection) {
      return Promise.resolve();
    }

    try {
      const projects = window.PORTFOLIO_ITEMS || [];

      if (!projects.length) {
        throw new Error('Portfolio data is not loaded');
      }

      const params = new URLSearchParams(window.location.search);
      const requestedId = params.get('id');
      const project = projects.find(item => item.id === requestedId) || (!requestedId ? projects[0] : null);

      if (!project) {
        const missingTitle = select('#portfolio-description-title');
        const missingText = select('#portfolio-description-text');

        if (missingTitle) {
          missingTitle.textContent = 'Project not found';
        }

        if (missingText) {
          missingText.textContent = `No portfolio item exists for id "${requestedId}".`;
        }

        return Promise.resolve();
      }

      document.title = `${project.title} - Portfolio Details`;

      const pageTitle = select('#portfolio-page-title');
      const breadcrumbTitle = select('#portfolio-breadcrumb-title');
      const descriptionTitle = select('#portfolio-description-title');
      const descriptionText = select('#portfolio-description-text');
      const infoList = select('#portfolio-info-list');
      const sliderWrapper = select('.portfolio-details-slider .swiper-wrapper');

      if (pageTitle) pageTitle.textContent = project.title;
      if (breadcrumbTitle) breadcrumbTitle.textContent = project.title;
      if (descriptionTitle) descriptionTitle.textContent = project.summary || project.title;
      if (descriptionText) descriptionText.innerHTML = project.description || '';

      if (infoList) {
        const info = [
          ['Category', project.category],
          ['Client', project.client],
          ['Project date', project.projectDate],
          ['Technology', Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies]
        ];

        infoList.innerHTML = '';
        info.forEach(([label, value]) => {
          if (!value) return;

          const item = document.createElement('li');
          const strong = document.createElement('strong');
          strong.textContent = label;
          item.appendChild(strong);
          item.append(`: ${value}`);
          infoList.appendChild(item);
        });

        if (project.projectUrl) {
          const item = document.createElement('li');
          const strong = document.createElement('strong');
          const link = document.createElement('a');
          strong.textContent = 'Project URL';
          link.href = project.projectUrl;
          link.textContent = project.projectUrl.replace(/^https?:\/\//, '');
          link.target = '_blank';
          link.rel = 'noopener';
          item.appendChild(strong);
          item.append(': ');
          item.appendChild(link);
          infoList.appendChild(item);
        }
      }

      if (sliderWrapper && Array.isArray(project.images) && project.images.length) {
        sliderWrapper.innerHTML = '';

        project.images.forEach(image => {
          const slide = document.createElement('div');
          const img = document.createElement('img');
          slide.className = 'swiper-slide';
          img.src = image;
          img.alt = project.title;
          slide.appendChild(img);
          sliderWrapper.appendChild(slide);
        });
      }
    } catch (error) {
      console.error(error);
    }

    return Promise.resolve();
  };

  /**
   * Portfolio details slider
   */
  const initPortfolioDetailsSlider = () => {
    if (!select('.portfolio-details-slider') || typeof Swiper === 'undefined') {
      return;
    }

    const slideCount = select('.portfolio-details-slider .swiper-slide', true).length;

    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: slideCount > 1,
      autoplay: slideCount > 1 ? {
        delay: 7200,
        disableOnInteraction: false
      } : false,
      pagination: {
        el: '.portfolio-details .swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  };

  renderPortfolioDetails().then(initPortfolioDetailsSlider).catch(initPortfolioDetailsSlider);

})()
