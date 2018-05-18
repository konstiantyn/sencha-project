

var form = {
			view:"form",
			borderless:true,
			elements: [
				{ view:"text", label:'Login', name:"login" },
				{ view:"text", label:'Email', name:"email" },
				{ view:"button", value: "Submit", click:function(){
					if (this.getParentView().validate()){ //validate form
                        webix.message("All is correct");
                        this.getTopParentView().hide(); //hide window
                    }
					else
						webix.message({ type:"error", text:"Form data is invalid" });
				}}
			],
			rules:{
				"email":webix.rules.isEmail,
				"login":webix.rules.isNotEmpty
			},
			elementsConfig:{
				labelPosition:"top",
			}
		};

        webix.ui({
            view:"popup",
            id:"win1",
            width:300,
            head:false,
            body:webix.copy(form)
        });
        
 function showForm(winId, node){
            $$(winId).getBody().clear();
            $$(winId).show(node);
            $$(winId).getBody().focus();
        }

var data = {
    view        : "multiview",
    keepViews   :true,
    fitBiggest  : true,
    cells       :[
	    {
	     	id  : 'scrnPhoto',
	     	css : 'scrnPhoto',
		    rows: [
		        { view:"button",label:"Countdown before you can connect", id: 'btnConnect', disabled:true,
		             click:function(){ showForm("win1", this.$view) }
		        
		         },
		        /*{
	                view:"carousel",
	                id:"carousel",
	                cols:[
		                { css: "image", template:img, data:{src:"imgs/image001.jpg"} },
		                { css: "image", template:img, data:{src:"imgs/image002.jpg"} },
		                { css: "image", template:img, data:{src:"imgs/image003.jpg"} }
	                ]
                }*/
                {
                    view:"video",
			        id: "video1",
			        src: [
				        "demodata/big_buck_bunny.ogv",
				        "demodata/big_buck_bunny.mp4"
			        ],
			        controls: true
			    }
            ]
	    }
    ]
}

var ui_scheme = {
    type    :"line",
    width   :'100%',
    height  :'100%',
    rows    : [
            data
    ]
};

function img(obj){
    return '<img style="width: 100%; height: 100%;" src="'+obj.src+'" class="content" ondragstart="return false"/>'
}  
