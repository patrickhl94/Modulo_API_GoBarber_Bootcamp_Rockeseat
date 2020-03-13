export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/**
 * TIPOS DE SERVIÇO DE E-MAILS
 * Amazon SES
 * Mailgub
 * Sporkpost
 * Manfril (Só pode ser usado com o Mailshimp)
 * Mailtrap (Somente usado para ambiente de DEV)
 */
