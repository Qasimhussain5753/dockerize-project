import { AdminEntity } from '../admin/admin.entity';
export declare class UserEntity {
    id: number;
    name: string;
    password: string;
    type?: string;
    admin: AdminEntity;
}
