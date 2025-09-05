interface AccountType {
    id:number,
    card:string,
    url:string,
    status : "IRT"|"USD",
    account_type: {
        id:number,
        image:string,
        title:string,
    },
}