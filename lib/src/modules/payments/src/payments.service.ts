import { Inject, Injectable } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices/client';

import { GeneratePixPayment } from './interfaces/generate-pix-payment';

@Injectable()
export class PaymentService {
  constructor(@Inject('PAYMENTS') private readonly msPayments: ClientProxy) {}

  getEfiToken() {
    return this.msPayments.send('get_token_efipay', {});
  }

  generatePaymentPix(data: GeneratePixPayment) {
    return this.msPayments.send('generate_payment_pix', data);
  }
}
