import './style.css'
import accordionIcon from '../../assets/images/Frame.png'

function AskQuestion() {
  return (
    <section className='ask_question_section'>
      <section className='everything_text '>
        <div className='everything_heading ask_question_heading'>
          <h2>Frequently asked questions</h2>
        </div>
        <section className='accordion_section'>
          <div className='accordion_inner_section'>
            <div className='accordion_item'>
              <div className='accordion_text'>
                <p>How does the pricing work for teams</p>
              </div>
              <div className='accordion_icon'>
                <img src={accordionIcon} alt=''/>
              </div>
            </div>
            <div className='accordion_item'>
              <div className='accordion_text'>
                <p>How does the pricing work for teams</p>
              </div>
              <div className='accordion_icon'>
                <img src={accordionIcon} alt=''/>
              </div>
            </div>
            <div className='accordion_item'>
              <div className='accordion_text'>
                <p>How does the pricing work for teams</p>
              </div>
              <div className='accordion_icon'>
                <img src={accordionIcon} alt=''/>
              </div>
            </div>
            <div className='accordion_item'>
              <div className='accordion_text'>
                <p>How does the pricing work for teams</p>
              </div>
              <div className='accordion_icon'>
                <img src={accordionIcon} alt=''/>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  ) 
}

export default AskQuestion