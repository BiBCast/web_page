import playButton from "../assets/play-button.png";
export function Tooltip() {
  return (
    <div className="tooltip">
      <div className="tooltip-body">
        <div>
          <a href="#" className="tooltip-image">
            <img src={playButton} alt="Logo" />
          </a>
          <section>
            <a href="#">title</a>
            <div>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
            </div>
          </section>
        </div>
        <div>
          <a href="#" className="tooltip-image">
            <img src={playButton} alt="Logo" />
          </a>
          <section>
            <a href="#">title</a>
            <div>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
            </div>
          </section>
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
