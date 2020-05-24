import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import Search from "./Search"
import Results from "./Results"

const Main = () => {
    const [searchTerms, setSearchTerms] = useState({
        isReturn: true,
        origin: "AKL",
        destination: "CHC",
        departDate: "2020-04-14",
        returnDate: "2020-04-16",
        passengers: 1,
        maxPrice: 1000
    })

    return (
        <View>
            <Search searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
            <Results searchTerms={searchTerms} />
        </View>
    )
}

export default Main
