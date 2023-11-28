import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

export const IconEye = (props: any) => {
    return (
      <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" {...props}>
        <G clipPath="url(#clip0_1_44831)">
          <Path
            d="M6.59935 3.32701C7.05824 3.2196 7.52806 3.1659 7.99935 3.16701C12.666 3.16701 15.3327 8.50034 15.3327 8.50034C14.928 9.25741 14.4454 9.97017 13.8927 10.627M9.41268 9.91368C9.22958 10.1102 9.00878 10.2678 8.76345 10.3771C8.51812 10.4864 8.25328 10.5452 7.98474 10.5499C7.7162 10.5547 7.44946 10.5053 7.20042 10.4047C6.95139 10.3041 6.72516 10.1544 6.53525 9.96444C6.34533 9.77453 6.19561 9.5483 6.09502 9.29927C5.99443 9.05023 5.94503 8.78349 5.94977 8.51495C5.95451 8.24641 6.01329 7.98157 6.1226 7.73624C6.23191 7.49091 6.38952 7.27011 6.58602 7.08701M11.9593 12.4603C10.8197 13.329 9.43209 13.8103 7.99935 13.8337C3.33268 13.8337 0.666016 8.50034 0.666016 8.50034C1.49528 6.95494 2.64544 5.60475 4.03935 4.54034L11.9593 12.4603Z"
            stroke="#ADB1B9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M0.666016 1.16699L15.3327 15.8337"
            stroke="#ADB1B9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_44831">
            <Rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  };

  export const IconEyeOpen = (props: any) => {
    return (
      <Svg
        width={17}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G id="vuesax/linear/eye">
          <G id="eye">
            <Path
              id="Vector"
              d="M15.5819 12C15.5819 13.98 13.9819 15.58 12.0019 15.58C10.0219 15.58 8.42188 13.98 8.42188 12C8.42188 10.02 10.0219 8.42001 12.0019 8.42001C13.9819 8.42001 15.5819 10.02 15.5819 12Z"
              stroke="#505F79"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              id="Vector_2"
              d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z"
              stroke="#505F79"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
        </G>
      </Svg>
    );
  };
  