


let navTabs = {
    About: '<h3>Experienced Tech professional and consultant with a demonstrated history of team leading through project management and supervisory positions. Skilled in banking compliance, data analysis, cybersecurity, fraud detection, coding and programming languages, customer service and team leadership. I hold an associates degree in Business Administration and am pursuing my Bachelor of Science in Computer Science. I am also completing a software engineering program at PerScholas Technical School learning JavaScript, CS principles, and Front and Back end development.</h3>',
    Experience:'<h3>Tech Support-Agent Please, Supervisor-U.S Census Bureau,    Banking/Tech Support Analyst-PNC Bank,  Help Desk Associate & I.T Consultant-Insight Enterprises</h3>',
    Education: '<h3>PerScholas Technical School: Software Engineering Program (Graduation:April 2023),  Associate of Science in Business Administration(Graduation 2018),   Kennesaw State University: Bachelor of Science in Computer Science (Present)</h3>',
    Additional: '<h3>Eve Robotics- Mentor,  Honor Society-Member,   Received Presidential Volunteer Service Award</h3>'
}

//query selectors


// let something = document.querySelector()
// let something = document.querySelector()
// let something = document.querySelector()
// let something = document.querySelector()

//functions
const uploadInfo = (tabName) => {
    if(tabName==="About")
    {
    let mainBox = document.querySelector('.mainContainer')
    mainBox.innerHTML=navTabs.About

    let Title = document.querySelector('.currentTitle')
    Title.innerHTML="About"
}
   
else if(tabName==="Experience")
{let mainBox = document.querySelector('.mainContainer')
console.log("experience");
mainBox.innerHTML=navTabs.Experience

let Title = document.querySelector('.currentTitle') 
Title.innerHTML="Experience"
}

else if(tabName==="Education")
{let mainBox = document.querySelector('.mainContainer')
   console.log("education");
mainBox.innerHTML=navTabs.Education

let Title = document.querySelector('.currentTitle') 
Title.innerHTML="Education"
}

else if(tabName==="Additional")
{let mainBox = document.querySelector('.mainContainer')
console.log("Additional");
mainBox.innerHTML=navTabs.Additional

let Title = document.querySelector('.currentTitle') 
Title.innerHTML="Additional Info"
}

}