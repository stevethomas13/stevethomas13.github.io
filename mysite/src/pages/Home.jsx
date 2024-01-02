import React  from 'react';
import About  from './About'
import Projects from './Projects';
import Introduction from './Introduction'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'

export default function Home() {

    return (
        <div>
            <Introduction />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            
        </div>
    );
}
