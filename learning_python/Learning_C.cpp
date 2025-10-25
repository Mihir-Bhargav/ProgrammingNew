#include <iostream> 
#include <string>
#include <cmath> 
#include <ctime>

// namespace first{
//     int x =1; 
// }
// namespace second{
//     int x =0; 
// }

// typedef std::string text_t;


// int main(){ 
    // using std:: cout can be used to avoid rewrting that every single time. 
    // std:: cout <<second:: x <<'\n';
    // std:: cout <<first:: x <<'\n';
    // // As we can see, the same variable x has 2 values without throwing erros; namespaces!

    // // std::string firstName = Mihir Can be rewritten as ____ using the typedef 
    // text_t firstName = "Mihir"; 
    // std:: cout << firstName <<'\n'; 
    // int x = 64; 
    // int y = 8; 
    // int sum = x + y;
    // std:: cout<<sum << '\n'; 
    // std:: cout<<"I Like Pizza" <<'\n'; 
    // double price = 10.99;
    // int numPers = 11;
    // double avgCost = price / numPers;
    // std::cout << avgCost << '\n';

    // std:: string name = "Mihir";
    // std:: string food = "Pizza";
    // std:: cout <<"Hello " << name <<'\n';
    // std:: cout <<"I like " << food <<'\n'; 
    // // the char data type can store a single charecter. 
    // const double PI = 3.14159; 
    // int diameter = 12; 
    // double circum = PI * diameter;
    // std:: cout <<circum <<'\n'; 
    
    // return 0;
// } 

// int main(){
    // int students = 20; 
    // students +=1;
    // std:: cout <<students;

    // double x = (int) 3.14;
    // std:: cout<< x;

    // std:: cout << (char) 100;
    // return 0;  
    // // Can be applied to integer division if 0% returned, integers ignore decimals. 

    // std:: string name; 
    // int age;

    // std:: cout << "What's your name ? " <<'\n';
    // std::getline(std::cin >> std::ws, name); 
    // std:: cout << "What's your age? " <<'\n'; 
    // std::cin >> age; 

    // std::cout << "Hello " << name << "!" <<'\n'; 
    // std::cout <<"You are " << age << " years old"; 

    // return 0;

    // double x = 3;
    // double y = 4;
    // double z; 
    // z = std::max(x, y) ; 
    // // Returns the gratest number between x, y which is 4. 
    // z = std::min(x, y);
    // z = sqrt(9);
    // z = abs(-3);
    // z = round(x); 
    // z = ceil(x);
    // z= floor(x); 
    // std::cout<< z<< '\n'; 
// } 

// int main(){
//     // int a;
//     // int b;
//     // std::cout<<"Welcome to the hypotenuse calculator!" <<'\n';
//     // std::cout<<"Enter the height "<<'\n'; 
//     // std::cin>> a; 
//     // std::cout<<"Enter the width" << '\n';
//     // std::cin>> b; 
//     // double hypotenuse = sqrt((a*a )+ (b*b));
//     // std::cout<< "The hypotenuse of your triangle is " <<hypotenuse <<" area units.";

//     int age; 
//     std::cout << "Enter your age: ";
//     std::cin >> age;
//     if(age >= 18 ){
//         std::cout << "Welcome to the site!";}
//     else{
//         std::cout << "You are not old enough to enter!";}
//     return 0; 

//     // You can use Case and break as an alternative to many else if statements. SYntax just like JS. 

//     int day; 
//     switch(day){
//     case 1:
//     std::cout <<"1"; 
//     break;
//     case 2: 
//     std::cout <<"2"; 
//     }
// }


// int main() {
//     char op;  
//     double num1;
//     double num2;
//     double result;

//     std::cout << "************CALCULATOR************\n";
//     std::cout << "Enter the desired operation (+, -, *, /): ";
//     std::cin >> op;

//     std::cout << "Enter the first number: ";
//     std::cin >> num1;

//     std::cout << "Enter the second number: ";
//     std::cin >> num2;

//     if (op == '+') {
//         result = num1 + num2;
//         std::cout << "Result: " << result << '\n';
//     } else if (op == '-') {
//         result = num1 - num2;
//         std::cout << "Result: " << result << '\n';
//     } else if (op == '*') {
//         result = num1 * num2;
//         std::cout << "Result: " << result << '\n';
//     } else if (op == '/') {
//         if (num2 != 0) {
//             result = num1 / num2;
//             std::cout << "Result: " << result << '\n';
//         } else {
//             std::cout << "Error: Division by zero is undefined.\n";
//         }
//     } else {
//         std::cout << "Invalid operation. Please select one of (+, -, *, /).\n";
//     }

//     std::cout << "*********************************\n";
//     return 0;
// }

// int main() {
//     double temp;
//     char unit;

//     std::cout << "=== Temperature Converter ===\n";
//     std::cout << "Enter temperature: ";
//     std::cin >> temp;

//     std::cout << "Convert to (C for Celsius, F for Fahrenheit): ";
//     std::cin >> unit;

//     if (unit == 'F' || unit == 'f') {
//         double result = (temp * 9.0 / 5.0) + 32;
//         std::cout << "Temperature in Fahrenheit: " << result << "°F\n";
//     } else if (unit == 'C' || unit == 'c') {
//         double result = (temp - 32) * 5.0 / 9.0;
//         std::cout << "Temperature in Celsius: " << result << "°C\n";
//     } else {
//         std::cout << "Invalid unit. Please enter 'C' or 'F'.\n";
//     }

//     std::cout << "=============================\n";

    // std::string name;
    // while (name.empty())
    // {
    //     std:: cout<<"Enter your name " <<"\n";
    //     std::getline(std::cin, name);
    // }

    // std:: cout << "Hello! " <<name <<"\n"; 

    // name.clear()
    // name.append()
    // name.empty() => Useful string methods in C++
    // Do while loop  => repeat a code if a condition is true. 


//     for(int i = 1; i<= 3; i++){
//         std::cout <<"Happy New year" <<"\n";
//     }

//     return 0;
// } 

// int main(){
//     for (int i = 1; i <= 3; ++i) {               // Outer loop
//         for (int j = 1; j <= 5; ++j) {           // Inner loop
//             std::cout << j << " ";               // Print numbers 1 to 5
//         }
//         std::cout << "\n";                       // New line after each row
//     }
//     return 0;
// }

// int main(){
//     srand(time(NULL)); 
//     int num = (rand() % 6) + 1;
//     std:: cout<< num; 

// }
 
int main(){
    std::string username;
    std::cout << "What is your name? ";
    std::cin >> username;
    std::cout << "Your name is " << username << std::endl;

    
}