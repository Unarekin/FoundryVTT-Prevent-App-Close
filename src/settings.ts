import { updateApps } from "./functions";

export const SETTINGS = Object.freeze({
  preventItemClose: "preventItemClose",
  preventMacroClose: "preventMacroClose",
  preventSceneClose: "preventSceneClose",
  preventPlaylistClose: "preventPlaylistClose",
  preventTokenClose: "preventTokenClose",
  preventTileClose: "preventTileClose",
  preventAmbientLightClose: "preventAmbientLightClose",
  preventAmbientSoundClose: "preventAmbientSoundClose"
})

Hooks.once("ready", () => {
  if (!game.settings) return;

  game.settings.register(__MODULE_ID__, SETTINGS.preventAmbientLightClose, {
    name: "PREVENTAPPCLOSE.SETTINGS.PREVENTLIGHT.LABEL",
    hint: "PREVENTAPPCLOSE.SETTINGS.PREVENTLIGHT.HINT",
    type: Boolean,
    scope: "user",
    config: true,
    requiresReload: false,
    default: false,
    onChange() { updateApps(); }
  });

  game.settings.register(__MODULE_ID__, SETTINGS.preventAmbientSoundClose, {
    name: "PREVENTAPPCLOSE.SETTINGS.PREVENTSOUND.LABEL",
    hint: "PREVENTAPPCLOSE.SETTINGS.PREVETNSOUND.HINT",
    type: Boolean,
    scope: "user",
    config: true,
    requiresReload: false,
    default: false,
    onChange() { updateApps(); }
  });

  game.settings.register(__MODULE_ID__, SETTINGS.preventItemClose, {
    name: "PREVENTAPPCLOSE.SETTINGS.PREVENTITEM.LABEL",
    hint: "PREVENTAPPCLOSE.SETTINGS.PREVENTITEM.HINT",
    type: Boolean,
    scope: "user",
    config: true,
    requiresReload: false,
    default: false,
    onChange() { updateApps(); }
  });

  game.settings.register(__MODULE_ID__, SETTINGS.preventMacroClose, {
    name: "PREVENTAPPCLOSE.SETTINGS.PREVENTMACRO.LABEL",
    hint: "PREVENTAPPCLOSE.SETTINGS.PREVENTMACRO.HINT",
    type: Boolean,
    scope: "user",
    config: true,
    requiresReload: false,
    default: false,
    onChange() { updateApps(); }
  });

  game.settings.register(__MODULE_ID__, SETTINGS.preventPlaylistClose, {
    name: "PREVENTAPPCLOSE.SETTINGS.PREVENTPLAYLIST.LABEL",
    hint: "PREVENTAPPCLOSE.SETTINGS.PREVENTPLAYLIST.HINT",
    type: Boolean,
    scope: "user",
    config: true,
    requiresReload: false,
    default: false,
    onChange() { updateApps(); }
  });

  game.settings.register(__MODULE_ID__, SETTINGS.preventSceneClose, {
    name: "PREVENTAPPCLOSE.SETTINGS.PREVENTSCENE.LABEL",
    hint: "PREVENTAPPCLOSE.SETTINGS.PREVENTSCENE.HINT",
    type: Boolean,
    scope: "user",
    config: true,
    requiresReload: false,
    default: false,
    onChange() { updateApps(); }
  })


  game.settings.register(__MODULE_ID__, SETTINGS.preventTileClose, {
    name: "PREVENTAPPCLOSE.SETTINGS.PREVENTTILE.LABEL",
    hint: "PREVENTAPPCLOSE.SETTINGS.PREVENTTILE.HINT",
    type: Boolean,
    scope: "user",
    config: true,
    requiresReload: false,
    default: false,
    onChange() { updateApps(); }
  });

  game.settings.register(__MODULE_ID__, SETTINGS.preventTokenClose, {
    name: "PREVENTAPPCLOSE.SETTINGS.PREVENTTOKEN.LABEL",
    hint: "PREVENTAPPCLOSE.SETTINGS.PREVENTTOKEN.HINT",
    type: Boolean,
    scope: "user",
    config: true,
    requiresReload: false,
    default: false,
    onChange() { updateApps(); }
  });

})