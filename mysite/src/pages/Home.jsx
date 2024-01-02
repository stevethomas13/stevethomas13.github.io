import React  from 'react';
import About  from './About'
import Projects from './Projects';
import Introduction from './Introduction'

export default function Home() {

    return (
        <div>
            <Introduction />
            <Projects />
            <About />
        </div>
    );
}
