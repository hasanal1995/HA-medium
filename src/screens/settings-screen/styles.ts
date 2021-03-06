import { StyleSheet } from 'react-native';
import {
    color,
    responsiveFontSize
} from 'theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.offWhite
    },
    footerTxt: {
        marginVertical: 16,
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

/**
 * export as default.
 */
export default styles;