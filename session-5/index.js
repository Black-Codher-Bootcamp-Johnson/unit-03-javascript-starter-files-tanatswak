function getGrade (total) { 
    if (total >90)
    {
        console.log("You have graded A+")
    } else if (total >80)
    {
        console.log("You have graded A")
    }
    else if (total >70)
    {
        console.log("You have graded B")
    }
    else if (total >60)
    {
        console.log("You have graded C")
    }
    else if (total >50)
    {
        console.log("You have graded D")
    }
    else if (total >40)
    {
        console.log("You have graded E")
    }
    else if (total >30)
    {
        console.log("You have graded F")
    }
    else
    {
        console.log("Fail")
    }
};
getGrade (93)


//just else for fail