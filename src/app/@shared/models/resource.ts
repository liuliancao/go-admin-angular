export interface ResourceType {
    Name: string;
    Nickname: string;
    Tag: string;
    Description: string;
    HTMLFormJSON: string;
}

export interface Resource {
    Name: string;
    TID: number;
    Description: string;
    DataJSON: string;
}
