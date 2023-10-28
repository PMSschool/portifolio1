let scrollHeader = document.querySelector("header");

window.onscroll = function (){
  if(window.scrollY <= 100){
    scrollHeader.classList.add("back-c");
    scrollHeader.style.backgroundColor = "transparent"
  }else{
    scrollHeader.classList.remove("back-c");
    scrollHeader.style.backgroundColor = "rgba(228, 228, 228, 0.4117647059)"
  }
};


let iconHeader = document.querySelector("header .icon");
let ulHeader = document.querySelector("header ul");

iconHeader.onclick=() =>{
  ulHeader.classList.toggle("open")
}
// void initialize(int& zeroCount, int& oddCount, int& evenCount){
//   zeroCount = 0;
  // oddCount = 0;
//   evenCount= 0;
// }
// void getNumber(int& num){
//   cin >>num;
// }
// void classifyNumber(int num, int& zeroCount, int&evenCount){
//   switch (num % 2){
//     case 0 :
//       evenCount++;
//       if (num == 0)
//         zeroCount++;
//     break;
//     case 1 :
//     case -1:
//       oddCount++;
//   }
// }
// void printResulte(int zeroCount,int oddCount,int evenCount){
//   cout << "there are " << evenCount << "evens, "
//        <<"which includes "<< zeroCount << "zeros"
//        <<endl;
//   cout <<"the number off odd numbers is :"<< oddCount<<   endl;
// }

// int main{
//   int counter;
//   int number;
//   int zeros;\tg
//   int odds;
//   int evens;

//   initialize(zeros, odds, evens)
//   cout << "please enter" << N <<"integers."<<endl;
//   cout <<"rhe numbers you entered are: "<<endl;
//   for (counter = 1; counter <= N;counter++){
//     getNumber(number);
//     cout << number <<"";
//     classifyNumber(number,zeros, odds, evens);

//   }
//   count << endl; 
//   printResulte(zeros, odds , evens);
//   return 0 ;
// }