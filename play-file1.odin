package main

import "core:fmt"
import "core:os"

variables :: proc() {
    //declare variables
    name := "Javier"
    name2: string = "Javier"
    fmt.println(name)
    fmt.println(name2)

    //constant variables
    nameConst :: "Javier"
    nameConst2 : string : "Javier"
    fmt.println(nameConst)
    fmt.println(nameConst2)
}


main :: proc() {
    fmt.println("Hello from Odin!")
    variables()
    fmt.println("home directory is ", os.get_env("HOME"))
}
//odin run play-file1.odin -file