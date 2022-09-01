class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div tabindex="0" class="hero">
        <div class="hero__inner">
            <h2 tabindex="0" class="hero__title">Restaurant Enjoy</h1>
            <p tabindex="0" class="hero__tagline">
                Tempatnya nongkrong anak muda ter favorite belum kesini belum asik.
            </p>
        </div>
    </div>
`;
  }
}

customElements.define("hero-section", Hero);
