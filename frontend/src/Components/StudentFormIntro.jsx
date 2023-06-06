import React from 'react'

const StudentFormIntro = ({next}) => {
  return (
    <div className="content-1C">
          StudentFormIntro
          <div className="buttons">
            <button className="button" onClick={() => next()}>
              Next
            </button>
          </div>
    </div>
  )
}

export default StudentFormIntro