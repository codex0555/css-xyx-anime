document.addEventListener("DOMContentLoaded", function() {
    // Get all images with the 'lazy' class
    var lazyImages = document.querySelectorAll('img.lazy');

    // Create an Intersection Observer
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        // If the image is in the viewport, load it and stop observing
        if (entry.isIntersecting) {
          var lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          observer.unobserve(lazyImage);
        }
      });
    });

    // Start observing each lazy image
    lazyImages.forEach(function(lazyImage) {
      observer.observe(lazyImage);
    });
  });
