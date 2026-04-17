type Constructor<t> = new (...args: any[]) => t;


export const Applications = new Map<any, any>();

export function ApplicationMixin<t extends foundry.applications.api.ApplicationV2>(base: Constructor<t>, settingName: string) {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  if (Applications.has(base)) return Applications.get(base);


  class PreventableApplication extends base {

    static updatePreventableSettings() {
      for (const data of KnownApplications) {
        const app = data.app.deref();
        if (!app?.options?.form) continue;

        const setting = game?.settings?.get(__MODULE_ID__, settingName);
        if (typeof setting !== "boolean") continue;
        if (setting) app.options.form.closeOnSubmit = false;
        else app.options.form.closeOnSubmit = data.default;
      }
    }

    constructor(...args: unknown[]) {
      super(...args);
      if (this.options.form) {
        KnownApplications.push({ default: this.options.form.closeOnSubmit, settingName, app: new WeakRef(this) });
        if (game?.settings?.get(__MODULE_ID__, settingName))
          this.options.form.closeOnSubmit = false;
      }

    }
  }

  Applications.set(base, PreventableApplication);

  const KnownApplications: {
    default: boolean,
    settingName: string,
    app: WeakRef<PreventableApplication>
  }[] = [];

  return PreventableApplication
}