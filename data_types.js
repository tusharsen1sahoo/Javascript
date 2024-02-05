//There are two type of dataTypes in js
/*Priemtive datatypes                                            Reference datatyppes(Non primtive datatypes)
 1.Number                                                   1.Array
 2.boolean                                                  2.Object
 3.string                                                   3.function
 4.bigint
 5.null
 6.undefined
 7.symbol*/

 //Types based on HOw we store the data and how to access it 
 //priemtive dataTypes are stored in stack and when we access them  then we get a copy of the data not the original
 //IN reference type we get the actual data when we want to access them

// let Number=23;
 //let num=Number;
 //num=45

 /*console.log(num);
 console.log(Number);*/

 let user1= {
    Name:"tushar",
    Roll:23
 };

 let user2=user1;
 user2.Roll=12;
 console.log(user1);
 console.log(user2);
