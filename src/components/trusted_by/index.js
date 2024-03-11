import testimoni1 from '../../assets/images/testimoni_1.png'
import testimoni2 from '../../assets/images/testimoni_2.png'
import testimoni3 from '../../assets/images/testimoni_3.png'
import testimoni4 from '../../assets/images/testimoni_4.png'
import testimoni5 from '../../assets/images/testimoni_5.png'
import testimoni6 from '../../assets/images/testimoni_6.png'
import './style.css'

function TrustedBy() {
  return (
    <>
      <section className="trusted_by">
        <div className="testimonial_text">
          <p>Trusted by the world’s most innovative teams</p>
        </div>
        <div className="testimonial_images">
          <img src={testimoni1} alt=''/>
          <img src={testimoni2} alt=''/>
          <img src={testimoni3} alt=''/>
          <img src={testimoni4} alt=''/>
          <img src={testimoni5} alt=''/>
          <img src={testimoni6} alt=''/>
        </div>
      </section>
    </>
  )
}

export default TrustedBy