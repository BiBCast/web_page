import { SearchOptions } from './SearchOptions'

export function Select () {
  return (
    <>
      <div className='input'>
        <div className='input-container'>
          <input
            type='search'
            className='focus select'
            placeholder=''
            readOnly
          />
        </div>
        <SearchOptions />
      </div>
    </>
  )
}
