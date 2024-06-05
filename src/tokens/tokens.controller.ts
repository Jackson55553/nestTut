import { Body, Controller, Get, Post } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Token } from './tokens.model';
import { CreateTokenDto } from './dto/create-token.dto';

@ApiTags('Tokens')
@Controller('tokens')
export class TokensController {
  constructor(private tokenService: TokensService) {}

  @ApiOperation({ summary: 'return all tokens' })
  @ApiResponse({ status: 200, type: Token })
  @Get()
  async getAllTokens() {
    const tokens = await this.tokenService.getAllTokens();
    return tokens;
  }

  @ApiOperation({ summary: 'create one token' })
  @ApiResponse({ status: 201, type: Token })
  @Post()
  async addOneToken(@Body() dto: CreateTokenDto) {
    return this.tokenService.createOneToken(dto);
  }
}
