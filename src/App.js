import './App.sass'
import Editor from './components/Editor/Editor.jsx'
import InputJsonFile from './components/InputJsonFile/InputJsonFile.jsx'
import JsonEditor from './components/containers/JsonEditor/JsonEditor.jsx'

function App() {
	return (
		<div className="App">
			<h1>JSON Editor</h1>
			<JsonEditor />
		</div>
	)
}

export default App
