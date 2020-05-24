import React from "react"
import Flight from "./Flight"

import { StyleSheet, Text, View } from "react-native"
import getTrips from "../functions/getTrips"

const Results = (props) => {
    const {
        isReturn,
        origin,
        destination,
        departDate,
        returnDate,
        passengers
    } = props.searchTerms

    const trips = getTrips(props.searchTerms)

    return (
        <View style={styles.container}>
            <View>
                <Text>
                    {origin} > {destination} {isReturn && "> " + origin}
                </Text>
                <View>
                    <Text>Depart: {departDate}</Text>
                    {isReturn && <Text>Return: {returnDate}</Text>}
                </View>
            </View>
            <View>
                {trips.map((trip, index) => (
                    <Flight
                        key={index}
                        info={trip}
                        passengerCount={passengers}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
})

export default Results
