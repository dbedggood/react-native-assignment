import React, { useState } from "react"
import { StyleSheet, Button, Text, TextInput, View } from "react-native"
import { data } from "../assets/users.json"

const Login = ({ loggedIn, setLoggedIn }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [detailsValid, setDetailsValid] = useState(true)

    const handleSubmit = () => {
        data.forEach((user) => {
            if (user.user === username && user.pass === password) {
                setDetailsValid(true)
                setLoggedIn(true)
            }
        })
        if (!loggedIn) {
            setDetailsValid(false)
        }
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setUsername(text)}
                value={username}
                placeholder={"username"}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder={"password"}
            />
            <Button onPress={handleSubmit} title="Login" />
            {!detailsValid && (
                <Text style={styles.error}>
                    Incorrect username or password, try again!
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        height: 50
    },
    error: {
        color: "red"
    }
})

export default Login
