const BlogDatabase = JSON.parse(localStorage.getItem("blogData"))
const blogElement = document.getElementsByClassName("content")[0]

// Loop over keys in the database
for (let key in BlogDatabase) {
    // Get a reference to the array of objects
    const currentBlog = BlogDatabase[key]
    
    // Loop over the array of objects
    for (let i = 0; i < currentBlog.length; i++) {
        // Current item in the array
        let item = currentBlog[i]

        // Build a string to insert into the DOM
        blogElement.innerHTML += `
        <article class="${key}">
            <h2><em>${item.title}</em></h2>
            
            <h4>by ${item.author}</h4>
            <h6>${item.date}</h6>
            
            <section class="blog">
            <p>${item.content}</p>
            </section>
        </article>
        `
    }
}