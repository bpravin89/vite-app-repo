import React from "react"


export default function FirstScreen(props) {
    return (
        <div className="first-screen">
                    <h2>Quizzical</h2>
                    <p>My First Solo React Project</p>
                    <button onClick={props.startQuiz}>Start quiz</button>
                    </div>
    )
}