class Player{
    constructor(){
        this.name = null
        this.posx = 0
        this.posy = 0
        this.idx = null
        this.score = 0
    }
    getCount(){
        db.ref("playercount").on("value", function(data){
            playercount = data.val()
        })
    }
    addPlayer(){
        db.ref("player"+this.idx).set({
            name: this.name,
            posx: this.posx,
            posy: this.posy,
            idx: this.idx,
            score: this.score
        })
    }
    
    updateCount(num){
        db.ref("/").update({
          playercount:num
        })
      }
}