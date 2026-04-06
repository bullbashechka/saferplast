export type LeadFormPayload = {
  name: string;
  phone: string;
  task: string;
  consentsAccepted: boolean;
  turnstileToken: string;
  source?: string;
};
