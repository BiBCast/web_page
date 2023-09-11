import { Select } from './Select'
export function SearchOptionsButton () {
  return (
    <>
      <div className='opt-menu'>
        <div className='state-show'>
          <Select />
          <Select />
          <Select />
          <Select />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}
