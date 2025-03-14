declare module 'nodemailer' {
  export interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    service?: string;
    auth?: {
      user?: string;
      pass?: string;
    };
  }

  export interface MailOptions {
    from?: string;
    to?: string;
    subject?: string;
    text?: string;
    html?: string;
    replyTo?: string;
  }

  export interface Transporter {
    sendMail(mailOptions: MailOptions): Promise<any>;
  }

  export function createTransport(options: TransportOptions): Transporter;
} 