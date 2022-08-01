// baitap: phan doc
// bai1

// 1.1: var, let, const la gi?
// var , let, const là các  key  words  dùng để  khai  báo  biến  trong  javascriptt.

// 1.2: sự khác   nhau giữa  lét  và  var?
// -keyword  "let"  khai báo một biến chỉ có thể truy cập được trong Scope bao quanh nó.
// -keyword  "var"  Như đã biết trong Vanilla Javascript, 
//  với từ khóa var chúng ta có thể khai báo đa dạng các kiểu biến 
//  như number, string, boolean, etc. Trừ trường hợp được khai báo bên trong 1 function
//  (khi đó biến var sẽ có scope là function/locally scoped),
//  biến var sẽ có scope là globally scoped. Đặc biệt, biến var còn có thêm tính chất
//  hoisting: nghĩa là dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.







// bai 2: Boolean
// 2.1 Boolean la gi?---> Boolean la 1 kieu du lieu.
// 2.2 co nhung ket qua nao trong kieu du lieu boolean?
// - Kiểu dữ liệu Boolean chỉ có 2 giá trị duy nhất là true hoặc false .
// 2.3: Boolean thường được sử dụng trong đâu? Cho ví dụ về các biến có kiểu giá trị là boolean

// - Kiểu dữ liệu Boolean thông thường được dùng để lưu trữ các giá trị đúng hoặc sai của một mệnh đề so sánh nào đó
// vd:Khaibao 
// let single = “true”;
// let married = “false”;

// Giá trị boolean chính là kết quả của một mệnh đề so sánh

// 5 >= 5 // true
// 10 === 10 // true
// 1 < 1 (false)








// BaiTap:
//bai1:

// let  t = Number(prompt("mời nhập số:"));
// if(t<0 ||t >9){
//     alert("nhap sai so ,moi nhap lai");
    
// }
// else if(0<=t<=4.5){
//     alert(t + "thuoc nua be hon cua [0-9]");
//     console.log(t + "thuoc nua be hon cua [0-9]");
// }
// else{
// alert(t + " thuoc nua lon hon cua [0-9]");
// console.log(t + "thuoc nua lon hon cua [0-9]");
// }






// // bai2


// let n = Number(prompt("moi nhap so n :"));
// let x = Number(prompt("moi nhap so x : "));
// let t = n/2;
// if (0<x & x<=t){
//     alert(x + "thuoc nua be cua [0-n]");
//     console.log(x + "thuoc nua be cua [0-n]");
// }
// else if(t<x &x<n){
//     alert(x + "thuoc nua lon cua [0-n]");
//     console.log(x + "thuoc nua lon cua [0-n]");
// }
// else  {alert(x + " khong thuoc  [0-n]");
// console.log(x + " khong thuoc [0-n]")};





// bai3
// nhap so x, kiem tra la chan hay length, in ra man hinh

//   let x= prompt(" nhap x: ");
//   if(x%2==0){
//     alert(x + " la so chan");
//     console.log(x + "la so chan");
// }
// else { alert(x + " la so le");
// console.log(x + "la so le");}





// bai4: BIM
 

// let H = Number(prompt("moi nhap chieu (theo don vi la m) :"));
// let W = Number(prompt( "moi nhap can nang (theo don vi la kg )"));
// let BIM = W/(H*H);
// if(BIM < 16){
//     alert("MAY LA BO XUONG A");
// console.log("MAY LA BO XUONG A");
// }
// else if (16<=BIM & BIM<=18.5 ){
//     alert(" Idol Day roi");
//     console.log("idol Day roi");
// }
// else if (18.5< BIM & BIM <= 25){
//     alert("May dep zai day");
//     console.log("nay dep zai day");
// }
// else if (25<BIM & BIM<=30 ){
//     alert(" May Qua Beo");
//     console.log("May Qua Beo");
// }
// else{
//     alert("THOI ONG KHONG CAN GIAM CAN NUA DAU");
//     console.log("THOI ONG KHONG CAN GIAM CAN NUA DAU");
// }






