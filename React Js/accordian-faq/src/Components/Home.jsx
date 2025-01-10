import React, { useState } from 'react'
import FaqSection from './FaqSection'
import faqData from '../data/faq';

export default function Home() {

    const [allFaqs, setAllFaqs] = useState(faqData);
    const [activeFaq, setActiveFaq] = useState(faqData[0].id);

  return (
    <>
        <div class="outer">

            {
                allFaqs.map((v,i) => {
                    return(
                        <FaqSection value={v} activeFaq={activeFaq} setActiveFaq ={setActiveFaq}/>
                    )
                })
            }
            
        </div>
    </>
  )
}
