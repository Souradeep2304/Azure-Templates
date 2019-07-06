/*
 * ***************************************************
 * PROBLEM STATEMENT:                                *
 * ------------------                                *
 * Given a string list,                              *
 * return a version without duplicates,              *
 * so {'Hello', 'Hello'} yields {'Hello'}            *
 * The words should be case sensitive                *
 *                                                   *
 * Example 1:                                        *
 * Input: Hello world Hello                          *
 *                                                   *
 * Output: Hello world                               *
 *                                                   *
 * Example 2:                                        *
 *                                                   *
 * input: a b c a d                                  *
 *                                                   *
 * output: a b c d                                   *
 *                                                   *
 *****************************************************
 */
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

/*
 * **********************************
 * DO NOT EDIT THE FOLLOWING CLASS  *
 * **********************************
 */
public class Main {
    /*
     * ********************************** 
     * DO NOT RENAME FOLLOWING METHOD   *
     * **********************************
     */
    static List<String> findDuplicates(final List<String> listContainingDuplicates){
        List<String> nonDuplicateStrings = new ArrayList<>();
        
        //YOUR CODE STARTS HERE
        
        for (String element :listContainingDuplicates)
        {
            if(!nonDuplicateStrings.contains(element))
            nonDuplicateStrings.add(element);
            
        }
        
        //YOUR CODE ENDS HERE
        
        return nonDuplicateStrings;
    }

    /*
     * **********************************
     * DO NOT EDIT THE FOLLOWING METHOD *
     * **********************************
     */
    static List<String> stringToListString(final String line){
        String[] arrayString = line.split(" ");
        List<String> arrayOne = new ArrayList<>();
        for (String a : arrayString) {
            arrayOne.add(a);
        }
        return arrayOne;
    }
    
    /*
     * **********************************
     * DO NOT EDIT THE FOLLOWING METHOD *
     * **********************************
     */
    static void printArray(final List<String> array) {
        for (int i = 0; i < array.size(); i++) {
            System.out.print(array.get(i));
            if (i != array.size() - 1) {
                System.out.print(" ");
            }
        }

    }
    
    /*
     * ********************************** 
     * DO NOT EDIT THE FOLLOWING METHOD *
     * **********************************
     */
    public static void main(String[] args) throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in, "UTF-8");
        BufferedReader br = new BufferedReader(isr);
        String inputString = br.readLine();
        isr.close();
        printArray(findDuplicates(stringToListString(inputString)));
        
    }

}
