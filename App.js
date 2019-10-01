import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import { LoginOptions, LoginStruct } from './app/components/forms/testForm';

export default function App() {
	return (
		<View style={styles.container}>
			<Form ref="formTest" type={LoginStruct} options={LoginOptions} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
