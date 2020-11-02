Ext.define('EL.view.StarterPanelViewModel', {
    extend: 'Ext.app.ViewModel',
    stores:{
        menuNav:{
            type:'tree',
            root:{
                expanded:true,
                children:[{
                    text:'VBox',
                    className:"EL.view.VBox",
                    leaf:true
                },{
                    text:'HBox',
                    className:"EL.view.HBox",
                    leaf:true
                },{
                    text:'Fit',
                    className:"EL.view.Fit",
                    leaf:true
                },
                ]
            }
        }
    }

})