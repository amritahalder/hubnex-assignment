import './style.css'
import intuitiveImage from '../../assets/images/App Night.png'

function Intuitive() {
  return (
    <section className='intuitive_section'>
      <section className='everything_text'>
        <div className='everything_heading'>
          <h2>Intuitive interface</h2>
        </div>
        <div className='everything_subheading'>
          <p>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
        </div>
      </section>
      <div className='intuitive_image'>
        <img src={intuitiveImage} alt=''/>
      </div>
    </section>
  )
}
export default Intuitive