import { GraphqlService } from "./graphql.service";
import { GraphqlEntity } from "./graphql.entity";
import { newUser } from "./create.graphql";
export declare class userResolver {
    private graphService;
    constructor(graphService: GraphqlService);
    getUserFindOne(id: number): Promise<GraphqlEntity>;
    getUserAll(): Promise<GraphqlEntity[]>;
    createNewUser(createGraphQl: newUser): Promise<GraphqlEntity>;
}
