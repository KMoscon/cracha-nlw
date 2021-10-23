
//Altere para o seu usuário nas respectivas redes sociais.
const SocialMediaLinks = {
  github: "kmoscon",
  youtube: "pewdiepie",
  facebook: "kayky.moscon",
  instagram: "kaymsc",
  twitter: "@Mosconzinho" 
}

function changeSocialMediaLinks() {
 for (let li of userSocialMedia.children) {
   const social = (li.getAttribute('class'));
   li.children[0].href = `https://${social}.com/${SocialMediaLinks[social]}`;
 } 
   
 }

changeSocialMediaLinks();


function changeUserProfileInfo(){
  const url = `https://api.github.com/users/${SocialMediaLinks.github}`
  fetch(url)
  .then(response => response.json())
  .then (data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url
    userProfilePicture.src = data.avatar_url
    userLogin.textContent = data.login;
  })
}

 changeUserProfileInfo();