// BAI 5: NHAP DIEM CAC MON, VA TINH PHAN TRAM TUNG MON.
// let t = Number(prompt(" diem toan :"));
// let l = Number(prompt(" diem ly :"));
// let h = Number(prompt(" diem hoa :"));
// let v = Number(prompt(" diem van :"));
// let a = Number(prompt(" diem anh :"));
// let T = t+l+h+v+a;
// let tb= T/5;
// let P =T/50;
// if(P>= 0.9){alert("Gread A");
//             console.log(" Gread A");
// }
// else if(P>= 0.8){
    // alert("Gread B");
// console.log(" Gread B");
// }
// else if(P>= 0.7){alert("Gread C");
// console.log(" Gread C");
// }
// else if(P>= 0.6){alert("Gread D");
// console.log(" Gread D");
// }
// else if(P>= 0.4){alert("Gread E");
// console.log(" Gread E");
// }
// else {alert("Gread D");
// console.log(" Gread D");
// }
// console.log(" diem trung binh la : " + tb);








// bai6


// let N= Number(prompt( "moi nhap nam: "));
// if(N>0){
//     if (Number.isInteger(N)===true){
//         console.log("nam hop le");
//         if (N%19 === 3 ||
//             N%19 === 6||
//             N%19 === 9 ||
//             N%19 === 11 ||
//             N%19 === 14||
//             N%19 === 17)
//             { console.log(" nam " + N +" la nam nhuan");
//             alert(" nam " + N +" la nam nhuan");
//             }
//         else {
//             console.log(" nam " + N +" khong phai la nam nhuan");
//             alert(" nam " + N +"khong phai la nam nhuan");
//         }
//     }
//     else (console.log("nam khong hop le, moi nhap lai"));
// }else (console.log("nam khong hop le, nhap lai di nhe"));






// // bai7
// // nhap chieu cao va phan loai
//  let h = prompt("chieu cao cua may (tinh bang cm nhe) la: ");
//  if(h<=150){
//     alert("May la nguoi lun a");
//     console.log("may la nguoi lun a");
// }
// else if (150<= h & h< 169 ){ 
//     alert("trong may cung tam tam.cho 3 diem");
// console.log("trong may cung tam tam. cho 3 diem");
// }
// else  {alert("May cung duoc day");
// console.log("may cung duoc day");
// }






// bai8: nhap 2 so, kiem tra so nao lon hon va in ra man hinh:
//  let a = prompt(" a= ");
//  let b = prompt(" b= ");
//  if (a>b){
//     alert(a + " lon hon ");
//     console.log(a + " lon hon");
// }else {
//     alert(b + " lon hon ");
//     console.log(b + " lon hon");
// }






// // bai9
// // Viết một đoạn mã cho phép người dùng
// //  nhập vào 2 số a và b và 
// // nhập vào phép tính toán (+, -, *, /,%,**).
// //  Sử dụng Switch-case 
// // mô phỏng lại chức năng của 
// // một máy tính cầm tay đơn giản 
// // và sau đó in kết quả ra màn hình console


// let a = Number(prompt("a="));
// let b = Number(prompt("b= "));
// let p = prompt("phep tinh cua ban");
// let pt;
// let T;
// if (p== "+" )
// {
//     T = a + b;
//     alert("ket qua la : " + T);
//     console.log("ket qua la : " + T);
// }
// else if  ( p== "-" ){
//     T = a - b;
//     alert("ket qua la : " + T);
//     console.log("ket qua la : " + T);
// }
// else if  ( p== "*" ){
//     T = a *b;
//     alert("ket qua la : " + T);
//     console.log("ket qua la : " + T)
// }
// else if  ( p== "/" ){
//     T = a /b ;
//     alert("ket qua la : " + T);
//     console.log("ket qua la : " + T);
// }
// else if  ( p== "%" ){
//     T = a % b;
//     alert("ket qua la : " + T);
//     console.log("ket qua la : " + T)
// }
// else if  ( p== "**" ){
//     T = a **b;
//     alert("ket qua la : " + T);
//     console.log("ket qua la : " + T)
// }
// else  {
//     T = a *b;
//     alert("phep tinh bi sai");
//     console.log("phep tinh bi sai");
// }


// bai9 su dung swich case

