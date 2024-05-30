import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p>
        Have a project in mind? <br className="hidden sm:block" />
        Let's work together.
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
