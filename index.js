//Popup window opening function 
function openPopUp(abc) {
    abc.style.visibility = "visible";
    document.querySelector("body").style.overflow = "hidden";
}


//Popup window closing function
function closePopUp(abc) {
    abc.style.visibility = "hidden";
    document.querySelector("body").style.overflow = "scroll";
}


//---------------------Sign-up functionality---------------------
let signUpButton = document.querySelector("#sign_up_button");
let signUp = document.querySelector("#sign_up");
let closeSignUp = document.querySelector("#close_sign_up")

signUpButton.addEventListener("click", function () {
    openPopUp(signUp);
})

closeSignUp.addEventListener("click", function () {
    closePopUp(signUp);
})


document.querySelector("#submit").addEventListener("click", getSignUpData);
let signUpForm = document.querySelector("#email");

let users = JSON.parse(localStorage.getItem("usersLS")) || [];

function getSignUpData(event) {
    event.preventDefault();

    let userExists = false;

    //checking user already exists or not
    users.forEach(function (el) {
        if (el.email == signUpForm.value) {
            alert("User already Exists!");
            userExists = true;
            return;
        }
    })

    //if user not exists then only able to sign up
    if (!userExists) {
        let obj = {
            email: signUpForm.value,
            password: 12345
        }

        users.push(obj);

        localStorage.setItem("usersLS", JSON.stringify(users));

        alert("🙂 Sign Up successfully, go for Sign-in.")
        alert("Password sent to your Gmail")

        signUpForm.value = "";
    }

    signUpForm.value = "";
}


//--------------------------Video Player--------------------------
let videoPlayButton = document.querySelector("#play_button");
let videoPlayer = document.querySelector("#video_player");
let closeVideoPlayer = document.querySelector("#close_video_player");

videoPlayButton.addEventListener("click", function () {
    openPopUp(videoPlayer);
})


videoPlayer.addEventListener("click", function () {
    closePopUp(videoPlayer);
})

closeVideoPlayer.addEventListener("click", function () {
    closePopUp(videoPlayer)
})



//-------------------------------Sliding part-------------------------------
let roadmaps = [
    {
        name: "Roadmaps",
        heading: "Set Goals & Timelines",
        desc: "Set a visual timeline for your big-picture goals and build team alignment by automating progress as tasks are completed. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.51eeb43.webp"
    },

    {
        name: "Tasks",
        heading: "Collaborate on Tasks",
        desc: "Flexibly organize, prioritize, and track daily work with a high level of detail using Kanban, List, Timeline, Calendar, and Swimlane views. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.82364f8.webp"
    },

    {
        name: "Discussions",
        heading: "Establish Knowledge Hub",
        desc: "Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.c91cddb.webp"
    },

    {
        name: "Docs",
        heading: "Create Docs & Wikis",
        desc: "Create beautiful docs, notes, and wikis for your projects and share with anyone. Nifty even integrates natively with Google Docs. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.7a68883.webp"
    },

    {
        name: "Reporting",
        heading: "Automate Reporting",
        desc: "Access automated progress reporting across all your projects and team activities to ensure operational clarity. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.c9f3a5a.webp"
    }
]