// let a = Number(prompt("a="));   
// let b = Number(prompt("b= "));
// let p = prompt("phep tinh cua ban");
// let pt;
// let T;
//  switch (p) {
//     case "+":
//         T = a+b;
//         console.log("ket qua =",T)
//         break;
//     case "*":
//         T = a*b;
//         console.log("ket qua = ",T);
//         break;
//     case "-":
//         T = a-b;
//         console.log("ket qua =",T)
//         break;
//     case "/":
//         T = a/b;
//         console.log("ket qua = ",T);
//         break;
//     case "%":
//         T = a%b;
//         console.log("ket qua =",T)
//         break;
//     case "**":
//         T = a**b;
//         console.log("ket qua = ",T);
//         break;
 
//     default:
//         console.log("phep tinh bi sai");
//         break;
//  }







// bai10: nhap 3 so: kiem tra va in ra so min so max.


// let a = Number(prompt(" a = "));
// let b = Number(prompt(" b = "));
// let c = Number(prompt(" c = "));
// let min;
// let max;
//  if (a>b & a>c){
//     max = a;
//  }
//  else if (b>a & b>c){
//     max = b;  
//  }
//  else if (c>a & c>b){
//     max = c;  
//  }
//  else {max =a};
//  console.log("max la : " + max);
//  if (a<b & a<c){
//     min = a;
//  }
//  else if (b<a & b<c){
//     min = b;  
//  }
//  else if (c<a & c<b){
//     min = c;  
//  }
//  else {min =a};
//  console.log("min la : " + min);







// bai11
// kiem tra so da nhap co phai so chinh phuong khong.


//  let cp = Number(prompt("moi nhap so"));
//  let p = Math.sqrt(cp);
//  console.log(p);
 
//  if (Number.isInteger(p)== true){
//     console.log(cp +"la so chinh phuong");
//     alert(cp +"la so chinh phuong");
// }
// else{console.log(cp + "ko phai la so chinh phuong");

// alert(cp +"la ko phai so chinh phuong");

// }









// // bai14* nhap 3 canh tam giac, kiem tra xem co phai tam giac ko.
//  let a = Number(prompt("do dai canh a:"));
//  let b = Number(prompt("do dai canh b:"));
//  let c = Number(prompt("do dai canh c:"));
//  if(a+b<=c||
//     a+c<=b||
//     c+b<=a){
//         console.log("ko phai hinh tam giac");
// }
//     else{
//         console.log("la hinh tam giac")
    // }





   



// ba12: cung hoang dao ( do dai qua nen lam 2 thang dai dien)

//   let D = Number(prompt("moi  nhap ngay sinh cua ban"));
//   let M =Number(prompt("moi nhap thang sinh cua ban"));
//   var i;
// switch (M) {
//     case 1:
//         switch (D) {
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//             case 5:
//             case 6:
//             case 7:
//             case 8:
//             case 9:
//             case 10:
//             case 11:
//             case 12:   
//             case 13:
//             case 14:
//             case 15:
//             case 16:
//             case 17:
//             case 18:
//             case 19:  
//         console.log("ban thuoc cung Ma Ket");
//         break;
            
//             case 20:
//             case 21:
//             case 22:
//             case 23:
//             case 24:
//             case 25:
//             case 26:
//             case 27:
//             case 28:
//             case 29:
//             case 30:
//         console.log("may thuoc cung Bao Binh");
//         break;
           
//         default:
//         break;
//         }
//         break;
//     case 2:
//         switch (D) {
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//             case 5:
//             case 6:
//             case 7:
//             case 8:
//             case 9:
//             case 10:
//             case 11:
//             case 12:   
//             case 13:
//             case 14:
//             case 15:
//             case 16:
//             case 17:
//             case 18:
                
//         console.log("ban thuoc cung Bao Binh");
//         break;
//             case 19:
//             case 20:
//             case 21:
//             case 22:
//             case 23:
//             case 24:
//             case 25:
//             case 26:
//             case 27:
//             case 28:
//             case 29  :
//         console.log("may thuoc cung Song Ngu");
//         break;
           
//         default:
//         break;
//         }
//         break;
//     case 3:
//         switch (D) {
//                 case 1:
//                 case 2:
//                 case 3:
//                 case 4:
//                 case 5:
//                 case 6:
//                 case 7:
//                 case 8:
//                 case 9:
//                 case 10:
//                 case 11:
//                 case 12:   
//                 case 13:
//                 case 14:
//                 case 15:
//                 case 16:
//                 case 17:
//                 case 18:
//                 case 19:
//                 case 20:
//             console.log("ban thuoc cung Song Ngu");
//             break;
//                 case 21:
//                 case 22:
//                 case 23:
//                 case 24:
//                 case 25:
//                 case 26:
//                 case 27:
//                 case 28:
//                 case 29:
//                 case 30:
//                 case 31:
//             console.log("may thuoc cung Bach Duong");
//             break;
           
