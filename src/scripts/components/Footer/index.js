class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <ul>
            <li tabindex="0">Copyright © 2022 - Restaurant Enjoy</li>
            <li tabindex="0">Build With 🧡 Riko Airlan Ramadhan</li>
        </ul>
    </footer>
`;
  }
}

customElements.define("footer-section", Footer);
