import React, { useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { Picker } from "@react-native-community/picker"

const Search = (props) => {
    const [searchInput, setSearchInput] = useState(props.searchTerms)
    const [departDate, setDepartDate] = useState(props.searchTerms.departDate)
    const [returnDate, setReturnDate] = useState(props.searchTerms.returnDate)

    const setReturn = () => {
        setSearchInput((prevSearchInput) => ({
            ...prevSearchInput,
            isReturn: true
        }))
    }

    const setOneWay = () => {
        setSearchInput((prevSearchInput) => ({
            ...prevSearchInput,
            isReturn: false
        }))
    }

    const handleSearch = () => {
        props.setSearchTerms(() => ({ ...searchInput, departDate, returnDate }))
    }

    return (
        <View>
            <View style={styles.tripType}>
                <Button onPress={setReturn} title="Return Trip"></Button>
                <Button onPress={setOneWay} title="One-way Trip"></Button>
            </View>
            <View style={styles.mb}>
                <View>
                    <Text>Origin City: </Text>
                    <Picker
                        style={styles.input}
                        selectedValue={searchInput.origin}
                        onValueChange={(originValue) =>
                            setSearchInput((prevSearchInput) => ({
                                ...prevSearchInput,
                                origin: originValue
                            }))
                        }
                    >
                        <Picker.Item label="Auckland" value="AKL" />
                        <Picker.Item label="Wellington" value="WLG" />
                        <Picker.Item label="Christchurch" value="CHC" />
                    </Picker>
                </View>

                <View>
                    <Text>Destination City: </Text>
                    <Picker
                        style={styles.input}
                        selectedValue={searchInput.destination}
                        onValueChange={(destinationValue) =>
                            setSearchInput((prevSearchInput) => ({
                                ...prevSearchInput,
                                destination: destinationValue
                            }))
                        }
                    >
                        <Picker.Item label="Auckland" value="AKL" />
                        <Picker.Item label="Wellington" value="WLG" />
                        <Picker.Item label="Christchurch" value="CHC" />
                    </Picker>
                </View>

                <View>
                    <Text>Depart Date: </Text>
                    <Picker
                        style={styles.input}
                        selectedValue={departDate}
                        onValueChange={(date) => setDepartDate(date)}
                    >
                        <Picker.Item
                            label="14th April 2020"
                            value="2020-04-14"
                        />
                        <Picker.Item
                            label="15th April 2020"
                            value="2020-04-15"
                        />
                        <Picker.Item
                            label="16th April 2020"
                            value="2020-04-16"
                        />
                        <Picker.Item
                            label="17th April 2020"
                            value="2020-04-17"
                        />
                    </Picker>
                </View>

                {searchInput.isReturn && (
                    <View>
                        <Text>Return Date: </Text>
                        <Picker
                            style={styles.input}
                            selectedValue={returnDate}
                            onValueChange={(date) => setReturnDate(date)}
                        >
                            <Picker.Item
                                label="14th April 2020"
                                value="2020-04-14"
                            />
                            <Picker.Item
                                label="15th April 2020"
                                value="2020-04-15"
                            />
                            <Picker.Item
                                label="16th April 2020"
                                value="2020-04-16"
                            />
                            <Picker.Item
                                label="17th April 2020"
                                value="2020-04-17"
                            />
                        </Picker>
                    </View>
                )}
            </View>
            <Button
                type="submit"
                onPress={handleSearch}
                title="Search"
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: { padding: 5, backgroundColor: "#eeeeee" },
    mb: {
        marginBottom: 20
    },
    tripType: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default Search
