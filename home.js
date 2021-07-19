var team=[
{
    id: 1,
    name: "Team: Kolkata Night Riders(KKR)",
    teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
},
{
    id: 2,
    name: "Team: Royal Challengers Bangalore(RCB)",
    teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
},
{
    id: 3,
    name: " Team: Chennai Super Kings(CSK)",
    teamIcon: "https://lh3.googleusercontent.com/7oK0Ufjxh8REjOCYwOQjcpYyaeMdTknUgx7Lp8ssQIg1kl3ZyBIQe8euHfBWJ8zK_fc1SbN8W1710q4UhETYY7SZ"
},
{
    id: 4,
    name: "Team: Mumbai Indians(MI)",
    teamIcon: "https://yt3.ggpht.com/ytc/AKedOLSUVdCLLVCeY9sPVTwI0TqcCmHMivFtotMR1VyrZg=s900-c-k-c0x00ffffff-no-rj"
},
{
    id: 5,
    name: "Team: Rajasthan Royals(RR)",
    teamIcon: "https://lh3.googleusercontent.com/bUWqs3fYSoaWQgjvaNM6dgHTMCGUCPYZSGIbNa6HrggjNcnnz-CGEGxAjf8LJf80yB85V8BPMCiUtfizb7iW_-8DIg"
},
{
    id: 6,
    name: "Team: Sunrisers Hyderabad(SH)",
    teamIcon: "data:image/jpeg;base64,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"
},
{
    id: 7,
    name: "Team: Punjab Kings(PK)",
    teamIcon: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
},
{
    id: 8,
    name: "Team: Delhi Capitals",
    teamIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
}

]

// <div class="single-team">
//     <a class="link" href="#">
//     <div class="individual-team">
//     <div class="team-pic-div">
//     <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"/>
//     </div>   
//     <h1>Team : Kolkata Night Riders(KKR)</h1>
//     </div>
//     </a>
// </div> 

var teamsDiv= document.getElementById("teams-div")

function  createTeamCard(data){
    var singleTeam= document.createElement("div")
    singleTeam.className="single-team"
    var link= document.createElement("a")
    link.className="link"
    link.href="./details.html?p="+ data.id
    var individualTeam= document.createElement("div")
    individualTeam.className= "individual-team"
    var teamPicDiv= document.createElement("div")
    teamPicDiv.className="team-pic-div"
    var teamPic= document.createElement("img")
    teamPic.src=data.teamIcon
    teamPicDiv.appendChild(teamPic)
    var teamName= document.createElement("h1")
    teamName.innerHTML=data.name
    individualTeam.appendChild(teamPicDiv)
    individualTeam.appendChild(teamName)
    link.appendChild(individualTeam)
    singleTeam.appendChild(link)
    // teamsDiv.appendChild(singleTeam)

   return singleTeam
}


for(var i=0; i<team.length; i++){
    teamsDiv.appendChild(createTeamCard(team[i]))
  
}

// var btnAddNew= document.getElementById("btn-addnew")
// btnAddNew.addEventListener("click",function(){
 
// })


const searchFun=()=>{
    let filter= document.getElementById("search-box").value.toUpperCase();
    for(var i=0; i<team.length; i++){
        if(team[i].name.toUpperCase().indexOf(filter) > -1){
            createTeamCard(team[i]).style.opacity="1"
        }else{
           createTeamCard(team[i]).style.opacity="0"
        }
    }
}
