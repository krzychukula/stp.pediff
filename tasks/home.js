module.exports = {
    config: {
        path: '&id=common408675&format=ipad_landscape&page=1',
        options: {
            viewportSize: [{width: 1024, height: 778}]
        },
        media: {
            print: false
        },
        package: 'ipad',
        actions: ['after-wait']
    },
    execute: function(){

        this.wait(1000, function() {
            this.echo("I've waited for a second.");
            this.save();
        });

        this.then(function(){
             this.waitUntilVisible('.alf-template', function(){
                 //this.sendKeys('input', 'phrase', {keepFocus: true});
                 this.save(this.config.actions[0]);
                 this.echo("I've waited for a selector visible. saved");
             }, function(){
                this.save(this.config.actions[0]);
                this.echo("I've waited for a selector visible. timeout");
             }, 40000);
        })
    }
};
