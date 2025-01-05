function downloadResume() {
    window.open('Resume.pdf', '_blank');
  }

  function toggleText(element) {
    const moreText = element.querySelector(".more-text");
    if (moreText) {
      moreText.classList.toggle("hidden");
    }
  }