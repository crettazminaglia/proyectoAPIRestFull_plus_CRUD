const {createApp} = Vue

createApp({
    data(){
        return{
            productos: [],
            url: 'http://4li3ntr3x.pythonanywhere.com/productos',
            cargando: true,
            error: false
        }
    },

    methods:{
        fetchData(){
            fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;

            })
            .catch(err => {
                console.error(err);
                this.error = true;

            })
        },

        eliminar(id){
            const url = 'http://4li3ntr3x.pythonanywhere.com/productos/'+id;
            let options = {
                method: 'DELETE',    
            }

            fetch(url, options)
                .then(response => response.json())
                .then(response => {
                    location.reload();
            })
            
        }

    },

    

    created(){
        this.fetchData(this.url);

    }
    

}).mount('#app')
