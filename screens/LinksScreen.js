import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            <OptionButton
                icon='md-globe'
                label='Soma Igihe'
                onPress={() => WebBrowser.openBrowserAsync('https://igihe.com')}
            />

            <OptionButton
                icon='md-globe'
                label='Soma New Times Rwanda'
                onPress={() =>
                    WebBrowser.openBrowserAsync('https://www.newtimes.co.rw/')
                }
            />

            <OptionButton
                icon='logo-twitter'
                label='Dukurikire kuri Twitter'
                onPress={() =>
                    WebBrowser.openBrowserAsync('https://twitter.com/vsifiwe')
                }
            />
            <OptionButton
                icon='logo-instagram'
                label='Dukurikire kuri Instagram'
                onPress={() =>
                    WebBrowser.openBrowserAsync('https://instagram.com/vsifiwe')
                }
            />
            <OptionButton
                icon='md-mail-unread'
                label='Twandikire ubutumwa dukorane'
                onPress={() =>
                    WebBrowser.openBrowserAsync('mailto:vsifiwe@gmail.com')
                }
                isLastOption
            />
        </ScrollView>
    );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
    return (
        <RectButton
            style={[styles.option, isLastOption && styles.lastOption]}
            onPress={onPress}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                    <Ionicons
                        name={icon}
                        size={22}
                        color='rgba(30,139,195,1)'
                    />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>{label}</Text>
                </View>
            </View>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
});
