export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
        { name: 'description', type: 'text', title: 'Description' },

        // Main Image
        {
            name: 'mainImage',
            title: 'Main Image (Cover)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        { name: 'servings', type: 'string', title: 'Servings' },
        { name: 'time', type: 'string', title: 'Cooking Time' },
        {
            name: 'difficulty',
            title: 'Difficulty',
            type: 'string',
            options: {
                list: [
                    { title: 'Easy peasy', value: 'Easy peasy' },
                    { title: 'Easy', value: 'Easy' },
                    { title: 'Medium', value: 'Medium' },
                    { title: 'Tricky', value: 'Tricky' },
                    { title: 'Hard', value: 'Hard' },
                    { title: 'Challenge Mode', value: 'Challenge Mode' },
                ],
                layout: 'dropdown',
            },
        },

        // Referenced Categories
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
        },

        // Ingredients
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{ type: 'string' }],
        },

        // Steps (Rich Text)
        {
            name: 'steps',
            title: "Let's Cook",
            type: 'array',
            of: [{ type: 'block' }],
        },
        // Final Look Images (max 2)
        {
            name: 'finalImages',
            title: 'Final Dish Images (Max 2)',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: rule => rule.max(2),
        },
        // Author Object
        {
            name: 'author',
            title: 'Author',
            type: 'object',
            fields: [
                {
                    name: 'author',
                    title: 'Author',
                    type: 'string',
                    readOnly: true,
                    hidden: false,
                    description: 'This will be automatically set to the current logged-in user',
                    initialValue: async (_, context) => {
                        console.log('Current user context:', context.currentUser?.name);
                        return context.currentUser?.name || 'Unknown';
                    },
                },
                {
                    name: 'team',
                    title: 'Team',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Engineering', value: 'Engineering' },
                            { title: 'Customer Solutions', value: 'Customer Solutions' },
                            { title: 'Sales and Marketing', value: 'Sales and Marketing' },
                            { title: 'People Team', value: 'People Team' },
                            { title: 'Others', value: 'Others' },
                        ],
                        layout: 'dropdown',
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'servings',
            type: 'difficulty',
            media: 'mainImage',
        },
        prepare({ title, subtitle, media, type }) {
            console.log("Preparing preview for Recipe", type, title, subtitle);
            return {
                title: title || 'New Recipe',
                subtitle: `${subtitle || 'No servings'} • ${type || 'No difficulty'}`,
                media: media,
            };
        },

    },
};
