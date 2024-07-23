import React from 'react'
//about page that gives details of the text utils application
export default function About(props) {
  return (
    <div className={`textarea ${props.mode === 'light' ? 'body-light' : 'body-dark'}`}>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">TextAnalyst - The Ultimate Text Analyst and Editor</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
             
            </div>
            <h3 className="fs-2  mb-3">Analyze your Text</h3>
            <p >TextAnalyst gives you a way to analyze your text efficiently. It enables you to count the number of words, number of character and the approximate time to read. It provides various features like converting the text to Upper Case, Lower Case , Capitalizing the text and removing extra spaces .</p>
            
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              
            </div>
            <h3 className="fs-2  mb-3">Free to Use</h3>
            <p>TextAnalyst is an absolutely free application built with love in React. This app is extremely useful for writing text with word/character limit because of the word and character count features it provides.</p>
          
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              
            </div>
            <h3 className="fs-2  mb-3">Browser Compatible</h3>
            <p>TextAnalyst is an application that is compatible with every single broswer. It is extremely well suited to count characters in essays, blogs, pdf's etc.</p>
           
          </div>
        </div>
      </div>
    </div>
  )
}
