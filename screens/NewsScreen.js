import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { CompanyCard } from '../components/CompanyCard';
import { NewsCard } from '../components/NewsCard';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AdComponent } from '../components/AdComponent';

export default function NewsScreen({ route, navigation }) {
    let [loading, setLoading] = useState(true);
    let [articles, setArticles] = useState([]);
    let { link } = route.params;

    // async function setId() {
    //     await setTestDeviceIDAsync('000303be-d19c-4ca0-9d75-7094a90cb9e8');
    //     await setTestDeviceIDAsync('EMULATOR');
    // }

    useEffect(async () => {
        try {
            // setId();
            console.log(link);
            const response = await fetch(link);
            const data = await response.json();
            console.log(data);
            // console.log(data.articles[0]);
            if (data.articles) {
                const data1 = data.articles;
                setArticles(data1);
                return setLoading(false);
            }
            setArticles(data);
            setLoading(false);

            // console.log(articles);
        } catch (error) {
            Alert.alert(
                'Error',
                'Reba ko internet ikora, wongere ufungure application',
                [{ text: 'OK', style: 'cancel' }]
            );
            setLoading(false);
            return console.warn(error);
        }
    }, []);

    while (loading == true) {
        return (
            <View>
                <ActivityIndicator size='large' color='#00ff00' />
            </View>
        );
    }
    return (
        <ScrollView>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    paddingTop: 5,
                }}
            >
                {companies.map((company, index) => (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        key={index}
                        onPress={() =>
                            navigation.push('News', {
                                link: company.link,
                                name: company.name,
                            })
                        }
                    >
                        <CompanyCard
                            image={company.image}
                            text={company.name}
                        />
                    </TouchableOpacity>
                ))}
                <CompanyCard
                    image={require('../assets/images/hourglass.png')}
                    text={'Coming soon'}
                />
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false}>
                {articles.map((article, index) => {
                    if (index % 10 === 0)
                        return (
                            <View>
                                <AdComponent />
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    key={index}
                                    onPress={() =>
                                        WebBrowser.openBrowserAsync(
                                            article.link
                                        )
                                    }
                                >
                                    <NewsCard
                                        image={article.picture}
                                        text={article.title}
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    return (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            key={index}
                            onPress={() =>
                                WebBrowser.openBrowserAsync(article.link)
                            }
                        >
                            <NewsCard
                                image={article.picture}
                                text={article.title}
                            />
                        </TouchableOpacity>
                    );
                })}

                <AdComponent />
            </ScrollView>
        </ScrollView>
    );
}

NewsScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

const companies = [
    {
        image: require('../assets/images/igiheLogo.jpg'),
        name: 'igihe',
        link: 'http://rwandanewsapi.herokuapp.com/igihe',
    },
    {
        image: require('../assets/images/rwanda-flag-xs.png'),
        name: 'Rwanda',
        link:
            'http://newsapi.org/v2/everything?q=rwanda&apiKey=3e40a7525d87444cb9aee19ef794b038',
    },
];
