import type { AliasTokenKey } from "../../utils/type";

const brandColors: AliasTokenKey[] = [
  "colorPrimary",
  "colorPrimaryBg",
  "colorPrimaryBgHover",
  "colorPrimaryBorder",
  "colorPrimaryBorderHover",
  "colorPrimaryHover",
  "colorPrimaryActive",
  "colorPrimaryTextHover",
  "colorPrimaryText",
  "colorPrimaryTextActive",
];

const successColors: AliasTokenKey[] = [
  "colorSuccess",
  "colorSuccessBg",
  "colorSuccessBgHover",
  "colorSuccessBorder",
  "colorSuccessBorderHover",
  "colorSuccessHover",
  "colorSuccessActive",
  "colorSuccessTextHover",
  "colorSuccessText",
  "colorSuccessTextActive",
];

const warningColors: AliasTokenKey[] = [
  "colorWarning",
  "colorWarningBg",
  "colorWarningBgHover",
  "colorWarningBorder",
  "colorWarningBorderHover",
  "colorWarningHover",
  "colorWarningActive",
  "colorWarningTextHover",
  "colorWarningText",
  "colorWarningTextActive",
];

const errorColors: AliasTokenKey[] = [
  "colorError",
  "colorErrorBg",
  "colorErrorBgHover",
  "colorErrorBorder",
  "colorErrorBorderHover",
  "colorErrorHover",
  "colorErrorActive",
  "colorErrorTextHover",
  "colorErrorText",
  "colorErrorTextActive",
];

const infoColors: AliasTokenKey[] = [
  "colorInfo",
  "colorInfoBg",
  "colorInfoBgHover",
  "colorInfoBorder",
  "colorInfoBorderHover",
  "colorInfoHover",
  "colorInfoActive",
  "colorInfoTextHover",
  "colorInfoText",
  "colorInfoTextActive",
];

export const functionalColors: AliasTokenKey[] = [
  ...brandColors,
  ...successColors,
  ...warningColors,
  ...errorColors,
  ...infoColors,
];
