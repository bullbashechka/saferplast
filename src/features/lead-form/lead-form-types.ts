export type LeadFormPayload = {
  name: string;
  phone: string;
  task: string;
  consentsAccepted: boolean;
  source?: string;
  turnstileToken: string;
};
