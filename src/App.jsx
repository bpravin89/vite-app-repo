import React from 'react'
import FirstScreen from "./components/FirstScreen"
import SecondScreen from "./components/SecondScreen"
function App() {
  const [quizStarted, setQuizStarted] = React.useState(false)
    
  function toggleQuiz() {
    setQuizStarted(prevState => !prevState)
}
  return (
    <main>
           {!quizStarted && <FirstScreen startQuiz={toggleQuiz}/>}
            
            {quizStarted && <SecondScreen toggleQuiz={toggleQuiz}/>
            }
            
        </main>
  )
}

export default App
