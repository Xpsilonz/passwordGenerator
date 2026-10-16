const generateButton = document.querySelector("#generate");
const password = document.getElementById("password")
const copy = document.getElementById("copy")

function generateRandomPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    const array = new Uint32Array(16)
    let result = ""
    crypto.getRandomValues(array)

    for (let i = 0; i < 16; i++){
        result += chars[array[i] % chars.length];
    }

    return result;
}

generateButton.addEventListener("click", function buttonClicked() {
    const genPassword = generateRandomPassword()
    generateButton.textContent = "Regenerate Password"
    password.replaceChildren(genPassword + " ", copy);
    copy.removeAttribute("hidden");
    password.removeAttribute("hidden");
})

copy.addEventListener('click', function(event) {
    event.preventDefault();
    const textToCopy = password.textContent.replace(" Copy", "");

    navigator.clipboard.writeText(textToCopy)
    .then(function() {
        alert('Copied to clipboard!');
    })
    .catch(function(err) {
        console.error('Failed to copy: ', err);
    });
});