import { Injectable } from '@nestjs/common';
import { Token } from './tokens.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTokenDto } from './dto/create-token.dto';

@Injectable()
export class TokensService {
  constructor(@InjectModel(Token) private tokenRepository: typeof Token) {}

  async getAllTokens() {
    try {
      const tokens = await this.tokenRepository.findAll({
        where: { network: 'mainnet' },
      });
      return tokens.length;
    } catch (error) {
      console.log(error);
    }
  }

  async createOneToken(dto: CreateTokenDto) {
    console.log(dto);
    const token = await this.tokenRepository
      .create(dto)
      .catch((e) => console.log(e));
  }
}
