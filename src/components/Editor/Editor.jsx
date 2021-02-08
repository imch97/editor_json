import React from 'react'
import classNames from 'classnames'
import './Editor.sass'

// TODO: contentEditable="true | false" редактирование DIV элемента

const Editor = () => {
	return (
		<div className={classNames({ editor: true })}>
			<div
				className={classNames({ editor_menu: true })}
				contentEditable=""
			></div>
		</div>
	)
}

export default Editor
