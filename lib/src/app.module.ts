import { Module } from '@nestjs/common';

import { AuthenticationModule } from './modules/authentication/src/authentication.module';
import { RoleModule } from './modules/roles/src/roles.module';
import { UserModule } from './modules/users/src/user.module';
import { UserRoleModule } from './modules/users-roles/src/users-roles.module';
import { ScheduleModule } from './modules/schedules/src/schedules.module';
import { ActionModule } from './modules/actions/src/action.module';
import { MenuModule } from './modules/menus/src/menu.module';
import { MenuGroupModule } from './modules/menus-group/src/menus-group.module';
import { MealModule } from './modules/meals/src/meals.module';
import { ProfileModule } from './modules/profile/src/profile.module';
import { MenuMealModule } from './modules/menus-meals/src/menus-meals.module';
import { RatingModule } from './modules/ratings/src/ratings.module';
import { SubMealsModule } from './modules/submeals/src/submeals.module';
import { MealsUserRolesModule } from './modules/meals-user-roles/src/meals-user-roles.module';
import { PaymentsModule } from './modules/payments/src/payments.module';
import { EnvironmentProviderModule } from './environment/environment.provider';



@Module({
  imports: [
    AuthenticationModule,
    RoleModule,
    UserModule,
    UserRoleModule,
    ScheduleModule,
    ActionModule,
    MenuModule,
    MenuGroupModule,
    MealModule,
    ProfileModule,
    MenuMealModule,
    RatingModule,
    SubMealsModule,
    MealsUserRolesModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [EnvironmentProviderModule],
})
export class AppModule {}
