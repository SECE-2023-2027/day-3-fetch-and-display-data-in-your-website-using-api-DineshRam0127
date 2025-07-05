document.addEventListener('DOMContentLoaded', function() {
    const fetchUsersBtn = document.getElementById('fetchUsers');
    const fetchPostsBtn = document.getElementById('fetchPosts');
    const clearDataBtn = document.getElementById('clearData');
    const dataContainer = document.getElementById('dataContainer');
    const loadingElement = document.getElementById('loading');

    // Fetch users from API
    fetchUsersBtn.addEventListener('click', function() {
        showLoading();
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(users => {
                displayUsers(users);
                hideLoading();
            })
            .catch(error => {
                showError(error);
                hideLoading();
            });
    });

    // Fetch posts from API
    fetchPostsBtn.addEventListener('click', function() {
        showLoading();
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(posts => {
                displayPosts(posts);
                hideLoading();
            })
            .catch(error => {
                showError(error);
                hideLoading();
            });
    });

    // Clear displayed data
    clearDataBtn.addEventListener('click', function() {
        dataContainer.innerHTML = '';
    });

    // Display users in the container
    function displayUsers(users) {
        dataContainer.innerHTML = '';
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;
            dataContainer.appendChild(userCard);
        });
    }

    // Display posts in the container
    function displayPosts(posts) {
        dataContainer.innerHTML = '';
        // Display only first 10 posts for brevity
        const limitedPosts = posts.slice(0, 10);
        limitedPosts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            postCard.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <p><strong>Post ID:</strong> ${post.id}</p>
                <p><strong>User ID:</strong> ${post.userId}</p>
            `;
            dataContainer.appendChild(postCard);
        });
    }

    // Show loading indicator
    function showLoading() {
        loadingElement.style.display = 'block';
        dataContainer.innerHTML = '';
    }

    // Hide loading indicator
    function hideLoading() {
        loadingElement.style.display = 'none';
    }

    // Show error message
    function showError(error) {
        dataContainer.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
});