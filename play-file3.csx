// declaring variables
//string
string myString = "myString";
// integer
int myInt = 1;
// array of integers
int[] myIntArray = {1,2,3};
// array of strings
string[] myStrArray = {"One","Two","Three"}
//array of booleans
bool[] myBoolArray = {true, false,true}
//Array of mixed data types
object[] myMixedArray = {1,"Two", false}

//accessing index in myMixedArray with and without Casting:
//if you're accessing an array with mixed data types, you NEED casting

//without casting:
string secondInd = myStrArray[1]

//with casting:
int firstInd = (int)myMixedArray[0]
// dotnet script play-file3.csx