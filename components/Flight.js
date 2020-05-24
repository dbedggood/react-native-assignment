import React, { useState } from "react"
import { Alert, Modal, Button, StyleSheet, Text, View } from "react-native"

const Flight = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const passengers = props.passengerCount
    const { departingFlight, returningFlight, price } = props.info

    return (
        <View style={styles.flight}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.")
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        {"Tickets booked! \nTotal cost: $" + price}
                    </Text>

                    <Button
                        title="OK!"
                        onPress={() => {
                            setModalVisible(!modalVisible)
                        }}
                    ></Button>
                </View>
            </Modal>
            <View>
                <Text>${price} per passenger</Text>
                <View style={styles.details}>
                    <View>
                        <Text>{departingFlight.plane}</Text>
                        <Text>
                            {departingFlight.from} > {departingFlight.to}
                        </Text>
                        <Text>Depart: {departingFlight.depart}</Text>
                        <Text>Arrive: {departingFlight.arrive}</Text>
                    </View>
                    {returningFlight && (
                        <View>
                            <Text>{returningFlight.plane}</Text>
                            <Text>
                                {returningFlight.from} > {returningFlight.to}
                            </Text>
                            <Text>Depart: {returningFlight.depart}</Text>
                            <Text>Arrive: {returningFlight.arrive}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View>
                <Button
                    onPress={() => {
                        setModalVisible(true)
                    }}
                    title="Book This Flight"
                ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flight: {
        marginTop: 8,
        padding: 5,
        borderColor: "black",
        borderWidth: 1
    },
    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15
    }
})

export default Flight
