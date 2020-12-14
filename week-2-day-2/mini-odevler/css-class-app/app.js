 const app = Vue.createApp({
    data() {


        return {

            resultColor: null,
            color_palette: [
                {
                    id: "red",
                    css_class: 'red-box',
                    
                },
                {
                    id: "green",
                    css_class: 'green-box',
                   
                },
                {
                    id: "blue",
                    css_class: 'blue-box',
                    
                }
            ],

        };
    },

    methods: {
        changeColor(value) {
           
            return this.resultColor = value;

        },
    }

})

app.mount("#app");
