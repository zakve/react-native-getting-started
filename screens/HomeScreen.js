import React, { Fragment, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button } from 'react-native';

const HomeScreen = props => {
    const [outputText, setOutputText] = useState('You can change this text and then come back to see your edits.')

    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>

                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Hello World</Text>
                        <Text style={styles.sectionDescription}>
                            {outputText}
                        </Text>
                        <Button title="Change text above!" onPress={() => { setOutputText('Text changed!') }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default HomeScreen;