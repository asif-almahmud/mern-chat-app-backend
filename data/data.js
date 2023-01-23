const chats = [
    {
        isGroupChat: false,
        users: [
            {
                name: "Aaaa",
                email: "aaaa@gmail.com",
            },
            {
                name: "Bbbb",
                email: "bbb@gmail.com",
            },
        ],
        _id: "noshv987y934m390svd",
        chatName: "Aaaa",
    },
    {
        isGroupChat: false,
        users: [
            {
                name: "Caaa",
                email: "caaa@gmail.com",
            },
            {
                name: "Cbbb",
                email: "Cbbb@gmail.com",
            },
        ],
        _id: "sfshv987y934m390sry",
        chatName: "Caaa",
    },
    {
        isGroupChat: true,
        users: [
            {
                name: "Daaa",
                email: "daaa@gmail.com",
            },
            {
                name: "Dbbb",
                email: "dbbbb@gmail.com",
            },
            {
                name: "Dccc",
                email: "Dccc@gmail.com",
            },
        ],
        _id: "yfshv987y934m390see",
        chatName: "Friends",
        groupAdmin: {
            name: "Daaa",
            email: "daaa@gmail.com",
        },
    },
];

module.exports = chats;
