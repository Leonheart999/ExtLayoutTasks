Ext.define("EL.view.MainView",{
    extend: 'Ext.panel.Panel',
    requires:["EL.view.StartPanel"],
    layout: 'fit',
    items:[{
        xtype: 'startpanel'
    }]

})