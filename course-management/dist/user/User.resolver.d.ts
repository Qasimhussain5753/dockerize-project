import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { newUser } from './create.user';
import { AdminEntity } from '../admin/admin.entity';
export declare const ResultUnion: UserEntity | AdminEntity;
export declare class userResolver {
    private userService;
    constructor(userService: UserService);
    getUserFindOne(id: number): Promise<UserEntity>;
    findByTitle(name: string): Promise<UserEntity[]>;
    getUserAll(): Promise<UserEntity[]>;
    createNewUser(createUser: newUser): Promise<UserEntity>;
}
