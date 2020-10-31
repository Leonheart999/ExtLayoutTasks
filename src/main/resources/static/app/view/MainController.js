Ext.define('EL.view.MainController', {
    extend: 'Ext.app.ViewController',
    onSelect: function (view, record){
        const className = record.get('className');
        const title = record.get('text');
        const tabPanel = this.lookup('centerTabPanel');
        let tab = this.lookup(className);
        if(!tab) {
            tab = Ext.create(className, {
                reference: title,
                closable: true,
                title: title
            });
            tabPanel.add(tab);
        }
        tabPanel.setActiveTab(tab);
    }

})
