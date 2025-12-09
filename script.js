document.addEventListener("DOMContentLoaded", function () {

  const projectWindows = document.querySelectorAll(".doc-window");

  projectWindows.forEach((window) => {
    const title = window.querySelector(".project-info h2");
    if (!title) return;

    const originalText = title.textContent.trim();
    let typed = false;

    window.addEventListener("mouseenter", () => {
      if (typed) return;
      title.textContent = "";
      let i = 0;

      function typeLetter() {
        if (i < originalText.length) {
          title.textContent += originalText.charAt(i);
          i++;
          setTimeout(typeLetter, 70);
        }
      }

      typeLetter();
      typed = true;
    });

  });

});