//             default:
//                 break;
//         }
//         break;
// case 4:
//     switch (D) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:   
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//         case 19:
//             console.log("ban thuoc cung Bach Duong");
//             break;
//         case 20:
//         case 21:
//         case 22:
//         case 23:
//         case 24:
//         case 25:
//         case 26:
//         case 27:
//         case 28:
//         case 29:
//         case 30:
//             console.log("may thuoc cung Kim Nguu");
//             break;
//         default:
//             break;
//     }
//     case 5:
//     switch (D) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:   
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//         case 19:
//         case 20:
//             console.log("ban thuoc cung Kim Nguu");
//             break;
        
//         case 21:
//         case 22:
//         case 23:
//         case 24:
//         case 25:
//         case 26:
//         case 27:
//         case 28:
//         case 29:
//         case 30:
//         case 31:
//             console.log("may thuoc cung Song Tu");
//             break;
//         default:
//             break;
//     }
//     case 6:
//     switch (D) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:   
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//         case 19:
//         case 20:
//         case 21:
//             console.log("ban thuoc cung Song Tu");
//             break;
//         case 22:
//         case 23:
//         case 24:
//         case 25:
//         case 26:
//         case 27:
//         case 28:
//         case 29:
//         case 30:
//             console.log("may thuoc cung Cu Giai");
//             break;
//         default:
//             break;
//     }
//     case 7:
//         switch (D) {
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//             case 5:
//             case 6:
//             case 7:
//             case 8:
//             case 9:
//             case 10:
//             case 11:
//             case 12:   
//             case 13:
//             case 14:
//             case 15:
//             case 16:
//             case 17:
//             case 18:
//             case 19:  
//             case 20:
//             case 21:
//             case 22:
//         console.log("ban thuoc cung Cu Giai");
//         break;
//             case 23:
//             case 24:
//             case 25:
//             case 26:
//             case 27:
//             case 28:
//             case 29:
//             case 30:
//             case 31:
//         console.log("may thuoc cung Su Tu");
//         break;
           
//         default:
//         break;
//         }
//         break;
//     case 8:
//         switch (D) {
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//             case 5:
//             case 6:
//             case 7:
//             case 8:
//             case 9:
//             case 10:
//             case 11:
//             case 12:   
//             case 13:
//             case 14:
//             case 15:
//             case 16:
//             case 17:
//             case 18:
//             case 19:
//             case 20:
//             case 21:
//             case 22:
                
//         console.log("ban thuoc cung Su Tu");
//         break;
            
//             case 23:
//             case 24:
//             case 25:
//             case 26:
//             case 27:
//             case 28:
//             case 29:
//             case 30:
//             case 31:
//         console.log("may thuoc cung Xu Nu");
//         break;
           
//         default:
//         break;
//         }
//         break;
//     case 9:
//         switch (D) {
//                 case 1:
//                 case 2:
//                 case 3:
//                 case 4:
//                 case 5:
//                 case 6:
//                 case 7:
//                 case 8:
//                 case 9:
//                 case 10:
//                 case 11:
//                 case 12:   
//                 case 13:
//                 case 14:
//                 case 15:
//                 case 16:
//                 case 17:
//                 case 18:
//                 case 19:
//                 case 20:
//                 case 21:
//                 case 22:
//             console.log("ban thuoc cung XU Nu");
//             break;
                
//                 case 23:
//                 case 24:
//                 case 25:
//                 case 26:
//                 case 27:
//                 case 28:
//                 case 29:
//                 case 30:
//             console.log("may thuoc cung Thien Binh");
//             break;
           
//             default:
//                 break;
//         }
//         break;
// case 10:
//     switch (D) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:   
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//         case 19:
//         case 20:
//         case 21:
//         case 22:
//         case 23:
//             console.log("ban thuoc cung Thien Binh ");
//             break;
        
