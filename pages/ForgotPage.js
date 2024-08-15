import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ForgotPage = () => {
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (text) => {
        setEmail(text);
    };
  
    const handleSendPress = () => {
        // Logic untuk mengirim link reset password
    };
  
    return (
        <LinearGradient
            colors={['#ff7e5f', '#feb47b']}  // Warna gradasi bisa diubah sesuai kebutuhan
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Forgot password</Text>
                <Text style={styles.instruction}>
                    Please, enter your email address. You will receive a link to create a new password via email.
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={handleEmailChange}
                />
                <Text style={styles.errorText}>Not a valid email address. Should be your@email.com</Text>
                <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
                    <Text style={styles.sendButtonText}>SEND</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    instruction: {
        fontSize: 14,
        marginBottom: 20,
        color: '#333',
        alignSelf: 'flex-start',
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 5,
    },
    errorText: {
        color: 'black',
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
    },
    sendButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
  
export default ForgotPage;
