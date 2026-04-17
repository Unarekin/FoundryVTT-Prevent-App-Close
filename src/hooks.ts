import { SETTINGS } from "settings";
import { ApplicationMixin } from "./applications";


function applyMixin(typeName: keyof CONFIG, settingName: string) {
  const collection = ((CONFIG[typeName] as Record<string, unknown>)?.sheetClasses as Record<string, unknown>)?.base as Record<string, any> | undefined;
  if (!collection) return console.warn(`Unknown document type: ${typeName}`);

  const entries = Object.entries(collection);
  for (const [key, { cls }] of entries) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment
    collection[key].cls = ApplicationMixin(cls, settingName);
  }
}


Hooks.once("ready", () => {
  applyMixin("AmbientLight", SETTINGS.preventAmbientLightClose);
  applyMixin("AmbientSound", SETTINGS.preventAmbientSoundClose);
  applyMixin("Drawing", SETTINGS.preventDrawingClose);
  applyMixin("Item", SETTINGS.preventItemClose);
  applyMixin("Macro", SETTINGS.preventMacroClose);
  applyMixin("Note", SETTINGS.preventNoteClose);
  applyMixin("Playlist", SETTINGS.preventPlaylistClose);
  applyMixin("PlaylistSound", SETTINGS.preventPlaylistClose);
  applyMixin("Scene", SETTINGS.preventSceneClose);
  applyMixin("Tile", SETTINGS.preventTileClose);
  applyMixin("Token", SETTINGS.preventTokenClose);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
  CONFIG.Token.prototypeSheetClass = ApplicationMixin(CONFIG.Token.prototypeSheetClass as any, SETTINGS.preventTokenClose);
})