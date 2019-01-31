new Vue({
    el: ".postList",
    data: {
        posts: [
            {
                title: 'Barbecue Party Tips For A Truly Amazing Event',
                img: 'img/post1.jpg',
                categoriy: ['Art', 'health'],
                comments: 24,
                data: 'June 14, 2015',
                    },

            {
                title: 'The Principles Of Scientific Cooking',
                img: 'img/post2.jpg',
                categoriy: ['Art'],
                comments: 32,
                data: 'May 28, 2015',
                    },
           {
                title: 'How To Meet That Special Someone',
                img: 'img/post3.jpg',
                categoriy: ['Lifesryle'],
                comments: 12,
                data: 'Oct 9, 2015',
                    },
             {
                title: 'How To Meet That Special Someone copy',
                img: 'https://source.unsplash.com/random',
                categoriy: ['art'],
                comments: 18,
                data: 'Now 17, 2014',
                    },
                ],
    }
});
