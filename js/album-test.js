// Domain Knowledge Album Test
document.addEventListener('DOMContentLoaded', function() {
  console.log('Running Domain Knowledge Album tests...');
  
  // Test elements exist
  function testElementsExist() {
    const tests = [
      { element: '.dk-album', name: 'Album container' },
      { element: '.dk-page', name: 'Pages' },
      { element: '#dk-prev', name: 'Previous button' },
      { element: '#dk-next', name: 'Next button' },
      { element: '#dk-page-indicator', name: 'Page indicator' }
    ];
    
    let allPassed = true;
    
    tests.forEach(test => {
      const el = document.querySelector(test.element);
      const result = el !== null;
      console.log(`Test: ${test.name} exists - ${result ? 'PASSED' : 'FAILED'}`);
      if (!result) allPassed = false;
    });
    
    return allPassed;
  }
  
  // Test navigation
  function testNavigation() {
    const pages = document.querySelectorAll('.dk-page');
    const prevBtn = document.getElementById('dk-prev');
    const nextBtn = document.getElementById('dk-next');
    
    if (!pages.length || !prevBtn || !nextBtn) {
      console.log('Test: Navigation - FAILED (Missing required elements)');
      return false;
    }
    
    // Test previous button is disabled initially
    if (!prevBtn.disabled) {
      console.log('Test: Previous button disabled initially - FAILED');
      return false;
    }
    
    // Test next button works
    let firstPageVisible = pages[0].classList.contains('active');
    
    if (!firstPageVisible) {
      console.log('Test: First page visible initially - FAILED');
      return false;
    }
    
    // Simulate click on next button
    console.log('Clicking next button...');
    nextBtn.click();
    
    // Wait for animation to complete
    setTimeout(() => {
      // Check if second page is now visible
      const secondPageVisible = pages[1].classList.contains('active');
      const firstPageHidden = !pages[0].classList.contains('active');
      const prevBtnEnabled = !prevBtn.disabled;
      
      console.log(`Test: Second page visible after next - ${secondPageVisible ? 'PASSED' : 'FAILED'}`);
      console.log(`Test: First page hidden after next - ${firstPageHidden ? 'PASSED' : 'FAILED'}`);
      console.log(`Test: Prev button enabled after next - ${prevBtnEnabled ? 'PASSED' : 'FAILED'}`);
      
      // Test previous button works
      setTimeout(() => {
        console.log('Clicking previous button...');
        prevBtn.click();
        
        // Wait for animation to complete
        setTimeout(() => {
          // Check if first page is visible again
          const firstPageVisibleAgain = pages[0].classList.contains('active');
          const secondPageHidden = !pages[1].classList.contains('active');
          const prevBtnDisabledAgain = prevBtn.disabled;
          
          console.log(`Test: First page visible after prev - ${firstPageVisibleAgain ? 'PASSED' : 'FAILED'}`);
          console.log(`Test: Second page hidden after prev - ${secondPageHidden ? 'PASSED' : 'FAILED'}`);
          console.log(`Test: Prev button disabled after prev - ${prevBtnDisabledAgain ? 'PASSED' : 'FAILED'}`);
          
          // Test reader mode
          testReaderMode();
        }, 600);
      }, 600);
    }, 600);
    
    return true;
  }
  
  // Test reader mode
  function testReaderMode() {
    const albumContainer = document.querySelector('.dk-album');
    const readerToggle = document.querySelector('#dk-reader-toggle');
    
    if (!albumContainer || !readerToggle) {
      console.log('Test: Reader mode - FAILED (Missing required elements)');
      return false;
    }
    
    console.log('Clicking reader mode toggle...');
    readerToggle.click();
    
    const readerModeEnabled = albumContainer.classList.contains('reader-mode');
    console.log(`Test: Reader mode enabled - ${readerModeEnabled ? 'PASSED' : 'FAILED'}`);
    
    // Toggle back
    readerToggle.click();
    const readerModeDisabled = !albumContainer.classList.contains('reader-mode');
    console.log(`Test: Reader mode disabled - ${readerModeDisabled ? 'PASSED' : 'FAILED'}`);
    
    console.log('All tests completed!');
    return true;
  }
  
  // Run tests
  if (testElementsExist()) {
    console.log('Element existence tests passed, proceeding to navigation tests...');
    testNavigation();
  } else {
    console.log('Element existence tests failed, cannot proceed with navigation tests.');
  }
}); 