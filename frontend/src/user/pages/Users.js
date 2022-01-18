import React from "react";

import '../components/UsersList'
import UsersList from "../components/UsersList";

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Joy',
            image: 'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg',
            places: '3'
       }
];

    return <UsersList items={USERS } />
}

export default Users;