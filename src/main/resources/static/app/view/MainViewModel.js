Ext.define('EL.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    stores:[{
        menuNav:{
            type:'tree',
            root:{
                expanded:true,
                children:[{
                    text:'VBox',
                    className:"EL.view.VBox",
                    iconCls: 'fa fa-vbox',
                    leaf:true
                },{
                    text:'HBox',
                    className:"EL.view.HBox",
                    iconCls: 'fa fa-hbox',
                    leaf:true
                },{
                    text:'Fit',
                    className:"EL.view.Fit",
                    iconCls: 'fa fa-fit',
                    leaf:true
                },
                ]
            }
        }
    }]

})