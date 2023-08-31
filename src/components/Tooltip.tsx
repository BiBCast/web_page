import PlayButton from "../assets/play-button.png";
import Manga from "../assets/book.png";
export function Tooltip() {
  return (
    <div className="tooltip">
      <div className="tooltip-body">
        <div className="tooltip-primary-link">
          <a href="#" className="tooltip-image">
            <img src={PlayButton} alt="Logo" />
          </a>
          <div className="tooltip-section">
            <a href="#">Anime</a>
            <div>
              <a className="tooltip-secondary-link" href="#">
                Top 100
              </a>
              <a className="tooltip-secondary-link" href="#">
                Trending
              </a>
              <a className="tooltip-secondary-link" href="#">
                Top movies
              </a>
            </div>
          </div>
        </div>
        <div className="tooltip-primary-link">
          <a href="#" className="tooltip-image">
            <img src={Manga} alt="Logo" />
          </a>
          <div className="tooltip-section">
            <a href="#">Manga</a>
            <div>
              <a className="tooltip-secondary-link" href="#">
                Top 100
              </a>
              <a className="tooltip-secondary-link" href="#">
                Trending
              </a>
              <a className="tooltip-secondary-link" href="#">
                Top movies
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tooltip-footer">
        <a href="#">footer</a>
        <a href="#">footer</a>
        <a href="#">footer</a>
        <a href="#">footer</a>
      </div>
    </div>
  );
}
