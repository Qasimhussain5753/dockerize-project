import { GraphqlEntity } from './graphql.entity';
import { Repository } from "typeorm";
import { newUser } from "./create.graphql";
export declare class GraphqlService {
    private graphqlRepository;
    constructor(graphqlRepository: Repository<GraphqlEntity>);
    findAll(): Promise<GraphqlEntity[]>;
    findOne(id: number): Promise<GraphqlEntity>;
    createGraphql(createUser: newUser): Promise<GraphqlEntity>;
}
