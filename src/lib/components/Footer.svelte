<script>
  import { onMount } from "svelte";
  import "../../styles/layout/Footer.css";

  let clockEl;
let interval;

onMount(() => {
    function updateMachineTime() {
        const now = new Date();
        const h = now.getHours().toString().padStart(2, "0");
        const m = now.getMinutes().toString().padStart(2, "0");
        clockEl.textContent = `${h}:${m}`;
    }
    updateMachineTime();
    interval = setInterval(updateMachineTime, 1000);

    return () => clearInterval(interval);  // cleanup on unmount
});

</script>

<footer id="contact" aria-label="Contact">
  <div class="footer-top">
    <h2 class="footer-heading">Let's work together!</h2>
  </div>

<div class="footer-bottom-row">
  <div class="footer-left">
    <p class="footer-tagline">
      Portfolio produced in
      <strong
        ><a
          href="https://html.spec.whatwg.org/multipage/"
          target="_blank"
          rel="noopener">HTML</a
        ></strong
      >,
      <strong
        ><a
          href="https://www.w3.org/Style/CSS/Overview.fr.html"
          target="_blank"
          rel="noopener">CSS</a
        ></strong
      >
      et
      <strong
        ><a
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          target="_blank"
          rel="noopener">JavaScript</a
        ></strong
      >. The stickman animation inspired by this
      <a
        href="https://codepen.io/JeromeRenders/pen/adEVja"
        target="_blank"
        rel="noopener"><strong>CodePen</strong></a
      >.The same goes for the parallax effect reproduced thanks to this
      <a
        href="https://codepen.io/matt-cannon/pen/wBaBQvo"
        target="_blank"
        rel="noopener"><strong>CodePen.</strong></a
      >
      The font used is
      <a href="https://departuremono.com/" target="_blank" rel="noopener"
        ><strong>Departure Mono</strong></a
      >, a monospaced pixel font
      <a href="https://www.helenazhang.com/" target="_blank" rel="noopener"
        ><strong>Helena ZHANG</strong></a
      >. Thanks for visiting!
      <br />
    </p>
  </div>

  <div class="footer-middle" aria-label="Social media links">
  <div><i class="fa-brands fa-linkedin" aria-hidden="true"></i><a href="https://linkedin.com/in/ayomide-ajimuda" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn" >LinkedIn</a></div>
  <div><i class="fa-brands fa-github" aria-hidden="true"></i><a href="https://github.com/AZAZ3LTRON" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="GitHub">Github</a></div>
  <div><i class="fa-regular fa-envelope" aria-hidden="true"></i><a href="mailto:aydexter05@gmail.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Email">Email</a></div>
  <div><i class="fa-brands fa-instagram" aria-hidden="true"></i><a href="https://www.instagram.com/ajims.archives/" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram">Instagram</a></div>
  <div><i class="fa-solid fa-code" aria-hidden="true"></i><a href="https://www.codewars.com/users/AyomideAjimuda18" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="CodeWars">CodeWars</a></div>
  </div>

  <div class="footer-right">
    <div class="footer-meta-col">
      <span class="footer-meta-label">Version &amp; Timezone</span>
      <div id="hour-footer" bind:this={clockEl}></div>
      <span class="footer-meta-value" id="footer-clock"></span>
    </div>
    <div class="footer-socials-col"></div>
  </div>
</div>
</footer>