//         case 24:
//         case 25:
//         case 26:
//         case 27:
//         case 28:
//         case 29:
//         case 30:
//         case 31:
//             console.log("may thuoc cung Ho Cap");
//             break;
//         default:
//             break;
//     }
//     case 11:
//     switch (D) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:   
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//         case 19:
//         case 20:
//         case 21:
//             console.log("ban thuoc cung Ho Cap");
//             break;
        
        
//         case 22:
//         case 23:
//         case 24:
//         case 25:
//         case 26:
//         case 27:
//         case 28:
//         case 29:
//         case 30:
        
//             console.log("may thuoc cung Nhan Ma");
//             break;
//         default:
//             break;
//     }
//     case 12:
//     switch (D) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:   
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//         case 19:
//         case 20:
//         case 21:
//             console.log("ban thuoc cung Nhan Ma");
//             break;
//         case 22:
//         case 23:
//         case 24:
//         case 25:
//         case 26:
//         case 27:
//         case 28:
//         case 29:
//         case 30:
//         case 31:
//             console.log("may thuoc cung Ma ket");
//             break;
//         default:
//             break;
//     }
//     default: console.log("nhap sai ngay thang,moi nhap lai");
//         break;
// }





// // bai12( lam theo kieu if else)


//  let D = Number(prompt(" ngay sinh cua ban la: "));
//  let M = Number( prompt("thang sinh cua ban la: "));
// if(M===1){
//   if(D>0&D<20){
//     console.log(" Ban thuoc cung Ma Ket");
//   }
//   else if(D>19 & D<=31){
//     console.log("Ban Thuoc cung Bao Binh");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===2){ 
//     if(D>0&D<19){
//     console.log(" Ban thuoc cung Bao Binh");
//   }
//   else if(D>18 & D<=29){
//     console.log("Ban Thuoc cung Song Ngu");
//   }
//   else{console.log("ban nhap sai")};
// }

// else if (M===3)
// { 
//     if(D>0&D<21){
//     console.log(" Ban thuoc cung Song Ngu");
//   }
//   else if(D>20 & D<=31){
//     console.log("Ban Thuoc cung Bach Duong");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===4){ 
//     if(D>0&D<20){
//     console.log(" Ban thuoc cung Bach Duong");
//   }
//   else if(D>19 & D<=30){
//     console.log("Ban Thuoc cung Kim Nguu");
//   }
//   else{console.log("ban nhap sai")};
// }else if (M===5){ 
//     if(D>0&D<22){
//     console.log(" Ban thuoc cung Kim Nguu");
//   }
//   else if(D>21 & D<=31){
//     console.log("Ban Thuoc cung Song Tu");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===6){ 
//     if(D>0&D<22){
//     console.log(" Ban thuoc cung Song Tu");
//   }
//   else if(D>21 & D<=30){
//     console.log("Ban Thuoc cung Cu Giai");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===7){ 
//     if(D>0&D<23){
//     console.log(" Ban thuoc cung Cu Giai");
//   }
//   else if(D>22 & D<=31){
//     console.log("Ban Thuoc cung Su Tu");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===8){ 
//     if(D>0&D<23){
//     console.log(" Ban thuoc cung Su Tu");
//   }
//   else if(D>22 & D<=31){
//     console.log("Ban Thuoc cung Xu Nu");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===9){ 
//     if(D>0&D<23){
//     console.log(" Ban thuoc cung Xu Nu");
//   }
//   else if(D>22 & D<=30){
//     console.log("Ban Thuoc cung Thien Binh");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===10){ 
//     if(D>0&D<24){
//     console.log(" Ban thuoc cung Thien Binh");
//   }
//   else if(D>23 & D<=31){
//     console.log("Ban Thuoc cung Ho Cap");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===11){ 
//     if(D>0&D<22){
//     console.log(" Ban thuoc cung Ho Cap");
//   }
//   else if(D>21 & D<=30){
//     console.log("Ban Thuoc cung Nhan Ma");
//   }
//   else{console.log("ban nhap sai")};
// }
// else if (M===12){ 
//     if(D>0&D<22){
//     console.log(" Ban thuoc cung Nhan Ma");
//   }
//   else if(D>21 & D<=31){
//     console.log("Ban Thuoc cung Ma Ket");
//   }
//   else{console.log("ban nhap sai")};
// }
// else(console.log(" ngay sinh khong hop le"));





