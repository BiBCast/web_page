import { Input } from './Input'
import { ComboBox } from './ComboBox'
import { Select } from './Select'
import { Button } from './Button'
export function FilterShow () {
  return (
    <>
      <div className='filtershow'>
        <div>
          <div>
            <span>top 100 anime</span>
          </div>
          <div className='filtershow-container'>
            <div className='filtershow-items'>
              <div className='filtershow-element'>
                <span>search</span>
                <Input />
              </div>
              <div className='filtershow-element'>
                <span>genres</span>
                <ComboBox />
              </div>
              <div className='filtershow-element'>
                <span>year</span>
                <ComboBox />
              </div>
              <div className='filtershow-element'>
                <span>season</span>
                <Select />
              </div>
              <div className='filtershow-element'>
                <span>format</span>
                <Select />
              </div>
              <div className='filtershow-element'>
                <span>airing status</span>
                <Select />
              </div>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </>
  )
}
