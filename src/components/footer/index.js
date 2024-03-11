import './style.css'
import social1 from '../../assets/images/social_x.svg'
import social2 from '../../assets/images/social_insta.svg'
import social3 from '../../assets/images/social_pinterest.svg'
import social4 from '../../assets/images/social_linkedin.svg'
import social5 from '../../assets/images/social_tiktok.svg'
import social6 from '../../assets/images/social_yutube.svg'


function Footer() {
  return (
    <section className='footer_section'>
      <div className='footer_text'>
        <p>@ 2024 Your Company, Inc. All rights reserved</p>
      </div>
      <div className='social_connect'>
        <img src={social1} alt=''/>
        <img src={social2} alt=''/>
        <img src={social3} alt=''/>
        <img src={social4} alt=''/>
        <img src={social5} alt=''/>
        <img src={social6} alt=''/>
      </div>
    </section>
  )
}
export default Footer