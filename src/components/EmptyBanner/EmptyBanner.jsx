import './EmptyBanner.scss'

const EmptyBanner = ({title}) => {
  return (
    <div className='empty'>
      <h2 className='empty__title'>{title}</h2>
    </div>
  )
}

export default EmptyBanner
