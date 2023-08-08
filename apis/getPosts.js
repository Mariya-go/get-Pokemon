const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .catch((err) => console.error(err));
};

export default getPosts;
