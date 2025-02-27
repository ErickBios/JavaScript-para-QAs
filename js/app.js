
const LIST = [
    {
        id: 1,
        nome:'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome:'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        nome:'Princessa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome:'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome:'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        nome:'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        nome:'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        nome:'C3pO',
        avatar: 'images/c3po.png'
    },
   
]

const App = new Vue({
    el: '#app',
    data:{
        title: 'Star Wars Lego', 
        userName:'ErickBios',
        characters: LIST,
        searchName:''
        },
    methods: {
        like(userName) {
            alert(`O Personagem ${userName} recebeu um like!`)
        },
        remove(id){
            const list = this.characters


            const resut = list.filter(item => {
                return item.id !== id
            })

            this.characters = resut
        },
        search(){

            if(this.searchName === ''){
                return alert('O campo de busca é abrigatório.')
            }

            const list = this.characters = LIST

            const resut = list.filter( item => {
                return item.nome === this.searchName
            })

            if(resut.length <= 0){
                alert('Nenhum regristro encontrado.')
            }else{
                this.characters = resut
            }


        }
        
    }

})