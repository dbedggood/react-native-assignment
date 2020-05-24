import React, { useState } from "react"
import { StyleSheet, Text, ScrollView, View } from "react-native"
import Login from "./components/Login"
import Main from "./components/Main"

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <View style={styles.bigContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.smallContainer}>
                    <Text style={styles.header}>Flight Search Engine</Text>
                    {!isLoggedIn && (
                        <Login
                            loggedIn={isLoggedIn}
                            setLoggedIn={setIsLoggedIn}
                        />
                    )}
                    {isLoggedIn && <Main />}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
    smallContainer: {
        flex: 1,
        padding: 30
    },
    container: {
        flexGrow: 1
    },
    bigContainer: {
        flex: 1,
        backgroundColor: "#fefefe"
    }
})

export default App
