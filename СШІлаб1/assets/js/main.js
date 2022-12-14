function btnClick()
{
    document.getElementById("btnFile").click = true;
}
function readFile(input)
{
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function()
    {
        console.log(reader.result);
        let mas = reader.result;
        
        let base = [311, 220, 230, 320, 200, 211, 202, 420, 421, 12];
        let baseChar = ["A", "C", "E", "G", "I", "K", "M", "O", "Q", "S"];

        let iterator = 0;
        let hor = 0;
        let ver = 0;
        let diag = 0;

        let array = new Array(
            new Array("", "", "", "", ""),
            new Array("", "", "", "", ""),
            new Array("", "", "", "", ""),
            new Array("", "", "", "", ""),
            new Array("", "", "", "", ""),
            new Array("", "", "", "", ""),
            new Array("", "", "", "", ""),
            new Array("", "", "", "", ""),
            new Array("", "", "", "", ""),
        )

        //creating array
        for (i = 0; i < 9; i++)
        {
            for (j = 0; j < 5;)
            {
                if (mas[iterator] != '\n' && mas[iterator] != ' ' && mas[iterator] != '\r')
                {
                    array[i][j] = mas[iterator];
                    j++;
                }
                iterator++;
            }
        }

        //horizontal
        for (i = 0; i < 9; i+=4)
        {
            for (j = 1; j < 4; j++)
            {
                if (array[i][j] == 1)
                {
                    hor++;
                }
            }
        }
        console.log("Hor = " + hor);
        hor/=3;
        console.log("Hor/3 = " + hor);
        console.log("");

        //vertical
        for (i = 0; i <= 4; i+=4)
        {
            for (j = 1; j < 8; j++)
            {
                if (j == 4)
                {
                    continue;
                }
                if (array[j][i] == 1)
                {
                    ver++;
                }
            }
        }
        
        console.log("Vert = " + ver);
        ver/=3;
        console.log("Vert/3 = " + ver);
        console.log("");


        //oblique

        for(i = 1; i < 9; i++)
        {
            if(i == 4)
            {
                continue;
            }
            for(j = 3; j >= 1; j--)
            {
                if (array[i][j] == 1)
                {
                    diag++;
                }
                i++;
            }

        }

        console.log("Diag = " + diag);
        diag/=3;
        console.log("Diag/3 = " + diag);


        let key;

        if (hor == 0)
        {
            key = 100 * ver + diag;
        }
        else
        {
            key = 100 * ver + 10 * hor + diag;
        }

        switch(key)
        {
            case base[0]: letter = baseChar[0]; break;

            case base[1]: letter = baseChar[1]; break;

            case base[2]: letter = baseChar[2]; break;

            case base[3]: letter = baseChar[3]; break;

            case base[4]: letter = baseChar[4]; break;

            case base[5]: letter = baseChar[5]; break;

            case base[6]: letter = baseChar[6]; break;

            case base[7]: letter = baseChar[7]; break;

            case base[8]: letter = baseChar[8]; break;

            case base[9]: letter = baseChar[9]; break;

            default: letter = "Немежливе оброблення файлу " + file.name;
        }

        document.getElementById("popup_text_input").innerHTML = letter;

        console.log(array);
    }  
}
