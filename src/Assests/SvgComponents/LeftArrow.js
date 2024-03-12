import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LeftArrow = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path d="m10.828 12 4.95 4.95-1.414 1.415L8 12l6.364-6.364 1.414 1.414-4.95 4.95Z" />
    </Svg>
)
export default LeftArrow;
