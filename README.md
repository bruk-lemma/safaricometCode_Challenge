(a)

//this java code demostartes the concept of magic numbers in a function and another function for reversing string.

import java.util.Arrays;

public class Main {
public static void main(String[] args) {
System.out.println(isMagicNumber(163));
System.out.println(reverseString("Hello, World!"));
}

    public static boolean isMagicNumber(int number) {
        while (number > 9) {
            number = Arrays.stream(String.valueOf(number).split(""))
                    .mapToInt(Integer::parseInt)
                    .sum();
        }
        return number == 1;
    }

/_B_/ public static String reverseString(String str) {
return new StringBuilder(str).reverse().toString();
}
}

// Big(O) explanantion for the reverse function.

/\*\*

- Splitting the string: The split method is used to split the string into an array of characters.
- This operation takes linear time O(n), where n is the length of the string.
-
- Reversing the array: The reverse method of StringBuilder is used to reverse the array of characters.
- Reversing an array of length n can be done in linear time as well, i.e., O(n)
-
- Joining the characters: The toString method is used to join the reversed array of characters back into a string. This operation takes linear
- time as it iterates over the characters to create the resulting string. Again, this is O(n).
-
- Therefore, the overall time complexity of the reverseString function is O(n), where n is the length of the input string.
- It performs a linear number of operations proportional to the length of the string.
  \*/

(D)" why is the remove method faster in linked list than an array"

//answer

/_The remove operation is faster in a linked list
than in an array because removing an element from a linked list only requires
updating a few pointers, while removing an element from an array requires
shifting the remaining elements to fill the gap left by the removal, which can be time-consuming._/

(E) "the difference bewtween equals methode and equality operator in java"
//answer
/\*\*
The equals method is a method defined in the Object class and can be overridden by subclasses to define custom equality logic.
The equals method compares the content or value of objects for equality, based on how it is implemented by the class.
The equality operator (==) checks for reference equality, comparing if two objects refer to the same memory location in Java.
While equals compares the actual content, the equality operator checks for reference equality and is generally used to compare primitive types or check if two objects are the same instance

\*/

(F) "the definition of method overloading and method overriding in java"

//answer

/_method overloading involves defining multiple methods
with the same name but different parameters within
a class, while method overriding occurs when a subclass provides its implementation
for a method already defined in its superclass. Overloading is determined at compile-time based on method signatures, while overriding is determined at runtime based on the actual object type._/

(G) "the difference between abstract class and interfaces"

//answer

/_An abstract class can have both abstract and non-abstract methods, while an interface can only have abstract methods.
A class can extend only one abstract class, but it can implement multiple interfaces.
An abstract class can have instance variables, whereas interfaces can only have constants (static final variables)."
An abstract class can provide default implementations for some or all of its methods, whereas an interface cannot provide any implementation, only method signatures._/

//Multichoice answers

//1 B

//2 C

//3 B

//4 B

//5 B

//6 A

//7 C

//8 B

//9 A

//10 B
