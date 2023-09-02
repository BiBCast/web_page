import { SearchButton } from "./SearchButton";
export function FilterShow() {
  return (
    <>
      <div className="filtershow-main">
        <span>top 100 anime</span>
        <div className="filtershow-main-container">
          <div>
            <div className="filtershow-element-container">
              <span>search</span>
              <SearchButton />
            </div>
            <div className="filtershow-element-container">
              <span>genres</span>
              <SearchButton />
            </div>
            <div className="filtershow-element-container">
              <span>year</span>
              <SearchButton />
            </div>
            <div className="filtershow-element-container">
              <span>season</span>
              <SearchButton />
            </div>
            <div className="filtershow-element-container">
              <span>format</span>
              <SearchButton />
            </div>
            <div className="filtershow-element-container">
              <span>airing status</span>
              <SearchButton />
            </div>
          </div>
          <div className="filtershow-element-container">Button</div>
        </div>
      </div>
    </>
  );
}
