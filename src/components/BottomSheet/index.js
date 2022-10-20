import React from 'react';
import { View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { colors } from '../../services';

const BottomSheet = React.forwardRef((props, ref) => {
    return (
        <View>
            <ActionSheet
                animated={props.animated}
                bounceOnOpen={true}
                elevation={10}
                statusBarTranslucent={false}
                indicatorColor={'#ccc'}
                closeOnPressBack={true}
                gestureEnabled={props.gestureEnabled}
                openAnimationSpeed={10}
                hideUnderlay={true}
                containerStyle={[
                    {
                        borderRadius: 16,
                        backgroundColor: props.bgColor ? props.bgColor : colors.white,
                    },
                ]}
                ref={ref}>
                <View
                    style={{
                        paddingBottom: 25,
                        paddingHorizontal: 20,
                        paddingTop: 15
                    }}>
                    {props.children}
                </View>
            </ActionSheet>
        </View>
    );
});

export default BottomSheet;
