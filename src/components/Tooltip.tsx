import PlayButton from "../assets/play-button.png";
import Manga from "../assets/book.png";
import Like from "../assets/like.png";
import Star from "../assets/star.png";
import Caracter from "../assets/man.png";
import Staf from "../assets/men.png";
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
        <div>
          <div>
            <img src={Staf} alt="Logo" />
            <a href="#">Staff</a>
          </div>
          <div>
            <img src={Caracter} alt="Logo" />
            <a href="#">Caracter</a>
          </div>
        </div>
        <div>
          <div>
            <img src={Star} alt="Logo" />
            <a href="#">Reviews</a>
          </div>
          <div>
            <img src={Like} alt="Logo" />
            <a href="#">Raccomandations</a>
          </div>
        </div>
      </div>
    </div>
  );
}