let engineering = [
    {
        name: "Engineering",
        description: "Let go of fragmented tools. Plan, track, and manage your workflows with award-winning ease — in one collaborative workspace.",
        points: ["Real-time progress reporting with Milestones", "Custom development workflows with if/then rules", "Manage issues, bugs, and changes directly in one place"],
        image: "https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp"
    },

    {
        name: "Sales",
        description: "Empower your sales teams by adding flow to their work with real-time reporting and insights using automated workflows.",
        points: ["Track lead status and values for pipeline visibility", "Create & store sales collateral for streamlined access", "Automate the creation of projects upon closing of leads"],
        image: "https://niftypm.com/_nuxt/img/large@1x.a9e1772.webp"
    },

    {
        name: "Marketing",
        description: "Deliver better results with fewer tools. Manage tasks, campaigns, and marketing content with real-time collaboration in one place.",
        points: ["Expedite approval for creatives with Proofing", "Create & track marketing campaigns as Milestones", "Align content schedules using Calendar View for Tasks"],
        image: "https://niftypm.com/_nuxt/img/large@1x.10c81ee.webp"
    },

    {
        name: "Product",
        description: "Build better products with team alignment. Create clear product roadmaps and automate progress reporting as tasks are completed.",
        points: ["Prioritize & track feature sprints as Milestones", "Build spec documents using Nifty or Google Docs", "Improve decision-making with custom Project Embeds"],
        image: "https://niftypm.com/_nuxt/img/large@1x.fade5e2.webp"
    },

    {
        name: "Client Management",
        description: "Never lose a client due to poor communication again. Real-time collaboration to shorten feedback cycles and automate progress reporting.",
        points: ["Instant messaging & one-click video meetings", "Centralize files & expedite approvals with Proofing", "Sharable project boards for real-time progress reporting"],
        image: "https://niftypm.com/_nuxt/img/large@1x.0c3cfc6.webp"
    },

    {
        name: "IT",
        description: "Streamline, centralize, and modernize your workflows. One app to manage your processes without letting anything fall through the cracks again.",
        points: ["Gather tickets using forms & prioritize resolutions", "Automate ticket assignments with status assignees", "Plan project timelines & deployments using Roadmaps"],
        image: "https://niftypm.com/_nuxt/img/large@1x.37d8320.webp"
    }
]

let roadmapsSpans = document.querySelectorAll("#roadmaps>div:first-child>div:first-child>span");

let engineeringSpans = document.querySelectorAll("#engineering>div:first-child>div:first-child>span");



let index = 0;
let slidShow = () => {

    let roadmapsHeading = document.querySelector("#roadmaps_heading");
    let roadmapsDescription = document.querySelector("#roadmaps_description");
    let roadmapsImage = document.querySelector("#roadmaps_image");


    let engineeringHeading = document.querySelector("#engineering_heading");
    let engineeringDescription = document.querySelector("#engineering_description");
    let oneOption = document.querySelector("#one");
    let twoOption = document.querySelector("#two");
    let threeOption = document.querySelector("#three");
    let engineeringImage = document.querySelector("#engineering_image")

    id = setInterval(() => {
        if (index === roadmaps.length) {
            index = 0;
        }


        for (let i = 0; i < roadmapsSpans.length; i++) {
            // if (i >= 2) {
            //     roadmapsSpans[i - 2].style.color = "gray";
            //     roadmapsSpans[i - 2].style.borderBottom = "none";
            // }

            if (roadmapsSpans[i].innerText == roadmaps[index].name) {
                roadmapsSpans[i].style.color = "#00baab";
                // roadmapsSpans[i+1].style.color = "#00baab";
                roadmapsSpans[i].style.borderBottom = "2px solid #00baab";
            }
        }
        roadmapsHeading.innerText = roadmaps[index].heading;
        roadmapsDescription.innerText = roadmaps[index].desc;
        roadmapsImage.src = roadmaps[index].image;


        for (let i = 0; i < engineeringSpans.length; i++) {
            // if (i >= 2) {
            //     roadmapsSpans[i - 2].style.color = "gray";
            //     roadmapsSpans[i - 2].style.borderBottom = "none";
            // }
            // engineeringSpans.forEach(function(el){
            //     el.style.color = "gray";
            //     el.style.borderBottom = "none";
            // })

            if (engineeringSpans[i].innerText == engineering[index].name) {
                engineeringSpans[i].style.color = "#00baab";
                // engineeringSpans[i+1].style.color = "#00baab";
                engineeringSpans[i].style.borderBottom = "2px solid #00baab";
            }
        }

        engineeringHeading.innerText = engineering[index].name;
        engineeringDescription.innerText = engineering[index].description;
        oneOption.innerText = engineering[index].points[0];
        twoOption.innerText = engineering[index].points[1];
        threeOption.innerText = engineering[index].points[2];
        engineeringImage.src = engineering[index].image;


        index++;
    }, 5000)
};

slidShow();
