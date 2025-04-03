// C#
// Console.WriteLine("Hello");

public void FizzBuzz(int arg)
{
    if(arg % 5 == 0 && arg % 3 == 0)
    {
        Console.WriteLine("FizzBuzz");
    } else if (arg % 5 == 0)
    {
        Console.WriteLine("Fizz");
    } else if (arg % 3 == 0)
    {
        Console.WriteLine("Buzz");
    } else 
    {
        Console.WriteLine("Error");
    }
}

FizzBuzz(15);
FizzBuzz(5);
FizzBuzz(3);
FizzBuzz(2);

// dotnet script play-file1.csx