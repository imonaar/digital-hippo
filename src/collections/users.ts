import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    //the users collection is sprcial because this is where all the auth logic will happen.
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return `<p>Hello please verify </p>`
            }
        }
    },
    access: {
        read: () => true,
        create: () => true
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            required: true,
            admin: {
                condition: () => false
            },
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ]
        }
    ]
}

