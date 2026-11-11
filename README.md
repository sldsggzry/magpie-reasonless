# magpie-reasonless

Magpie gateway middleware: force `reasoning_effort="none"` on every request, so models that support it stop thinking.

## Install

Magpie -> Plugins -> "已有想装的?" input box -> `/sdcard/Download/magpie-reasonless` (local folder) or `github:sldsggzry/magpie-reasonless`.

## How it works

Exports `onRequest` and `onProvider` hooks. Both set `body.reasoning_effort = "none"` on every request. `onProvider` runs after routing/fitEffort, so a default level re-added by fitEffort is overridden right before the provider sees the body.

Only works for models that support `"none"` (DeepSeek, Claude, MiniMax-M3). Models that don't support it (Gemini 3.8 Flash, Kimi K3, GLM-5.3 Flash) fall back to their lowest level.
