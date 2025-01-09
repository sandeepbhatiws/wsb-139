import React, { useState } from 'react'
import Header from './Header'

export default function Home() {

    const [title, setTitle] = useState('Welcome to WsCube Tech');
    const [description, setDescription] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officiis corporis aliquam aliquid blanditiis velit, quod nisi porro, assumenda incidunt, maiores voluptatibus atque animi sequi ea enim minus quibusdam. Corrupti.');
    const [children, setChildren] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officiis corporis aliquam aliquid blanditiis velit, quod nisi porro, assumenda incidunt, maiores voluptatibus atque animi sequi ea enim minus quibusdam. Corrupti.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officiis corporis aliquam aliquid blanditiis velit, quod nisi porro, assumenda incidunt, maiores voluptatibus atque animi sequi ea enim minus quibusdam. Corrupti.');


  return (
    <div>
      {/* <Header title='Welcome to WsCube Tech' description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officiis corporis aliquam aliquid blanditiis velit, quod nisi porro, assumenda incidunt, maiores voluptatibus atque animi sequi ea enim minus quibusdam. Corrupti." /> */}


      {/* <Header title='Welcome to WsCube Tech' description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officiis corporis aliquam aliquid blanditiis velit, quod nisi porro, assumenda incidunt, maiores voluptatibus atque animi sequi ea enim minus quibusdam. Corrupti.">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officiis corporis aliquam aliquid blanditiis velit, quod nisi porro, assumenda incidunt, maiores voluptatibus atque animi sequi ea enim minus quibusdam. Corrupti.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officiis corporis aliquam aliquid blanditiis velit, quod nisi porro, assumenda incidunt, maiores voluptatibus atque animi sequi ea enim minus quibusdam. Corrupti.
      </Header> */}


    <Header title={title} description={description}>
        {children}
      </Header>
    </div>
  )
}
