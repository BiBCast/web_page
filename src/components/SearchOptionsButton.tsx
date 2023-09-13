import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import { Select } from "./Select";
export function SearchOptionsButton() {
  return (
    <>
      <div className="opt-menu">
        <div className="state-show">
          <Select />
          <Select />
          <Select />
        </div>
        <div className="select-show">
          <MultiRangeSlider min={0} max={100} />
          <MultiRangeSlider min={0} max={100} />
          <MultiRangeSlider min={0} max={100} />
        </div>
      </div>
    </>
  );
}
