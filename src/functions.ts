import { Applications } from "applications";

export function updateApps() {
  /* empty */
  Applications.forEach(val => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    if (typeof val.updatePreventableSettings === "function") val.updatePreventableSettings();
  })
}