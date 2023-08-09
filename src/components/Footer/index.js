const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <ul className="footer-links">
          <li>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <span className="icon icon-github" aria-label="github profile link"></span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
              <span className="icon icon-linkedin" aria-label="linkedin profile link"></span>
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
              <span className="icon icon-stack-overflow " aria-label="stackoverflow profile link"></span>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;
