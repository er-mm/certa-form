import React from 'react';
import Form from './components/Form';
import { Container, Title, Wrapper, FormWrapper } from './styles/_appStyle';
import { formData } from './data/formData';

function App() {

	const handleSubmission = (val) => {
		alert(JSON.stringify(val, null, 4));
		fetch('https://enmzq6eaj9rj.x.pipedream.net/response/submit/?name=MayankMittal', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(val),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<Container>
			<Title>Dynamic Form</Title>
			<Wrapper>
				<FormWrapper>
					<h2>Please Enter all Details</h2>
					<Form fields={formData} cbSubmit={handleSubmission} />
				</FormWrapper>
			</Wrapper>
		</Container>
	);
}

export default App;
