function Environment(){
        
        this.Setup = function(){
                this.screenX = 0;
        }

        this.Update = function(){
                this.screenX -= player.runSpeed * 60;
                if(this.screenX <= -canvas.width * 0.2){
                        this.screenX = 0;
                }
        }

        this.Draw = function(ctx){
                for(var i = 0; i<6; i++){
                        ctx.drawImage(assets.env, 560, 340, 120, 125, (i*canvas.width*0.2)+this.screenX, canvas.height*0.6, canvas.width*0.2, canvas.height*0.4);
                }        
        }
}
