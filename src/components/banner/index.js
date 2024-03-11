import './style.css'
import arrow from '../../assets/images/right_arrow.svg'
import cursor from '../../assets/images/cursor.svg'
import message from '../../assets/images/message.svg'


function Banner() {
  return (
    <section className='site_banner'>
      <div className='inner_banner'>
        <div className='version'>
          <p>Version 2.0 is here &nbsp;<a href="#">Read more &nbsp;<img src={arrow} alt=''/></a></p>
        </div>
        <div className='one_task'>
          <h1>One Task at a Time</h1>
        </div>
        <div className='banner_paragraph'>
          <p>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
        </div>
        <button type='button' className='get_for_free_btn'>Get for free</button>
        <div className='banner_infograph'>
          <img src={cursor} className='cursor_img' />
          <img src={message} className='message_img' />
        </div>
      </div>
    </section>
  )
}
export default Banner