// Random Dog Image
document.getElementById('randomDogBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const dogImageContainer = document.getElementById('randomDogImage');
        dogImageContainer.innerHTML = `<img src="${data.message}" alt="Random Dog" style="max-width: 300px; border-radius: 10px;">`;
    } catch (error) {
        console.error("Failed to fetch dog image:", error);
        alert("Woof! Couldn't fetch a dog. Try again later!");
    }
});

// Dog Post
document.getElementById("dogPostForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const input = document.getElementById("dogPostInput");
    const message = input.value.trim();
    
    if (message) {
        const greetsList = document.querySelector("#greets ul");
        const newPost = document.createElement("li");
        newPost.innerHTML = `
            <div class="avatar"></div>
            <span>${message}</span>
        `;
        greetsList.prepend(newPost);
        input.value = "";
    }
});