class Game{
    constructor(){

    }
    getState(){
        db.ref("gamestate").on("value", function(data){
            gamestate = data.val()
        })
    }

    updateState(num){
        db.ref("/").update({
            gamestate: num
        })
    }

    start(){
        player = new Player()
        playercount = player.getCount()
        form = new Form()
        form.display()
    }
}