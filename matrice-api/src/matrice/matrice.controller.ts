import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { SavedDTO } from 'src/matrice/matrice.dto';
import { MatriceService } from 'src/matrice/matrice.service';

@Controller('auth')
export class AuthController {
    constructor(
        private matriceService: MatriceService,
      ) {}


    @Get("/id")
    @UseGuards(AuthGuard("jwt"))
    async GetCalcul(@Body() User){
      const user = await this.matriceService.findByUser(User);
      const matrice = user.calcul;
      return matrice;
    }

    @Post('SavedMatrice')
    async Calcul(@Body() SavedDTO: SavedDTO) {
      const user = await this.matriceService.findByUser(SavedDTO);
      const matrice = user.calcul;
      return matrice;
    }
}
