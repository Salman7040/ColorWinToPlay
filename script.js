        
        
        
        
        let boxes = document.getElementsByClassName("box")
        let con = document.getElementsByClassName("con")
        let t1 = document.getElementById("turn1")
        let t2 = document.getElementById("turn2")
        let blueGetScore=document.getElementById("blue")
        let yellowGetScore=document.getElementById("yellow")
        let hideAfterWin=document.getElementById("winName")
        let win1=document.getElementById("win1")
        let win2=document.getElementById("win2")
        
        

        boxes[0].style = "border-top:0.2rem solid transparent;border-left:0.2rem solid transparent;"
        boxes[1].style = "border-top:0.2rem solid transparent;"
        boxes[2].style = "border-top:0.2rem solid transparent;border-right:0.2rem solid transparent;"
        boxes[3].style = "border-left:0.2rem solid transparent;"
        boxes[5].style = "border-right:0.2rem solid transparent;"
        boxes[6].style = "border-left:0.2rem solid transparent;border-bottom:0.2rem solid transparent;"
        boxes[7].style = "border-bottom:0.2rem solid transparent;"
        boxes[8].style = "border-bottom:0.2rem solid transparent;border-right:0.2rem solid transparent;"

        let bool = true
        let yellow_cou = 0
        let blue_cou = 0
        let validate = []
        let che = 0
        let id_name_str = []
        let inc_id_index = 0
        let run_or_not = false
        let store_color_or_name = {}
        let incre_no_index = 0
        let blue_score=0;
        let yellow_score=0;
        let gameDraw=0

        

        const comb_of_win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]


        function colorCha(colorChoose){
            if(colorChoose=="yellow"){
            bool=true
            t2.style="border: 1rem solid red;"
            
            }
            else if(colorChoose=="blue"){
            bool=false
            t1.style="border: 1rem solid cyan;"
            
            }
            

        }

function increasScore(scorePoint,colorName){
    if(colorName=="yellow")
    {
        hideAfterWin.style="visibility:visible;"
        yellowGetScore.innerText=scorePoint
        win1.style="visibility:visible;"
        win2.style="visibility:hidden;"
        
    }
    else if(colorName=="blue"){
        hideAfterWin.style="visibility:visible;"
        blueGetScore.innerText=scorePoint
        win1.style="visibility:hidden;"
        win2.style="visibility:visible;"
        
    }
    

}

function clearScore(){
            yellowGetScore.innerText="00"
            blueGetScore.innerText="00"
}

        function changeTurn(turn) {
            if (turn == "yellow") {
                t2.style = "border: 0.2rem solid black"
                t1.style = "border: 1rem solid rgb(252, 71, 71);"

            }
            else if (turn == "blue") {
                t1.style = "border: 0.2rem solid black"
                t2.style = "border: 1rem solid rgb(252, 71, 71);"

            }
        }

        function reset() {
            for (let i = 0; i < id_name_str.length; i++) {
                //for clear current playing game
                document.getElementById("" + id_name_str[i] + "").innerHTML = ""
            }
            bool = true
            yellow_cou = 0
            blue_cou = 0
            validate = []
            che = 0
            id_name_str = []
            inc_id_index = 0
            run_or_not = false
            store_color_or_name = {}
            incre_no_index = 0
            gameDraw=0

            t1.style = "border: 0.2rem solid black"
            t2.style = "border: 0.2rem solid gray"
            hideAfterWin.style="visibility:hidden;"
            win1.style="visibility:hidden;"
            win2.style="visibility:hidden;"
            
        }
       
        

            

            function hideDrawMsg(){
                document.getElementById("match-draw").style="visibility:hidden;"
            }
        function drawGame() {
            document.getElementById("match-draw").style="visibility:visible;"
            setInterval(hideDrawMsg,2000)
            let draw= new Audio('drawgame.mp3');
            draw.play();
        }
        function clickAudio1() {
            let audio1 = new Audio('click2.mp3');
            audio1.play();
        }

        function clickAudio2() {
            let audio2 = new Audio('click.mp3');
            audio2.play();
        }

        function win_Cheer() {
            let audio3 = new Audio('cheer.mp3');
            audio3.play();
        }
        function getStyle(idName, colorName) {
            return "<style>#" + idName + "{background-color: " + colorName + " ;padding:5rem;height:19.5rem;width:19.5rem;border:0.1rem solid black;border-radius:50%;}</style>"
        }

        
        // for the color name :colr_name[1]
        //for the div id name :id_name[1]
        function call(no) {

            //check is repeated or not    
            if (validate.includes(no) == true) {
                run_or_not = false
            }
            else {
                run_or_not = true
                // after checking its repeated or not store no value in validate array
                validate[incre_no_index] = no;
                incre_no_index++;
            }

            if (run_or_not == true) {

                run_or_not = false
                if (bool == true) {
                    clickAudio1()
                    changeTurn("yellow")
                    let pr = boxes[no].innerHTML = "<div id='cir" + no + "'><div>"
                    let id_name = pr.split("'")
                    id_name_str[inc_id_index] = id_name[1]

                    inc_id_index++
                    let colr_str = document.getElementById(id_name[1]).innerHTML = getStyle(id_name[1], "yellow")
                    let colr_name = colr_str.split(" ")
                    bool = false
                    yellow_cou++
                    gameDraw++

                    store_color_or_name[no] = colr_name[1]
                    if (yellow_cou == 3) {
                        let x = validate_for_win("yellow")
                        if (x == true) {
                            win_Cheer()
                            yellow_score+=1
                            gameDraw=0
                        increasScore(yellow_score,"yellow");
                        }
                        else
                            yellow_cou -= 1
                    }
                }
                else {
                    clickAudio2()
                    changeTurn("blue")
                    let pr = boxes[no].innerHTML = "<div id='cir" + no + "'><div>"
                    let id_name = pr.split("'")
                    id_name_str[inc_id_index] = id_name[1]
                    inc_id_index++
                    let colr_str = document.getElementById(id_name[1]).innerHTML = getStyle(id_name[1], "blue")
                    let colr_name = colr_str.split(" ")
                    bool = true
                    blue_cou++
                    gameDraw++
                    store_color_or_name[no] = colr_name[1]
                    if (blue_cou == 3) {
                        let x = validate_for_win("blue")
                        
                        if (x == true) {
                            win_Cheer()
                            blue_score+=1
                            gameDraw=0
                        increasScore(blue_score,"blue");
                        }
                        else
                            blue_cou -= 1
                    }


                }

            }

            if(gameDraw==9){
                drawGame()
                gameDraw=0
            }
        }//function end herer

        function validate_for_win(getColr) {

            for (let i = 0; i < comb_of_win.length; i++) {
                che = 0
                for (let j = 0; j < 3; j++) {
                    if (store_color_or_name[comb_of_win[i][j]] == getColr) {
                        che++
                        if (che == 3)
                            break
                    }
                    else {
                        che = 0
                    }

                }
                if (che == 3)
                    break

            }

            if (che == 3)
                return true
            else
                return false


        }

