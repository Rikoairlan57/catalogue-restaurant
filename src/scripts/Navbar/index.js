class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
        <div class="logo">
              <a href="#">
                  <h1>Restaurant Enjoy</h1>
              </a>
        </div>
        <button class="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul tabindex="0">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#"> Favorite</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/riko-airlan-ramadhan-2ba98a217/"  rel="noreferrer" target="_blank">About Us</a
          >
        </li>
      </ul>

    </nav>
`;
  }
}

customElements.define("nav-bar", Navbar);
