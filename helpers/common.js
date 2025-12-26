import { Dimensions } from "react-native";


const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

/**

 * @param {number} percentage 
 * @returns {number}
 */
export const wp = percentage => {
    return (percentage * deviceWidth) / 100;
};

/**

 * @param {number} percentage 
 * @returns {number} 
 */
export const hp = percentage => {
    return (percentage * deviceHeight) / 100;
};