import { SearchOptions } from './SearchOptions'

export function ComboBox () {
  return (
    <>
      <div className='input'>
        <div className='input-container'>
          <input type='search' className='focus select' placeholder='Any' />
        </div>
        <SearchOptions />
      </div>
    </>
  )
}
