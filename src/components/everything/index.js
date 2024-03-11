import './style.css'
import leave from '../../assets/images/Frame 21.png'

function Everything() {
  return (
    <section className='everything_section'>
      <section className='everything_text'>
        <div className='everything_heading'>
          <h2>Everything you need</h2>
        </div>
        <div className='everything_subheading'>
          <p>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
        </div>
      </section>
      <section className='box_section'>
        <div className='box_item'>
          <div className='box_image'>
            <img src={leave} alt=''/>
          </div>
          <div className='box_heading'>
            <span>Integration ecosystem</span>
          </div>
          <div className='box_paragraph'>
            <p>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_image'>
            <img src={leave} alt=''/>
          </div>
          <div className='box_heading'>
            <span>Goal setting and tracking</span>
          </div>
          <div className='box_paragraph'>
            <p>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_image'>
            <img src={leave} alt=''/>
          </div>
          <div className='box_heading'>
            <span>Secure data encryption</span>
          </div>
          <div className='box_paragraph'>
            <p>With end-to-end encryption, your data is securely stored and protected from unauthorized access.</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Everything