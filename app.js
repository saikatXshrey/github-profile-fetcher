//initializing Github class
const github = new Github;
//initializing UI class
const ui = new UI;

//search input 
const searchUser = document.querySelector('#searchUser');
//search input event listener
searchUser.addEventListener('keyup', (trigger) => {
    //getting input text
    const userText = trigger.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //alert 
                    ui.callAlert('User Not Found', 'alert alert-danger');
                } else {
                    //show profile
                    ui.showProfile(data.profile);
                    //show repositories
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //clear profile
        ui.clearProfile();
    }
});