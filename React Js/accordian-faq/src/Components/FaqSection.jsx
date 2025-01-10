import React from 'react'

export default function FaqSection({ value, activeFaq, setActiveFaq }) {

    const faqHandler = (id) => {
        setActiveFaq(id);
    }

  return (
    <>
        <div class="faqs">
            <div class="faqquestion" onClick={ () => faqHandler(value.id) }>
                { value.question }
                <span>{ (activeFaq == value.id) ? '-' : '+' }</span>
            </div>
            <div class={ (activeFaq == value.id) ? 'faqanswer' : 'faqanswer display' }>
                { value.answer }
            </div>
        </div>
    </>
  )
}
