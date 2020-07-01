import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';
import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

export function AdComponent() {
    setTestDeviceIDAsync('EMULATOR');
    const height = Dimensions.get('window').height;
    let banner = 'Banner';
    if (height > 2436) {
        banner = 'largeBanner';
    }
    return (
        <View>
            <AdMobBanner
                bannerSize={banner}
                adUnitID={
                    Platform.OS === 'android'
                        ? 'ca-app-pub-5571590294786710/4928828902'
                        : 'ca-app-pub-5571590294786710/6788705489'
                }
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={(error) => console.log(error)}
            />
        </View>
    );
}

const View = styled.View`
    padding: 0 0 5px 20px;
`;
