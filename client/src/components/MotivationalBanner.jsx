import { Link } from "react-router-dom";
function MotivationalBanner() {
  return (
    <section className="motivation card">
      <div className="motivation__content">
        <h3>Share your next tale with the world</h3>
        <p>
          Every story you craft inspires a new adventure. Keep the momentum
          going and let your imagination lead the way.
        </p>
      </div>
      <Link to="/" className="motivation__button">
        Create New Story
      </Link>
    </section>
  );
}

export default MotivationalBanner;
