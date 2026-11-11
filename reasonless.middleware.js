// reasonless.middleware.js
// Magpie gateway middleware: force reasoning_effort="none" on every request.
// onRequest runs before routing; onProvider runs after routing/fitEffort,
// right before the provider sees the body — both set "none" so fitEffort
// cannot re-add a default level. Only works for models that support "none"
// (DeepSeek, Claude, MiniMax-M3). Models that don't support it (Gemini 3.8
// Flash, Kimi K3, GLM-5.3 Flash) will fall back to their lowest level.
//
// Install (phone): Magpie -> Plugins -> "已有想装的?" input box ->
//   github:<your-username>/magpie-reasonless
// (Local-folder install is known to fail on magpie-android; use GitHub.)

export function onRequest(body, ctx) {
  try {
    if (body && typeof body === "object") body.reasoning_effort = "none";
  } catch (e) {}
  return body;
}

export function onProvider(body, ctx) {
  try {
    if (body && typeof body === "object") body.reasoning_effort = "none";
  } catch (e) {}
  return body;
}
