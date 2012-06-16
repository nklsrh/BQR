function AI(){

        this.enemyCount = 5;
        this.enemy = [this.enemyCount];

        this.Setup = function(){
                var n = 0;
                for(var i = 0; i < env.TileCount; i++){
                        if(env.NoGround[i] != 0 && i % 15 == 0){
                                this.enemy[n] = new Enemy;
                                this.enemy[n].Setup(i, 0);
                                n++;
                        }
                }
        }

        this.Update = function(){
                for(var i = 0; i < this.enemyCount; i++){
                        this.enemy[i].Update();
                }
        }

        this.Draw = function(ctx){
                for(var i = 0; i < this.enemyCount; i++){
                        this.enemy[i].Draw(ctx);
                }
        }
}
