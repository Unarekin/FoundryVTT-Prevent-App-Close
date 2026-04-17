declare module '*.scss';

declare global {
  declare const __DEV__: boolean;
  declare const __MODULE_TITLE__: string;
  // declare const __MODULE_ID__: string;
  const __MODULE_ID__ = "prevent-app-close";
  declare const __MODULE_VERSION__: string;

}

declare module "fvtt-types/configuration" {

  interface SettingConfig {
    "prevent-app-close.preventAmbientLightClose": boolean;
    "prevent-app-close.preventAmbientSoundClose": boolean;
    "prevent-app-close.preventDrawingClose": boolean;
    "prevent-app-close.preventItemClose": boolean;
    "prevent-app-close.preventMacroClose": boolean;
    "prevent-app-close.preventNoteClose": boolean;
    "prevent-app-close.preventPlaylistClose": boolean;
    "prevent-app-close.preventPlaylistSoundClose": boolean;
    "prevent-app-close.preventSceneClose": boolean;
    "prevent-app-close.preventTileClose": boolean;
    "prevent-app-close.preventToken": boolean
  }

}