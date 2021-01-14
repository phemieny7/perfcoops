import React from 'react'
import FeatureItem from '../FeatureItems/Feature-items.component'
import image from '../../assets/feature/10.png'
export default function Feature() {
    return (
        
      <section id="section-features" className="section">
        <div className="container">
          <header className="section-header">
            <small>Feature</small>
            <h2>Team communication for the 21st century.</h2>
            <hr/>
          </header>
            <FeatureItem 
                className1='align-items-center'
                className2='ml-auto'
                className3='order-md-first'
                img={image}
                hr
                >
              <h4>Drag, drop, and share your files.</h4>
              <p>Not just your messages, but all your files, images, PDFs, documents, and spreadsheets can be dropped right into TheSaaS and shared with anyone you want. Add comments, star for later reference, and it’s all completely searchable.</p>
              <p>If you use any services like Google Drive, Dropbox, or Box, just paste the link and that document is immediately in sync and searchable too.</p>
            </FeatureItem>

            <FeatureItem 
                className1='align-items-center'
                className2='mr-auto'
                img={image}
                hr
                >
              <h4>Works everywhere you go</h4>
              <p>Everything in TheSaaS—messages, notifications, files, and all—is automatically indexed and archived so that you can have it at your fingertips whenever you want. TheSaaS also indexes the content of every file so you can search within PDFs, Word documents, Google docs, and more. With one search box and a set of powerful search operators, you can slice and dice your way to that one message in your communication haystack.</p>
            </FeatureItem>




        </div>
      </section>
    )
}
