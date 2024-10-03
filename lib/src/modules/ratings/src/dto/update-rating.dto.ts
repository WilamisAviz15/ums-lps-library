import { Transform, TransformFnParams } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class RatingUpdateDto {
  @IsNotEmpty({ message: 'O campo de ID do comentário é obrigátorio.' })
  @IsInt({ message: 'O campo de ID do comentário precisa ser um inteiro.' })
  id: number;

  @IsString({ message: 'O campo de nome precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de nome é obrigátorio.' })
  @MinLength(3, {
    message: 'O campo de nome precisa ter pelo menos 3 caracteres.',
  })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  username: string;

  @IsString({ message: 'O campo de data precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de data é obrigátorio.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  date: string;

  @IsString({ message: 'O campo de mensagem precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de mensagem é obrigátorio.' })
  @MaxLength(255, {
    message: 'O campo de mensagem precisa ter até 255 caracteres.',
  })
  @MinLength(3, {
    message: 'O campo de mensagem precisa ter pelo menos 3 caracteres.',
  })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  message: string;

  @IsNotEmpty({ message: 'O campo ID da refeição é obrigátorio.' })
  @IsInt({ message: 'O campo de ID da refeição precisa ser um inteiro.' })
  menuMealId: number;
}
