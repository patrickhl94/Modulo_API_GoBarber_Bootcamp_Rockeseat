export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: 'afafd439474e28',
    pass: '57bcd577d82150',
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
