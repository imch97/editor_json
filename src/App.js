import './App.sass'
import Editor from './components/Editor/Editor.jsx'
import InputJsonFile from './components/InputJsonFile/InputJsonFile.jsx'

function App() {
	return (
		<div className="App">
			<h1>JSON Editor</h1>
			<InputJsonFile />
			<Editor />
		</div>
	)
}

export default App
