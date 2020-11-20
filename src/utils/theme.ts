import { DefaultTheme } from "styled-components";
import { Dimensions } from "react-native";

// 스크린 크기에 대응하기 위한 반응형 길이를 지정해 놓습니다.
const dimensions = {
  width: `${Dimensions.get("window").width}`,
  height: `${Dimensions.get("window").height}`,
  px: Number(Dimensions.get("window").width) / 380,
};
// calculate Px 각 화면 별 픽셀을 대응해주는 함수입니다.
const calcPx = (size: number) => `${dimensions.px * size}`;
// 폰트!
const FONT_FAMILY = "Montserrat";
// store에 themeColor 여기로 불러와서 적용
// export const THEME_COLOR = {
//   background: "white",
//   pointColorDark: "#FB5E9D",
//   pointColorLight: "#F8C694"
// };
// export const THEME_COLOR = {
//   background: "white",
//   pointColorDark: "#F1A6CD",
//   pointColorLight: "#EFE59E"
// };
// export const THEME_COLOR = {
//   background: "white",
//   pointColorDark: "#8C2373",
//   pointColorLight: "#EEB736"
// };
export const THEME_COLOR = {
  background: "white",
  pointColorDark: "#92A8D1",
  pointColorLight: "#F7CAC9",
};
// export const THEME_COLOR = {
//   background: "white",
//   pointColorDark: "#Ba2a29",
//   pointColorLight: "#f2c763"
// };
export const WHITE_TO_BLACK = {
  black: "#030303",
  extraDarkGray: "#383838",
  mediumGray: "#898989",
  lightGray: "#d8d8d8",
  extraLightGray: "#eaeaea",
  white: "#fff",
};
export const HIT_SLOP = { top: 20, right: 20, bottom: 20, left: 20 };
export const PADDING_WIDTH = {
  wide: Number(calcPx(15)),
};
export const MODAL = {
  buttonVerticalHeight: 50,
  paddingSize: 5,
};
export const MARGIN_HEIGHT = {
  extraWide: Number(calcPx(30)),
  wide: Number(calcPx(24)),
  medium: Number(calcPx(18)),
  narrow: Number(calcPx(12)),
  thin: Number(calcPx(9)),
  extraThin: Number(calcPx(5)),
};
export const MEMBER_TAG = {
  height: 21,
  padding: 8,
  marginSmall: 5,
  marginLarge: 30,
  borderRadius: 7,
};
///  ------------------ theme 시작! ----------------------------------
const theme: DefaultTheme = {
  ///  ------------------ 길이 ----------------------------------
  dimensions: {
    width: Number(Dimensions.get("window").width),
    height: Number(Dimensions.get("window").height),
    px: Number(Dimensions.get("window").width) / 380,
  },
  lengths: {
    bottomBar: Number(calcPx(75)),
    header: Number(calcPx(60)),
    lineWidthThin: Number(calcPx(0.6)),
  },
  ///  ------------------ 색 ----------------------------------
  whiteToBlack: {
    black: WHITE_TO_BLACK.black,
    extraDarkGray: WHITE_TO_BLACK.extraDarkGray,
    mediumGray: WHITE_TO_BLACK.mediumGray,
    lightGray: WHITE_TO_BLACK.lightGray,
    extraLightGray: WHITE_TO_BLACK.extraLightGray,
    white: WHITE_TO_BLACK.white,
  },
  themeColor: {
    background: THEME_COLOR.background,
    pointColorDark: THEME_COLOR.pointColorDark,
    pointColorLight: THEME_COLOR.pointColorLight,
  },
  ///  ------------------ 아이콘 사이즈 ----------------------------------
  iconSize: {
    headerIcons: {
      width: `${Number(calcPx(21.5))}px`,
      height: `${Number(calcPx(15))}px`,
    },
    counterIcons: {
      width: `${Number(calcPx(15))}px`,
      height: `${Number(calcPx(11))}px`,
    },
    categoryIcons: {
      width: `${Number(calcPx(20))}px`,
      height: `${Number(calcPx(20))}px`,
    },
  },
  ///  ------------------ 스크린 디폴트 세팅, 컴포넌트 패딩 세팅 ------------------
  screenContainer: {
    backgroundColor: THEME_COLOR.background,
    width: "100%",
    height: "100%",
  },
  paddingWidth: {
    wideLeftRight: {
      paddingLeft: `${PADDING_WIDTH.wide}px`,
      paddingRight: `${PADDING_WIDTH.wide}px`,
    },
  },
  marginWidth: {
    wideLeftRight: {
      marginLeft: `${PADDING_WIDTH.wide}px`,
      marginRight: `${PADDING_WIDTH.wide}px`,
    },
  },
  marginHeight: {
    extraWide: MARGIN_HEIGHT.extraWide,
    wide: MARGIN_HEIGHT.wide,
    medium: MARGIN_HEIGHT.medium,
    narrow: MARGIN_HEIGHT.narrow,
    thin: MARGIN_HEIGHT.thin,
    extraThin: MARGIN_HEIGHT.extraThin,
  },
  ///  ------------------ 멤버 태그! ----------------------------
  memberTag: {
    tag: {
      untouchable: {
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: `${Number(calcPx(1))}px`,
        borderColor: THEME_COLOR.pointColorLight,
        borderRadius: `${Number(calcPx(MEMBER_TAG.borderRadius))}px`,
        backgroundColor: THEME_COLOR.pointColorLight,
        height: `${Number(calcPx(MEMBER_TAG.height))}px`,
        justifyContent: "center",
        alignItems: "center",
        padding: `0 ${Number(calcPx(MEMBER_TAG.padding))}px`,
      },
      touchable: {
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: `${Number(calcPx(1))}px`,
        borderColor: WHITE_TO_BLACK.mediumGray,
        borderRadius: `${Number(calcPx(MEMBER_TAG.borderRadius))}px`,
        backgroundColor: WHITE_TO_BLACK.white,
        height: `${Number(calcPx(MEMBER_TAG.height))}px`,
        justifyContent: "center",
        alignItems: "center",
        padding: `0 ${Number(calcPx(MEMBER_TAG.padding))}px`,
      },
    },
    margin: {
      untouchable: {
        marginRight: `${Number(calcPx(MEMBER_TAG.marginSmall))}px`,
        marginBottom: `${Number(calcPx(MEMBER_TAG.marginSmall))}px`,
      },
      touchable: {
        marginRight: `${Number(calcPx(MEMBER_TAG.marginLarge))}px`,
        marginBottom: `${Number(calcPx(MEMBER_TAG.marginLarge))}px`,
      },
    },
  },
  ///  ------------------ 모달 MODAL modal ----------------------------------
  // GoodsUploadModa 모달 컴포넌트에 준 속성
  //       isVisible={isModalVisible}
  //       onBackdropPress={() => setModalVisible(false)}
  //       onModalHide={() => 모달 닫은 후 실행할 함수}
  //       animationIn="fadeInLeft"
  //       animationInTiming={400}
  //       backdropTransitionInTiming={400}
  //       animationOut="fadeOutLeft"
  //       animationOutTiming={300}
  //       backdropTransitionOutTiming={300}
  //       backdropOpacity={0.1}
  modal: {
    padding: {
      small: `${Number(calcPx(MODAL.paddingSize))}px`,
    },
    container: {
      // position하고 flex-direction은 type이 string이 아닌 모양..
      selectionContainer: {
        width: `${Number(calcPx(200))}px`,
        right: 0,
        backgroundColor: "white",
        position: "absolute",
      },
    },
    header: {
      padding: `${Number(calcPx(MODAL.paddingSize))}px`,
      height: `${Number(calcPx(MODAL.buttonVerticalHeight + 10))}px`,
      justifyContent: "center",
    },
    button: {
      vertical: {
        height: `${Number(calcPx(MODAL.buttonVerticalHeight))}px`,
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: `${Number(calcPx(1))}px`,
        borderStyle: "solid",
        borderColor: WHITE_TO_BLACK.extraLightGray,
        padding: `${Number(calcPx(MODAL.paddingSize))}px`,
      },
    },
  },
  ///  ------------------ 폰트 ----------------------------------
  fonts: {
    header: {
      fontFamily: `${FONT_FAMILY}-SemiBold`,
      fontSize: `${Number(calcPx(15))}px`,
      fontWeight: 600,
    },
    footer: {
      fontFamily: `${FONT_FAMILY}-Medium`,
      fontSize: `${Number(calcPx(12))}px`,
      fontWeight: 500,
      color: WHITE_TO_BLACK.mediumGray,
      lineHeight: `${Number(calcPx(18))}px`,
    },
    content: {
      medium14: {
        fontFamily: `${FONT_FAMILY}-Medium`,
        fontSize: `${Number(calcPx(14))}px`,
        fontWeight: 500,
        lineHeight: `${Number(calcPx(21.5))}px`,
      },
      medium13: {
        fontFamily: `${FONT_FAMILY}-Medium`,
        fontSize: `${Number(calcPx(13))}px`,
        fontWeight: 500,
        lineHeight: `${Number(calcPx(21.5))}px`,
      },
    },
    modal: {
      title: {
        fontFamily: `${FONT_FAMILY}-SemiBold`,
        fontSize: `${Number(calcPx(16))}px`,
        fontWeight: 600,
      },
      button: {
        fontFamily: `${FONT_FAMILY}-Medium`,
        fontSize: `${Number(calcPx(15))}px`,
        fontWeight: 500,
      },
    },
    title: {
      bold16: {
        fontFamily: `${FONT_FAMILY}-Bold`,
        fontSize: `${Number(calcPx(16))}px`,
        fontWeight: 700,
      },
      semiBold17: {
        fontFamily: `${FONT_FAMILY}-SemiBold`,
        fontSize: `${Number(calcPx(17))}px`,
        fontWeight: 600,
      },
      medium15: {
        fontFamily: `${FONT_FAMILY}-Medium`,
        fontSize: `${Number(calcPx(15))}px`,
        fontWeight: 500,
      },
    },
    counter: {
      fontFamily: `${FONT_FAMILY}-Medium`,
      fontSize: `${Number(calcPx(12))}px`,
      fontWeight: 500,
      color: WHITE_TO_BLACK.mediumGray,
    },
    price: {
      large: {
        price: {
          fontFamily: `${FONT_FAMILY}-Bold`,
          fontSize: `${Number(calcPx(25))}px`,
          fontWeight: 700,
          lineHeight: `${Number(calcPx(30))}px`,
        },
        monetaryUnit: {
          fontFamily: `${FONT_FAMILY}-SemiBold`,
          fontSize: `${Number(calcPx(17))}px`,
          fontWeight: 600,
          lineHeight: `${Number(calcPx(30))}px`,
        },
      },
      small: {
        price: {
          fontFamily: `${FONT_FAMILY}-Bold`,
          fontSize: `${Number(calcPx(18))}px`,
          fontWeight: 700,
          lineHeight: `${Number(calcPx(22))}px`,
        },
        monetaryUnit: {
          fontFamily: `${FONT_FAMILY}-SemiBold`,
          fontSize: `${Number(calcPx(13))}px`,
          fontWeight: 600,
          lineHeight: `${Number(calcPx(22))}px`,
        },
      },
    },
    idolName: {
      medium: {
        fontFamily: `${FONT_FAMILY}-Medium`,
        fontSize: `${Number(calcPx(17))}px`,
        fontWeight: 500,
        lineHeight: `${Number(calcPx(22))}px`,
      },
    },
    tag: {
      untouchable: {
        fontFamily: `${FONT_FAMILY}-SemiBold`,
        fontSize: `${Number(calcPx(12))}px`,
        fontWeight: 600,
        color: WHITE_TO_BLACK.white,
      },
      touchable: {
        fontFamily: `${FONT_FAMILY}-SemiBold`,
        fontSize: `${Number(calcPx(12))}px`,
        fontWeight: 600,
        color: WHITE_TO_BLACK.black,
      },
    },
  },
  repeated: {
    goodsUploadTouchable: {
      minHeight: `${Number(calcPx(30))}px`,
      paddingRight: `${PADDING_WIDTH.wide}px`,
      paddingLeft: `${PADDING_WIDTH.wide}px`,
      flexDirection: "row",
      alignItems: "center",
    },
    goodsUploadMarginBetweenCircleAndText: `${Number(calcPx(15))}px`,
  },
};

export default theme;
