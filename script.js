// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem("theme") || "light"
    this.init()
  }

  init() {
    this.applyTheme()
    this.bindEvents()
  }

  applyTheme() {
    document.documentElement.setAttribute("data-theme", this.theme)
    localStorage.setItem("theme", this.theme)
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light"
    this.applyTheme()
  }

  bindEvents() {
    const themeToggle = document.getElementById("theme-toggle")
    if (themeToggle) {
      themeToggle.addEventListener("click", () => this.toggleTheme())
    }
  }
}

// Navigation Management
class NavigationManager {
  constructor() {
    this.currentSection = "home"
    this.init()
  }

  init() {
    this.bindEvents()
    this.updateActiveSection()
  }

  bindEvents() {
    // Navigation links
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetSection = link.getAttribute("href").substring(1)
        this.navigateToSection(targetSection)
      })
    })

    // Mobile menu toggle
    const navToggle = document.getElementById("nav-toggle")
    const navMenu = document.getElementById("nav-menu")

    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active")
      })

      // Close mobile menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.classList.remove("active")
        }
      })
    }

    // Close mobile menu when clicking nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu) {
          navMenu.classList.remove("active")
        }
      })
    })
  }

  navigateToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".section")
    sections.forEach((section) => {
      section.classList.remove("active")
    })

    // Show target section
    const targetSection = document.getElementById(sectionId)
    if (targetSection) {
      targetSection.classList.add("active")
      this.currentSection = sectionId
      this.updateActiveNavLink()

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  updateActiveNavLink() {
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${this.currentSection}`) {
        link.classList.add("active")
      }
    })
  }

  updateActiveSection() {
    // Check URL hash on load
    const hash = window.location.hash.substring(1)
    if (hash && document.getElementById(hash)) {
      this.navigateToSection(hash)
    } else {
      this.navigateToSection("home")
    }
  }
}

// Project Filter Management
class ProjectFilterManager {
  constructor() {
    this.activeFilter = "all"
    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    const filterTabs = document.querySelectorAll(".filter-tab")
    filterTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.getAttribute("data-category")
        this.filterProjects(category)
        this.updateActiveTab(tab)
      })
    })
  }

  filterProjects(category) {
    const projectCards = document.querySelectorAll(".project-card")

    projectCards.forEach((card) => {
      const cardCategories = card.getAttribute("data-category")

      if (category === "all" || cardCategories.includes(category)) {
        card.style.display = "block"
        card.style.animation = "fadeIn 0.5s ease-out"
      } else {
        card.style.display = "none"
      }
    })

    this.activeFilter = category
  }

  updateActiveTab(activeTab) {
    const filterTabs = document.querySelectorAll(".filter-tab")
    filterTabs.forEach((tab) => {
      tab.classList.remove("active")
    })
    activeTab.classList.add("active")
  }
}

// Smooth Scrolling for Internal Links
class SmoothScrollManager {
  constructor() {
    this.init()
  }

  init() {
    // Add smooth scrolling to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]')
    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement && !link.classList.contains("nav-link")) {
          e.preventDefault()
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }
}

// Intersection Observer for Animations
class AnimationManager {
  constructor() {
    this.init()
  }

  init() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    // Observe cards and other elements
    const animatedElements = document.querySelectorAll(
      ".card, .project-card, .experience-card, .news-item, .brainstorm-card",
    )
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
      observer.observe(el)
    })
  }
}

// Utility Functions
class Utils {
  static debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  static throttle(func, limit) {
    let inThrottle
    return function () {
      const args = arguments
      
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
}

// Initialize Application
class App {
  constructor() {
    this.init()
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.initializeComponents())
    } else {
      this.initializeComponents()
    }
  }

  initializeComponents() {
    // Initialize all managers
    this.themeManager = new ThemeManager()
    this.navigationManager = new NavigationManager()
    this.projectFilterManager = new ProjectFilterManager()
    this.smoothScrollManager = new SmoothScrollManager()
    this.animationManager = new AnimationManager()

    // Initialize Lucide icons
    const lucide = window.lucide // Declare the lucide variable
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }

    // Add loading complete class
    document.body.classList.add("loaded")

    // Handle browser back/forward buttons
    window.addEventListener("popstate", () => {
      this.navigationManager.updateActiveSection()
    })

    // Handle window resize
    window.addEventListener(
      "resize",
      Utils.debounce(() => {
        this.handleResize()
      }, 250),
    )

    // Add keyboard navigation
    this.initKeyboardNavigation()

    console.log("Portfolio website initialized successfully!")
  }

  handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      const navMenu = document.getElementById("nav-menu")
      if (navMenu) {
        navMenu.classList.remove("active")
      }
    }
  }

  initKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      // ESC key closes mobile menu
      if (e.key === "Escape") {
        const navMenu = document.getElementById("nav-menu")
        if (navMenu) {
          navMenu.classList.remove("active")
        }
      }

      // Ctrl/Cmd + K for theme toggle
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        this.themeManager.toggleTheme()
      }
    })
  }
}

// Start the application
new App()

// Export for potential external use
window.PortfolioApp = {
  ThemeManager,
  NavigationManager,
  ProjectFilterManager,
  SmoothScrollManager,
  AnimationManager,
  Utils,
}
