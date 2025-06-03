// Domain Knowledge Album Navigation
document.addEventListener('DOMContentLoaded', function() {
  // Get album elements
  const albumContainer = document.querySelector('.dk-album');
  const pageElements = document.querySelectorAll('.dk-page');
  const prevBtn = document.getElementById('dk-prev');
  const nextBtn = document.getElementById('dk-next');
  const pageIndicator = document.getElementById('dk-page-indicator');
  const readerModeToggle = document.getElementById('dk-reader-toggle');
  
  // Initialize
  let currentPage = 0;
  const totalPages = pageElements.length;
  let isAnimating = false; // Flag to prevent clicking during animation
  let readerModeEnabled = false;
  
  // Image paths for lazy loading (generated during build)
  const imagePaths = [];
  for (let i = 1; i <= 20; i++) {
    const paddedNum = String(i).padStart(2, '0');
    imagePaths.push(`src/assets/img/domain_knowledge/dk_image_${paddedNum}.png`);
  }
  
  // Create reader mode toggle if it doesn't exist
  if (!readerModeToggle) {
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'dk-reader-toggle';
    toggleContainer.innerHTML = '<button id="dk-reader-toggle">Toggle Reader Mode</button>';
    document.querySelector('.dk-controls').insertAdjacentElement('afterend', toggleContainer);
  }
  
  // Reader mode toggle functionality
  document.querySelector('#dk-reader-toggle').addEventListener('click', function() {
    readerModeEnabled = !readerModeEnabled;
    
    if (readerModeEnabled) {
      albumContainer.classList.add('reader-mode');
      this.textContent = 'Exit Reader Mode';
    } else {
      albumContainer.classList.remove('reader-mode');
      this.textContent = 'Toggle Reader Mode';
    }
  });
  
  // Preload adjacent images
  function preloadAdjacentImages(currentIndex) {
    // Preload next image
    if (currentIndex < totalPages - 1) {
      preloadImage(currentIndex + 1);
    }
    
    // Preload previous image
    if (currentIndex > 0) {
      preloadImage(currentIndex - 1);
    }
  }
  
  // Preload a specific image
  function preloadImage(index) {
    if (index < 0 || index >= totalPages || index >= imagePaths.length) return;
    
    const pageEl = pageElements[index];
    const img = pageEl.querySelector('img');
    
    if (img && !img.dataset.loaded) {
      // Set src attribute to load the image
      img.src = imagePaths[index];
      img.dataset.loaded = 'true';
      
      // Add loading animation
      img.classList.add('loading');
      
      // Remove loading state when image is loaded
      img.onload = function() {
        img.classList.remove('loading');
      };
    }
  }
  
  // Enhance page structure with figure and figcaption elements
  pageElements.forEach((page, index) => {
    // Get the page number from the ID (e.g., "dk-page-1" -> "1")
    const pageNum = page.id.split('-').pop();
    
    // Add data-page attribute
    page.setAttribute('data-page', `Page ${pageNum}`);
    
    // Get the image element
    const img = page.querySelector('img');
    
    if (img && !page.querySelector('figure')) {
      // Create figure and figcaption elements
      const figure = document.createElement('figure');
      const caption = document.createElement('figcaption');
      
      // Set caption text
      caption.textContent = `Domain Knowledge - Page ${pageNum}`;
      
      // Set a placeholder src for lazy loading
      img.dataset.src = imagePaths[index];
      img.alt = `Domain Knowledge Page ${pageNum}`;
      
      // Extract image from page and wrap it in figure
      img.parentNode.removeChild(img);
      figure.appendChild(img);
      figure.appendChild(caption);
      page.appendChild(figure);
    }
  });
  
  // Show first page initially
  if (pageElements.length > 0) {
    pageElements[0].classList.add('active');
    // Load the first image immediately
    preloadImage(0);
    // Preload the next image
    preloadImage(1);
  }
  
  // Update navigation state
  function updateNavigation() {
    prevBtn.disabled = currentPage === 0 || isAnimating;
    nextBtn.disabled = currentPage === totalPages - 1 || isAnimating;
    pageIndicator.textContent = `Page ${currentPage + 1} of ${totalPages}`;
  }
  
  // Navigate to a specific page with animation
  function goToPage(pageIndex) {
    if (isAnimating) return; // Prevent navigation during animation
    
    // Set animating flag
    isAnimating = true;
    
    // Update navigation to disable buttons during animation
    updateNavigation();
    
    // Preload the target image if not already loaded
    preloadImage(pageIndex);
    
    // In reader mode, skip animations for smoother experience
    if (readerModeEnabled) {
      // Remove active class from current page
      pageElements[currentPage].classList.remove('active');
      
      // Update current page
      currentPage = pageIndex;
      
      // Add active class to new current page
      pageElements[currentPage].classList.add('active');
      
      // Reset animating flag
      isAnimating = false;
      
      // Update navigation
      updateNavigation();
      
      // Preload adjacent images for smoother navigation
      preloadAdjacentImages(currentPage);
      return;
    }
    
    // Determine direction
    const isForward = pageIndex > currentPage;
    
    // Add turning animation class
    if (isForward) {
      pageElements[currentPage].classList.add('turning-forward');
    } else {
      pageElements[pageIndex].classList.add('turning-backward');
    }
    
    // Wait for animation to complete
    setTimeout(() => {
      // Remove animation classes
      pageElements[currentPage].classList.remove('turning-forward');
      pageElements[pageIndex].classList.remove('turning-backward');
      
      // Remove active class from current page
      pageElements[currentPage].classList.remove('active');
      
      // Update current page
      currentPage = pageIndex;
      
      // Add active class to new current page
      pageElements[currentPage].classList.add('active');
      
      // Reset animating flag
      isAnimating = false;
      
      // Update navigation
      updateNavigation();
      
      // Preload adjacent images for smoother navigation
      preloadAdjacentImages(currentPage);
    }, 500); // Match animation duration in CSS
  }
  
  // Event listeners
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function() {
      if (currentPage > 0 && !isAnimating) {
        goToPage(currentPage - 1);
      }
    });
    
    nextBtn.addEventListener('click', function() {
      if (currentPage < totalPages - 1 && !isAnimating) {
        goToPage(currentPage + 1);
      }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft' && currentPage > 0 && !isAnimating) {
        goToPage(currentPage - 1);
      } else if (e.key === 'ArrowRight' && currentPage < totalPages - 1 && !isAnimating) {
        goToPage(currentPage + 1);
      }
    });
    
    // Initialize navigation state
    updateNavigation();
  }
}); 