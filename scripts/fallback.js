if (!Modernizr.cssanimations || !Modernizr.csstransitions) {
    // JavaScript fallback animation
    const elements = document.querySelectorAll('.fade-in-out');
    elements.forEach(element => {
      let opacity = 0;
      const interval = setInterval(() => {
        if (opacity < 1) {
          opacity += 0.1;
          element.style.opacity = opacity;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            interval2 = setInterval(() => {
              if (opacity > 0) {
                opacity -= 0.1;
                element.style.opacity = opacity;
              } else {
                clearInterval(interval2);
              }
            }, 100);
          }, 1000);
        }
      }, 100);
    });
  }