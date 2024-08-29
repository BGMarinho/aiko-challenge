import './styles.css';

export default function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="informetion">
        <span>
          Copyright © 2024{' '}
          <a href="https://github.com/BGMarinho" target="_blank">
            BGMarinho
          </a>
          . Todos os direitos reservados.
        </span>
      </div>
    </section>
  );
}
