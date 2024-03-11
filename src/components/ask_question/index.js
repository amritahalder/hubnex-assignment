import './style.css'
import accordionIcon from '../../assets/images/Frame.png'
import minusIcon from '../../assets/images/minus.png'
import { useState } from 'react'

const arrayList = [
  {
    id: 1,
    title: "How does the pricing work for teams",
    description: "How does the pricing work for teams How does the pricing work for teams How does the pricing work for teams"
  },
  {
    id: 2,
    title: "How does the pricing work for teams",
    description: "How does the pricing work for teams How does the pricing work for teams How does the pricing work for teams"
  },
  {
    id: 3,
    title: "How does the pricing work for teams",
    description: "How does the pricing work for teams How does the pricing work for teams How does the pricing work for teams"
  },
  {
    id: 4,
    title: "How does the pricing work for teams",
    description: "How does the pricing work for teams How does the pricing work for teams How does the pricing work for teams"
  }
]

const AccordionItem = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className='accordion_item' key={props.id}>
      <div className='accordion_heading' onClick={() => setShowDescription(!showDescription)}>
        <div className='accordion_text'>
          <p>{props.title}</p>
        </div>
        <div className='accordion_icon'>
          <img src={showDescription ? minusIcon : accordionIcon} alt=''/>
        </div>
      </div>
      {showDescription && (
        <div className='accordion_description'>
          {props.description}
        </div>
      )}
    </div>
  )
}

function AskQuestion() {
  const [accordion, setAccordion] = useState(arrayList)

  return (
    <section className='ask_question_section'>
      <section className='everything_text '>
        <div className='everything_heading ask_question_heading'>
          <h2>Frequently asked questions</h2>
        </div>
        <section className='accordion_section'>
          <div className='accordion_inner_section'>
            {accordion.map(el => (
              <AccordionItem
                id={el.id}
                title={el.title}
                description={el.description}
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  ) 
}

export default AskQuestion