let controller=require('./controller');
let menus=require('../Collections/menu');
let orders=require('../Collections/orders');
class SubmitorderController extends controller{
 makeorder(req,res){
    let finded_foods=[];
    let sumprice=0;
    menus.find(food =>{
        if(food.id==req.body.foodid){
              finded_foods.push(food.name);
              sumprice+=food.price;
        }
   })
   let newOrder={
       name:req.body.nameorder,
       price: sumprice,
       foods:finded_foods,

   }
   console.log(newOrder);
   orders.push(newOrder);
   res.status(200).json({
    status:true,
    data:"سفارش با موفقیت اضافه شد"
   })
 }

 editorder(req,res){
    orders.map(order=>{
        if(order.name==req.body.name){
            return req.body;
        }else{
            return order;
        }
    })
    res.status(200).json({
        status:true,
        data:"سفارش با موفقیت آپدیت شد"
       })
 }
 deleteorder(req,res){
         orders.filter(order =>{
             if(order.nameorder!=req.body.name){
                 return order;
             }
         });
         res.status(200).json({
            status:true,
            data:"سفارش با موفقیت حذف شد"
           })
 }
 printOrder(req,res){
    try {
        res.status(200).json(
            {
                data:orders,
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
}
module.exports= new SubmitorderController;