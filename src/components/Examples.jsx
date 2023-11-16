import {useState} from 'react'
import { EXAMPLES } from '../data'
import TabButtons from './TabButtons';



export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState()

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
  }
    
    return (
         <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButtons isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButtons>
            <TabButtons isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButtons>
            <TabButtons isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButtons>
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? (
             <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}     
              </code>
            </pre>

          </div>
         ): null}
        </section>
    )
}