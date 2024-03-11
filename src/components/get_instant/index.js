import './style.css'
import emojistar from '../../assets/images/emojistar 1.svg'
import helix2 from '../../assets/images/helix2 1.svg'

function GetInstant() {
  return (
    <section className='get_section'>
      <div className='everything_text'>
        <div className='everything_heading get_heading'>
          <h2>Get instant access</h2>
        </div>
        <div className='everything_subheading get_subheading'>
          <p>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        </div>
      </div>
      <div className='enter_email'>
        <input type='text' placeholder='name@gmail.com'/>
        <button type='button' className='get_for_free_btn'>Get access</button>
      </div>
      <div className='get_section_images'>
          <img src={emojistar} alt='' className='emojistar'/>
          <img src={helix2} alt='' className='helix2'/>
        </div>
    </section>
  )
}

export default GetInstant