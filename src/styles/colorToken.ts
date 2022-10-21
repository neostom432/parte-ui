import { palette } from './theme';

/** RULES: color-tokens must be paired with background(css property) */
export const GENERAL = {
  SURFACE: {
    surfacePrimary: palette.white,
    surfaceSecondary: palette.gray10,
    surfaceTertiary: palette.gray20,
    surfaceModerate: palette.gray30,
    surfaceBold: palette.gray40,
    surfaceStrong: palette.gray60,
    surfaceContrast: palette.gray110,
    surfaceOverlay: 'rgba(28, 43, 54, 0.8)',
    surfaceLight: palette.white,
    surfaceDark: palette.gray110,
  },

  /** RULES: ELEVATION must be paired with box-shadow(css property) */
  ELEVATION: {
    elevation00: 'none',
    elevation01:
      '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    elevation02:
      '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
    elevation03:
      '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
    elevation04:
      '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2)',
    elevation05:
      '0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2)',
    elevation06:
      '0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12), 0px 7px 8px -4px rgba(0, 0, 0, 0.2)',
    elevation07:
      '0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)',
    elevation08:
      '0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 11px 15px -7px rgba(0, 0, 0, 0.2)',
  },
  BORDER: {
    borderMinimal: palette.gray20,
    borderSubtle: palette.gray30,
    borderModerate: palette.gray40,
    borderBold: palette.gray60,
    borderContrast: palette.gray90,
    borderLight: palette.white,
    borderDark: palette.gray110,
  },
  TEXT: {
    textPrimary: palette.gray90,
    textSecondary: palette.gray70,
    textTertiary: palette.gray40,
    textLink: palette.blue40,
    textDestructive: palette.red60,
    textReversed: palette.white,
    textLight: palette.white,
    textDark: palette.gray110,
  },
  ICON: {
    iconAction: palette.blue60,
    iconPrimary: palette.gray90,
    iconSecondary: palette.gray40,
    iconDestructive: palette.red60,
    iconContrast: palette.black,
    iconReversed: palette.white,
    iconLight: palette.white,
    iconDark: palette.gray110,
  },
};

export const GLOBAL = {
  SECTION: {
    gsBrand: '#7399C6',
    gsGlobalHeader: palette.blue90,
  },
};

export const STATUS = {
  SURFACE_BACKGROUND: {
    statusNoneBold: palette.gray60,
    statusInformationBold: palette.blue60,
    statusSuccessBold: palette.green60,
    statusErrorBold: palette.red60,
    statusWarningBold: palette.yellow30,
    statusNoneSubtle: palette.gray20,
    statusInformationSubtle: palette.blue20,
    statusSuccessSubtle: palette.green20,
    statusErrorSubtle: palette.red20,
    statusWarningSubtle: palette.yellow10,
  },
  TEXT: {
    statusNoneBoldText: palette.white,
    statusInformationBoldText: palette.white,
    statusSuccessBoldText: palette.white,
    statusErrorBoldText: palette.white,
    statusWarningBoldText: palette.gray110,
    statusNoneSubtleText: palette.gray70,
    statusInformationSubtleText: palette.blue70,
    statusSuccessSubtleText: palette.green70,
    statusErrorSubtleText: palette.red60,
    statusWarningSubtleText: palette.gray90,
  },
  ICON: {
    statusNoneBoldIcon: palette.white,
    statusInformationBoldIcon: palette.white,
    statusSuccessBoldIcon: palette.white,
    statusErrorBoldIcon: palette.white,
    statusWarningBoldIcon: palette.gray110,
    statusNoneSubtleIcon: palette.gray70,
    statusInformationSubtleIcon: palette.blue70,
    statusSuccessSubtleIcon: palette.green70,
    statusErrorSubtleIcon: palette.red60,
    statusWarningSubtleIcon: palette.orange50,
  },
  GENERAL: {
    statusNone: palette.gray60,
    statusInformation: palette.blue60,
    statusSuccess: palette.green60,
    statusError: palette.red60,
    statusWarning: palette.orange50,
  },
};

