function Environment(){
        
        this.TileCount = 100;
        this.NoGround = [];
        this.currentTile = 0;
        this.NoTree = [];

        this.Setup = function(){
                this.screenX = 0;
                this.SetupGround();
        }
        
        this.SetupGround = function(){
                for(var x = 0; x < this.TileCount; x++){
                        if(x % 10 == 0){
                                this.NoGround[x] = 0;
                        }
                        if(x % 7 == 0){
                                if(this.NoGround[x] != 0)
                                        this.NoTree[x] = 0;
                        }
                }
        }

        this.Update = function(){
                this.screenX -= player.runSpeed * 60;

                this.currentTile = -parseInt(this.screenX / (canvas.width * 0.2)) + 1;
        }

        this.Draw = function(ctx){
                this.DrawSky(ctx);
                this.DrawGround(ctx);      
                this.DrawUnderground(ctx); 
                this.DrawTrees(ctx);
                this.DrawWater(ctx);
        }

        this.DrawSky = function(ctx){
                ctx.drawImage(assets.sky_sunrise, this.screenX * 0.01, 0, canvas.width*2, canvas.width); 
        }

        this.DrawGround = function(ctx){
                for(var i = 0; i<this.TileCount; i++){
                        if(this.NoGround[i] != 0){
                                ctx.drawImage(assets.env, 560, 340, 120, 125, (i*canvas.width*0.2)+this.screenX, canvas.height*0.69, canvas.width*0.2, canvas.height*0.4);
                                ctx.drawImage(assets.env, 550, 193, 250, 255, (i*canvas.width*0.2)+this.screenX, canvas.height*0.65, canvas.width*0.2, canvas.height*0.4);
                        }
                } 
        }

        this.DrawUnderground = function(ctx){
                for(var i = 0; i<this.TileCount; i++){
                        if(this.NoGround[i] != 0){
                                ctx.drawImage(assets.env, 430, 2790, 360, 150, (i*canvas.width*0.2)+this.screenX, canvas.height*0.50, canvas.width*0.2, canvas.height*0.2);
                                ctx.drawImage(assets.env, 430, 2790, 360, 150, (i*canvas.width*0.2)+this.screenX, canvas.height*0.75, canvas.width*0.2, canvas.height*0.2);
                        }
                        else{
                                ctx.drawImage(assets.env, 430, 2790, 360, 150, (i*canvas.width*0.2)+this.screenX, canvas.height*0.50, canvas.width*0.2, canvas.height*0.2);
                                 ctx.drawImage(assets.env, 430, 2790, 360, 150, (i*canvas.width*0.2)+this.screenX, canvas.height*0.65, canvas.width*0.2, canvas.height*0.22);
                        }
                } 
        }
        
        this.DrawTrees = function(ctx){
                for(var i = 0; i<this.TileCount; i++){
                        if(this.NoTree[i] != 0){
                                
                        }
                } 
        }

        this.DrawWater = function(ctx){
                   for(var i = 0; i<this.TileCount; i++){
                        if(this.NoGround[i] != 0){
                                ctx.drawImage(assets.env, 0, 4310, 100, 150, (i*canvas.width*0.2)+this.screenX, canvas.height*0.93, canvas.width*0.5, canvas.height*0.3);
                        }
                        else{
                                ctx.drawImage(assets.env, 0, 4329, 100, 150, (i*canvas.width*0.2)+this.screenX, canvas.height*0.875, canvas.width*0.2, canvas.height*0.5);
                        }
                } 
        }
}
