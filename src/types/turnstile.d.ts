type TurnstileWidgetId = string;

type TurnstileRenderOptions = {
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  sitekey: string;
  size?: "normal" | "compact" | "flexible";
  theme?: "light" | "dark" | "auto";
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => TurnstileWidgetId;
  remove: (widgetId: TurnstileWidgetId) => void;
  reset: (widgetId: TurnstileWidgetId) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export {};
