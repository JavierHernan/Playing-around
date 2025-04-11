
public class Character
{
    //variable
    private int characterNumber;

    //property
    public string Name {get;set;}
    public string Weapon {get; set;}

    //constructor
    public()
    {
        characterNumber = 0;
        Name = "Javier";
    }

    //Method
    public void Equip(weapon)
    {
        Weapon = weapon;
    }
}

// dotnet script play-file4.csx