/** RULES: color-tokens must be paired with background(css property) */
export const STATES = {
  HOVER: {
    buttonPrimaryHover:
      'linear-gradient(0deg, rgba(14, 23, 31, 0.2), rgba(14, 23, 31, 0.2)), #186ADE',
    buttonSecondaryHover:
      'linear-gradient(0deg, rgba(14, 23, 31, 0.2), rgba(14, 23, 31, 0.2)), #DCE3E8',
    buttonTertiaryHover: 'rgba(159, 177, 189, 0.2)',
    buttonDestructiveHover:
      'linear-gradient(0deg, rgba(14, 23, 31, 0.2), rgba(14, 23, 31, 0.2)), #D91F11',
    buttonPrimaryMinimalHover: 'rgba(24, 106, 222, 0.1)',
    buttonSecondaryMinimalHover: 'rgba(159, 177, 189, 0.1)',
    buttonDestructiveMinimalHover: 'rgba(217, 31, 17, 0.1)',
    textLinkHover: palette.blue70,
    hoverMinimal: 'rgba(159, 177, 189, 0.1)',
    hoverSubtle: 'rgba(159, 177, 189, 0.4)',
    hoverBold: palette.gray80,
    borderMinimalHover: palette.gray30,
    borderSubtleHover: palette.gray40,
    borderModerateHover: palette.gray50,
    borderBoldHover: palette.gray70,
    borderContrastHover: palette.gray100,
  },
  ACTIVE: {
    buttonPrimaryActive:
      'linear-gradient(0deg, rgba(14, 23, 31, 0.2), rgba(14, 23, 31, 0.2)), #186ADE',
    buttonSecondaryActive:
      'linear-gradient(0deg, rgba(14, 23, 31, 0.2), rgba(14, 23, 31, 0.2)), #DCE3E8',
    buttonTertiaryActive: 'rgba(159, 177, 189, 0.2)',
    buttonDestructiveActive:
      'linear-gradient(0deg, rgba(14, 23, 31, 0.2), rgba(14, 23, 31, 0.2)), #D91F11',
    buttonPrimaryMinimalActive: 'rgba(24, 106, 222, 0.2)',
    buttonSecondaryMinimalActive: 'rgba(159, 177, 189, 0.2)',
    buttonDestructiveMinimalActive: 'rgba(217, 31, 17, 0.2)',
    activeMinimal: 'rgba(159, 177, 189, 0.2)',
    activeSubtle: 'rgba(159, 177, 189, 0.6)',
    activeBold: palette.gray90,
  },
  FOCUS: {
    backgroundFocus: 'rgba(159, 177, 189, 0.2)',
    borderFocus: palette.blue60,
  },
  SELECTED: {
    selectedMinimal: 'rgba(24, 106, 222, 0.2)',
    selectedSubtle: 'rgba(24, 106, 222, 0.4)',
    selectedBold: palette.blue60,
    selectedMinimalText: palette.blue70,
    selectedBoldText: palette.white,
  },
  DISABLED: {
    minimalDisabled: 'rgba(91, 114, 130, 0.2)',
    boldDisabled: 'rgba(91, 114, 130, 0.5)',
    strongDisabled: palette.gray20,
    textDisabled: 'rgba(91, 114, 130, 0.5)',
    borderDisabled: 'rgba(91, 114, 130, 0.4)',
  },
  VISITED: {
    textLinkVisited: palette.purple70,
  },
};
/** RULES: color-tokens must be paired with background(css property) */
export const COLOUR_RAMPS = {
  SURFACE: {
    grayRampBold: palette.gray60,
    redRampBold: palette.red60,
    orangeRampBold: palette.orange50,
    yellowRampBold: palette.yellow30,
    limeRampBold: palette.lime60,
    greenRampBold: palette.green60,
    tealRampBold: palette.teal60,
    turquoiseRampBold: palette.turquoise60,
    aquaRampBold: palette.aqua60,
    blueRampBold: palette.blue60,
    ultramarineRampBold: palette.ultramarine60,
    purpleRampBold: palette.purple60,
    pinkRampBold: palette.pink60,
    grayRampSubtle: palette.gray20,
    redRampSubtle: palette.red20,
    orangeRampSubtle: palette.orange20,
    yellowRampSubtle: palette.yellow10,
    limeRampSubtle: palette.lime20,
    greenRampSubtle: palette.green20,
    tealRampSubtle: palette.teal20,
    turquoiseRampSubtle: palette.turquoise20,
    aquaRampSubtle: palette.aqua20,
    blueRampSubtle: palette.blue20,
    ultramarineRampSubtle: palette.ultramarine20,
    purpleRampSubtle: palette.purple20,
    pinkRampSubtle: palette.pink20,
  },
  SECTION: {
    grayRampBoldText: palette.white,
    redRampBoldText: palette.white,
    orangeRampBoldText: palette.white,
    yellowRampBoldText: palette.gray110,
    limeRampBoldText: palette.white,
    greenRampBoldText: palette.white,
    tealRampBoldText: palette.white,
    turquoiseRampBoldText: palette.white,
    aquaRampBoldText: palette.white,
    blueRampBoldText: palette.white,
    ultramarineRampBoldText: palette.white,
    purpleRampBoldText: palette.white,
    pinkRampBoldText: palette.white,
    grayRampSubtleText: palette.gray70,
    redRampSubtleText: palette.red60,
    orangeRampSubtleText: palette.orange60,
    yellowRampSubtleText: palette.gray90,
    limeRampSubtleText: palette.lime70,
    greenRampSubtleText: palette.green70,
    tealRampSubtleText: palette.teal70,
    turquoiseRampSubtleText: palette.turquoise70,
    aquaRampSubtleText: palette.aqua70,
    blueRampSubtleText: palette.blue70,
    ultramarineRampSubtleText: palette.ultramarine70,
    purpleRampSubtleText: palette.purple70,
    pinkRampSubtleText: palette.pink70,
  },
};
/** RULES: color-tokens must be paired with background(css property) */
export const BUTTON = {
  SURFACE: {
    buttonPrimary: palette.blue60,
    buttonSecondary: palette.gray20,
    buttonTertiary: '#ffffff00',
    buttonDestructive: palette.red60,
    buttonPrimaryMinimal: '#ffffff00',
    buttonSecondaryMinimal: '#ffffff00',
    buttonDestructiveMinimal: '#ffffff00',
  },
  TEXT: {
    buttonPrimaryText: palette.white,
    buttonSecondaryText: palette.gray90,
    buttonTertiaryText: palette.gray90,
    buttonDestructiveText: palette.white,
    buttonPrimaryMinimalText: palette.blue60,
    buttonSecondaryMinimalText: palette.gray90,
    buttonDestructiveMinimalText: palette.gray90,
  },
  ICON: {
    buttonPrimaryIcon: palette.white,
    buttonSecondaryIcon: palette.gray90,
    buttonTertiaryIcon: palette.gray90,
    buttonDestructiveIcon: palette.white,
    buttonPrimaryMinimalIcon: palette.blue60,
    buttonSecondaryMinimalIcon: palette.gray90,
    buttonDestructiveMinimalIcon: palette.red60,
  },
};
/** RULES: color-tokens must be paired with background(css property) */
export const FORM = {
  SURFACE: {
    inputBackground: palette.white,
    clearbutton: palette.gray40,
    clearbuttonHover: palette.gray50,
    clearbuttonActive: palette.gray60,
  },
  BORDER: {
    inputBorder: palette.gray40,
    inputBorderHover: palette.gray50,
  },
};
/** RULES: color-tokens must be paired with background(css property) */
export const SWITCH = {
  SURFACE: {
    switchBoldSelected: palette.blue60,
    switchSubtleSelected: palette.blue30,
    switchSelectedDisabled: palette.blue20,
  },
};
/** RULES: color-tokens must be paired with background(css property) */
export const TAG = {
  SURFACE: {
    tagMinimal: '#ffffff00',
    tagSubtle: palette.blue20,
    tagBold: palette.blue60,
  },
  TEXT: {
    tagTextMinimal: palette.gray70,
    tagTextSubtle: palette.blue70,
    tagTextBold: palette.white,
  },
};
/** RULES: color-tokens must be paired with background(css property) */
export const GRIDS = {
  GENERAL: {
    headerDefault: palette.gray10,
    rowDefault: palette.white,
    rowAlternative: palette.gray10,
    sectionMinimal: palette.gray20,
    sectionBold: palette.gray60,
    sectionContrast: palette.gray80,
    borderMinimal: palette.gray20,
    borderModerate: palette.gray40,
    borderBold: palette.gray60,
    borderContrast: palette.gray90,
    borderColumnSubtle: '#9fb1bd99',
    borderColumnBold: '#1c2b3666',
  },
  TRADING: {
    bidDefault: palette.blue30,
    bidDepth1: palette.blue20,
    bidDepth2: palette.blue10,
    askDefault: palette.red30,
    askDepth1: palette.red20,
    askDepth2: palette.red10,
    borderBidDefault: palette.blue20,
    borderBidDepth1: palette.blue30,
    borderBidDepth2: palette.blue20,
    borderAskDefault: palette.red20,
    borderAskDepth1: palette.red30,
    borderAskDepth2: palette.red20,
  },
  STATUS: {
    cellWarningDefault: palette.yellow10,
    cellWarningDepth1: palette.yellow20,
    cellErrorDefault: palette.red20,
    cellErrorDepth1: palette.red30,
    cellSuccessDefault: palette.green10,
    cellSuccessDepth1: palette.green20,
    borderCellWarning: palette.yellow40,
    borderCellError: palette.red60,
    borderCellSuccess: palette.green60,
  },
  HOVER: {
    rowDefaultHover:
      'linear-gradient(0deg, rgba(159, 177, 189, 0.2), rgba(159, 177, 189, 0.2)), #FFFFFF',
    rowAlternativeHover:
      'linear-gradient(0deg, rgba(159, 177, 189, 0.2), rgba(159, 177, 189, 0.2)), #F2F5F7',
    rowSelectedHover:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.1), rgba(24, 106, 222, 0.1)), rgba(24, 106, 222, 0.2)',
    rowHeaderHover:
      'linear-gradient(0deg, rgba(159, 177, 189, 0.2), rgba(159, 177, 189, 0.2)), #F2F5F7',
    rowHeaderSelectedHover:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.2), rgba(24, 106, 222, 0.2)), linear-gradient(0deg, rgba(24, 106, 222, 0.2), rgba(24, 106, 222, 0.2)), #F2F5F7',
    bidRowHover:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.2), rgba(24, 106, 222, 0.2)), #ADCCF7',
    bidCellHover: palette.blue60,
    askRowHover:
      'linear-gradient(0deg, rgba(217, 31, 17, 0.2), rgba(217, 31, 17, 0.2)), #FABBB4',
    askCellHover: palette.red60,
    rangeDefaultSelectedHover:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.1), rgba(24, 106, 222, 0.1)), rgba(24, 106, 222, 0.1)',
    borderBidRowHover:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.2), rgba(24, 106, 222, 0.2)), #ADCCF7',
    borderBidCellHover: palette.blue60,
    borderAskRowHover:
      'linear-gradient(0deg, rgba(217, 31, 17, 0.2), rgba(217, 31, 17, 0.2)), #FABBB4',
    borderAskCellHover: palette.red60,
  },
  SELECTED: {
    rowDefaultSelected:
      ' linear-gradient(0deg, rgba(24, 106, 222, 0.2), rgba(24, 106, 222, 0.2)), #FFFFFF',
    rowAlternativeSelected:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.2), rgba(24, 106, 222, 0.2)), #F2F5F7',
    rangeRowDefaultSelected:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.1), rgba(24, 106, 222, 0.1)), #FFFFFF',
    rangeAlternativeSelected:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.1), rgba(24, 106, 222, 0.1)), #F2F5F7',
    rangeSelectedRowSelected:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.1), rgba(24, 106, 222, 0.1)), #D4E4FA',
    rowHeaderSelected:
      'linear-gradient(0deg, rgba(24, 106, 222, 0.2), rgba(24, 106, 222, 0.2)), #F2F5F7',
    borderRangeSelected: palette.blue30,
    borderSelected: palette.blue40,
  },
  FOCUS: {
    borderCellFocus: palette.blue60,
  },
};
