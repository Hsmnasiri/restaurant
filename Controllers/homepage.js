let controller=require('./controller');
let restaurants=require('../Collections/restaurants')
let menus=require('../Collections/menu')
class HomepageController extends controller{
    Printrestaurants(req,res){
        try {
            res.status(200).json(
                {
                    data:restaurants,
                    success:true
                }
            )
        } catch (error) {
            res.status(404).json(
                {
                    data:error,
                    success:false
                }
            )
        }
        
    }
    Printmenu(req,res){

        try{
            let finded_menu=[] ;
             menus.find(smenu =>{
                if(smenu.restaurant_id==req.body.id){
                      finded_menu.push(smenu);
                }
           }
           )
           console.log(finded_menu)
           if(!finded_menu){
               res.status(404).json(
                   {
                       data: "جنین رستورانی وجود ندارد",
                       success:false
                   }
               )
           }else{
               res.status(200).json(
                   {
                       data:finded_menu,
                       success:true
                   }
               )
           }
        }catch(error){
            res.status(200).json(
                {
                    data:error,
                    success:false
                }
            )
        }

        
    }
}
module.exports= new HomepageController;