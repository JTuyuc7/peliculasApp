import ImageColors from "react-native-image-colors";

const getImageColors = async (url: string) => {

    const colors = await ImageColors.getColors(url, {});

    let primary;
    let secondary;

    if(colors.platform === 'android'){
        primary = colors.dominant;
        secondary = colors.average
    }else if( colors.platform === 'ios'){
        primary = colors.primary;
        secondary = colors.secondary
    }

    return [ primary, secondary ];
}

export default getImageColors;