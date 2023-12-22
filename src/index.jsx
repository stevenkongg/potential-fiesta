import { render } from 'preact';

import './style.css';

export function App() {
	return (
		<div>
			<p><strong>hello world</strong></p>
			<p>hello world</p>
		</div>
		
	);
}


render(<App />, document.getElementById('app'));
