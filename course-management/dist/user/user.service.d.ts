import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { newUser } from './create.user';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    findByTitle(name: string): Promise<UserEntity[]>;
    createUser(createUser: newUser): Promise<UserEntity>;
}
