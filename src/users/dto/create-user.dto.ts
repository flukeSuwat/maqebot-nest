import { IsNotEmpty, Matches } from "class-validator";

export class CreateUserDto {
  id: string;
  username: string;    
  
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message: 'Password must be minimum eight characters, at least one letter and one number.'
  })
  password: string
  
  firstName: string;
  lastName: string;
  isActive: boolean;
}
