

const app = Vue.createApp({

      data() {

            return {

                  comments: [
                        {
                        
                              comment: "Yorum 1",
                              likes: 1,
                              dislikes: 1,
                        },
                        {
                              comment: "Yorum 2",
                              likes: 2,
                              dislikes: 2,
                        },
                        {
                              comment: "Yorum 3",
                              likes: 3,
                              dislikes: 3,
                        },
                        {
                              comment: "Yorum 4",
                              likes: 4,
                              dislikes: 4,
                        },
                       
                       

                  ],

            };

      },




})

app.mount("#app");